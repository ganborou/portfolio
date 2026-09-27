import { useEffect, useRef } from 'react'

/** Static, procedural grain: no image requests or animation loop. */
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

    const draw = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.round(canvas.clientWidth * scale)
      const height = Math.round(canvas.clientHeight * scale)
      if (canvas.width === width && canvas.height === height) return
      canvas.width = width
      canvas.height = height
      context.fillStyle = pattern
      context.fillRect(0, 0, width, height)
    }
    const observer = new ResizeObserver(draw)
    observer.observe(canvas)
    draw()
    return () => observer.disconnect()
  }, [color])

  return <canvas ref={ref} className="gradient-grain" aria-hidden="true" />
}
