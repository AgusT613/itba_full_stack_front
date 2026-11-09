import { expect, test } from '@playwright/test'

test.describe('FAQ Accordion Experience', () => {
  test('expands and collapses FAQ items correctly', async ({ page }) => {
    await page.goto('/legal/faq')

    // Find the first FAQ trigger
    const trigger = page.getByRole('button', {
      name: /¿Qué es la plataforma de Homebanking\?/i,
    })
    await expect(trigger).toBeVisible()

    // Click to expand
    await trigger.click()
    await expect(
      page.getByText(
        /Homebanking es un servicio en línea que le permite realizar operaciones bancarias/i,
      ),
    ).toBeVisible()

    // Click to collapse
    await trigger.click()
    await expect(
      page.getByText(
        /Homebanking es un servicio en línea que le permite realizar operaciones bancarias/i,
      ),
    ).toBeHidden()
  })
})
