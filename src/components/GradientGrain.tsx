import { useEffect, useRef } from 'react'

/** Procedural grain, animated only while visible and motion is allowed. */
export function GradientGrain({ color = '#1e5c95' }: { color?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const tile = document.createElement('canvas')
    tile.width = tile.height = 256
    const tileContext = tile.getContext('2d')
    if (!tileContext) return
    const pixels = tileContext.createImageData(256, 256)
    const rgb = [1, 3, 5].map((offset) => parseInt(color.slice(offset, offset + 2), 16))
    let seed = 42
    for (let i = 0; i < pixels.data.length; i += 4) {
      // A fixed seed keeps the texture stable across mounts and resizes.
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
      pixels.data[i] = rgb[0]
      pixels.data[i + 1] = rgb[1]
      pixels.data[i + 2] = rgb[2]
      pixels.data[i + 3] = seed >>> 24
    }
    tileContext.putImageData(pixels, 0, 0)
    const pattern = context.createPattern(tile, 'repeat')
    if (!pattern) return

    let frame = 0
    const draw = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.round(canvas.clientWidth * scale)
      const height = Math.round(canvas.clientHeight * scale)
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }
      // Shift the small reusable tile, keeping the gradient and its mask still.
      pattern.setTransform(new DOMMatrix().translate((frame * 73) % 256, (frame * 151) % 256))
      context.clearRect(0, 0, width, height)
      context.fillStyle = pattern
      context.fillRect(0, 0, width, height)
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = false
    let animationId = 0
    let lastFrame = 0
    const animate = (time: number) => {
      // 4.8 fps is 60% slower than the original 12 fps grain.
      if (time - lastFrame >= 1000 / 4.8) {
        frame += 1
        draw()
        lastFrame = time
      }
      animationId = requestAnimationFrame(animate)
    }
    const updateAnimation = () => {
      cancelAnimationFrame(animationId)
      if (visible && !document.hidden && !reducedMotion.matches) {
        lastFrame = 0
        animationId = requestAnimationFrame(animate)
      }
    }
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      updateAnimation()
    })
    intersection.observe(canvas)
    reducedMotion.addEventListener('change', updateAnimation)
    document.addEventListener('visibilitychange', updateAnimation)
    const observer = new ResizeObserver(draw)
    observer.observe(canvas)
    draw()
    return () => {
      observer.disconnect()
      intersection.disconnect()
      cancelAnimationFrame(animationId)
      reducedMotion.removeEventListener('change', updateAnimation)
      document.removeEventListener('visibilitychange', updateAnimation)
    }
  }, [color])

  return <canvas ref={ref} className="gradient-grain" aria-hidden="true" />
}
