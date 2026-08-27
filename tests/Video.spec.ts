import {test,expect} from 'playwright/test'

test('Take Video 1', async({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('hose pipe');
    await page.waitForTimeout(30000);
    page.close();
});