import type { ImgHTMLAttributes } from 'react'
import generatedMedia from '../data/media.generated.json'

type Media = { src: string; srcSet: string; width: number; height: number }
const media: Record<string, Media> = generatedMedia

export function PortfolioImage({ src, sizes = '100vw', ...props }: ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }) {
  const optimized = media[src]
  return <img
    src={optimized?.src ?? src}
    srcSet={optimized?.srcSet}
    sizes={sizes}
    width={optimized?.width}
    height={optimized?.height}
    {...props}
  />
}
