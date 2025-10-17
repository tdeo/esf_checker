// @ts-check

import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://www.esf-lagrave.fr/tout-petits/')

  await page.getByRole('dialog').getByRole('button').click()
  await page.getByLabel('07/02/2026 - 14/02/2026').nth(1).click()

  const section = await page.locator('section').filter({ hasText: 'matin' }).filter({ hasText: 'stage flocon et +' })
  await expect(section).toBeVisible()

  const button = await section.getByText('Réserver')
  await expect(button).toBeVisible()

  await button.click()

  await expect(page.getByText('Notre service de réservation est fermé')).toBeVisible()
});
