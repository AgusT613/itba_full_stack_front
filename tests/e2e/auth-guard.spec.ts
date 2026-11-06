import { expect, test } from '@playwright/test'

test.describe('Route Protection & Proxy Guard', () => {
  test('redirects unauthenticated user accessing /inicio/cuentas to login page', async ({
    page,
  }) => {
    await page.goto('/inicio/cuentas')

    // Should be redirected to /login/iniciar-sesion by proxy.ts
    await expect(page).toHaveURL(/.*login\/iniciar-sesion/)
  })

  test('redirects unauthenticated user accessing /inicio/tarjetas to login page', async ({
    page,
  }) => {
    await page.goto('/inicio/tarjetas')

    await expect(page).toHaveURL(/.*login\/iniciar-sesion/)
  })

  test('redirects unauthenticated user accessing /inicio/prestamos to login page', async ({
    page,
  }) => {
    await page.goto('/inicio/prestamos')

    await expect(page).toHaveURL(/.*login\/iniciar-sesion/)
  })
})
