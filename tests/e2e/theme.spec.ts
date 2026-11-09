import { expect, test } from '@playwright/test'

test.describe('Theme Switching Experience', () => {
  test('toggles between light and dark modes in the public footer', async ({
    page,
  }) => {
    await page.goto('/')

    const footer = page.locator('#footer')
    const themeGroup = footer.getByRole('group', {
      name: /seleccionar tema visual/i,
    })
    await expect(themeGroup).toBeVisible()

    const lightBtn = themeGroup.getByRole('button', { name: /tema claro/i })
    const darkBtn = themeGroup.getByRole('button', { name: /tema oscuro/i })

    // Click light theme
    await lightBtn.click()
    await expect(page.locator('html')).toHaveClass(/light/)

    // Click dark theme
    await darkBtn.click()
    await expect(page.locator('html')).toHaveClass(/dark/)
  })
})
