import { expect, test } from '@playwright/test'

test('home, contacts and all six directions are available', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await page.evaluate(() => document.fonts.ready)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('ЛавроваАня')
  await expect(page.getByRole('link', { name: 'Написать мне →' })).toHaveAttribute('href', 'mailto:dzihiko07+work@gmail.com')
  await expect(page.getByRole('link', { name: 'Telegram', exact: true })).toHaveAttribute('href', 'https://t.me/ganborou')
  const nav = page.getByRole('navigation', { name: 'Направления работ' })
  await expect(nav.getByRole('link')).toHaveCount(6)
  for (const label of ['Спецпроекты', 'Сайты', 'Продукт', 'Анимация', 'Постеры', 'Мерч']) {
    await nav.getByRole('link', { name: label, exact: true }).click()
    await expect(page.getByRole('heading', { level: 1, name: label, exact: true })).toBeVisible()
    const loaded = await page.locator('.project-cover').evaluateAll(async (images) => {
      await Promise.all(images.map((image) => (image as HTMLImageElement).decode()))
      return images.every((image) => (image as HTMLImageElement).naturalWidth > 0)
    })
    expect(loaded).toBe(true)
    await page.getByRole('link', { name: '← Назад', exact: true }).click()
    await expect(page).toHaveURL(/\/#work$/)
  }
  expect(errors).toEqual([])
})

test('case route works directly, on refresh and with parent navigation', async ({ page }) => {
  await page.goto('/work/websites')
  await page.getByRole('link', { name: 'Водно-развлекательный комплекс Волна' }).click()
  await expect(page).toHaveURL(/\/projects\/volna$/)
  await page.reload()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Водно-развлекательный комплекс Волна')
  await expect(page.locator('.case-gallery img').first()).toBeVisible()
  await page.getByRole('link', { name: '← Назад', exact: true }).click()
  await expect(page).toHaveURL(/\/work\/websites$/)
})

test('unknown routes and categories show the 404 page', async ({ page }) => {
  for (const path of ['/unknown', '/work/unknown', '/projects/unknown']) {
    await page.goto(path)
    await expect(page.getByRole('heading', { name: 'Здесь пока пусто' })).toBeVisible()
  }
  await page.getByRole('link', { name: '← На главную' }).click()
  await expect(page).toHaveURL('/')
})

test('layout stays within the viewport at reference and intermediate widths', async ({ page }) => {
  for (const width of [320, 375, 393, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const path of ['/', '/work/websites', '/projects/volna']) {
      await page.goto(path)
      await page.evaluate(() => document.fonts.ready)
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)
      expect(overflow, `${path} at ${width}px`).toBe(false)
    }
  }
})

test('keyboard users can reveal the portrait', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === 'mobile', 'The mobile design does not include the portrait trigger.')
  await page.goto('/')
  const trigger = page.getByRole('button', { name: 'Показать портрет Ани' })
  await trigger.focus()
  await expect(page.locator('#hero-portrait')).toBeVisible()
  await trigger.press('Enter')
  await expect(trigger).toHaveAttribute('aria-expanded', 'true')
  await trigger.press('Escape')
  await expect(trigger).toHaveAttribute('aria-expanded', 'false')
})
