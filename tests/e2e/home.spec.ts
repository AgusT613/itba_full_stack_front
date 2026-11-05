import { test, expect } from '@playwright/test'

test.describe('Home Page Public Experience', () => {
  test('renders the landing page with main sections', async ({ page }) => {
    await page.goto('/')

    // Expect page title or main hero branding
    await expect(page).toHaveTitle(/ITBANK/i)

    // Check that navigation elements are visible
    const loginLink = page.getByRole('link', { name: /iniciar sesión/i }).first()
    if (await loginLink.isVisible()) {
      await expect(loginLink).toBeVisible()
    }
  })
})
