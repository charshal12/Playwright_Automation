import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.getByRole('link', { name: 'Mobile Accessories' }).click();
});