import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('link', { name: 'One94Store Mini Clip-On' }).click();
  await page.goto('https://www.amazon.in/One94Store-Reading-Students-Rechargeable-Eye-Caring/dp/B0DH54YYR5/?_encoding=UTF8&pd_rd_w=HQYbT&content-id=amzn1.sym.5c71aec9-f305-470c-a5ee-954c638d1aa3&pf_rd_p=5c71aec9-f305-470c-a5ee-954c638d1aa3&pf_rd_r=9BQ6B8FVPBE2PBYJNH4S&pd_rd_wg=39MCX&pd_rd_r=edfa8b9d-7be7-468e-a08c-6154469eb85e&ref_=pd_hp_d_btf_PB&th=1');
  await page.getByRole('button', { name: 'One94Store Mini Clip-On Reading Lamp – USB Rechargeable, Eye-Caring Night Light with 3 Light Modes, Special Folding Design, Perfect for Students (White)', exact: true }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Add to cart', exact: true }).click();
  await page.locator('#sw-gtc').getByRole('link', { name: 'Go to Cart' }).click();
});