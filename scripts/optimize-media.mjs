import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import sharp from 'sharp'

const assets = JSON.parse(await readFile('docs/asset-manifest.json', 'utf8'))
const media = {}
let originalBytes = 0
let optimizedBytes = 0

for (const asset of assets) {
  if (asset.sourcePath.endsWith('.svg')) continue
  const original = await readFile(asset.sourcePath)
  const metadata = await sharp(original).metadata()
  const isCover = /^\/media\/projects\/[^/]+\.png$/.test(asset.originalPublicPath)
  const targetWidths = isCover ? [443, 886, 1329, metadata.width] : [480, 960, Math.min(metadata.width, 1440)]
  const widths = [...new Set(targetWidths.filter((width) => width <= metadata.width))].sort((a, b) => a - b)
  const variants = []
  for (const width of widths) {
    const outputPath = asset.publicPath.replace(/\.webp$/, `-${width}.webp`)
    const output = await sharp(original).resize({ width, withoutEnlargement: true }).webp(isCover ? { lossless: true, effort: 5 } : { quality: 88, effort: 5 }).toBuffer()
    await mkdir(dirname(`public${outputPath}`), { recursive: true })
    await writeFile(`public${outputPath}`, output)
    variants.push({ src: outputPath, width })
    optimizedBytes += output.length
  }
  const fallback = variants.at(-1)
  media[asset.originalPublicPath] = {
    src: fallback.src,
    srcSet: variants.map(({ src, width }) => `${src} ${width}w`).join(', '),
    width: metadata.width,
    height: metadata.height,
  }
  originalBytes += original.length
}

await writeFile('src/data/media.generated.json', JSON.stringify(media, null, 2) + '\n')
console.log(`Media: ${(originalBytes / 1048576).toFixed(1)} MB of originals → ${(optimizedBytes / 1048576).toFixed(1)} MB across all responsive variants.`)
