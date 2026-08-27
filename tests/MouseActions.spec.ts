import {test,expect} from '@playwright/test';

test('Mouse Actions single click', async ({ page }) => {
await page.goto('https://play1.automationcamp.ir/mouse_events.html');
await expect(page.locator('//span[@id="click_type"]')).not.toBeVisible();
await page.locator('div #click_area').click();
await page.click('div #click_area');
await expect(page.locator('//span[@id="click_type"]')).toHaveText('Click');
await page.waitForTimeout(5000);


});
test('Mouse Actions Right click', async ({ page }) => {
await page.goto('https://play1.automationcamp.ir/mouse_events.html');
await expect(page.locator('//span[@id="click_type"]')).not.toBeVisible();
await page.locator('div #click_area').click({button:'right'});
await page.click('div #click_area',{button:'right'});
await expect(page.locator('//span[@id="click_type"]')).toHaveText('Right-Click');
await page.waitForTimeout(5000);


});

test('Mouse Actions double click', async ({ page }) => {
await page.goto('https://play1.automationcamp.ir/mouse_events.html');
await expect(page.locator('//span[@id="click_type"]')).not.toBeVisible();
await page.locator('div #click_area').dblclick();
await page.dblclick('div #click_area');
await expect(page.locator('//span[@id="click_type"]')).toHaveText('Double-Click');
await page.waitForTimeout(5000);


})

test('Mouse Actions: Click and Select from dropdown', async ({ page }) => {
await page.goto('https://play1.automationcamp.ir/mouse_events.html');
await page.locator('//button[@class="dropbtn"]').hover();
// await page.waitForSelector("div .dropdown-content");
await (expect(page.locator('div .dropdown-content'))).toBeVisible();
await page.locator("p#dd_python").click();
await expect(page.locator('//h4[@id="hover_validate"]')).toHaveText('Python');
await page.waitForTimeout(5000);


})

test('Mouse Actions: Drag and Drop', async ({ page }) => {
await page.goto('https://play1.automationcamp.ir/mouse_events.html');
await page.dragAndDrop('#drag_source','#drop_target');
await expect(page.locator('#drop_target')).toHaveText('Drop is successful!');

await page.locator('#drag_source').dragTo(page.locator('#drop_target'));
await expect(page.locator('#drop_target')).toHaveText('Drop is successful!');

await page.waitForTimeout(5000);
})

test('Mouse Actions: Scroll Page Manually', async ({ page }) => {
await page.goto('https://play1.automationcamp.ir/mouse_events.html');
await page.mouse.wheel(0,500);
await expect(page.locator('#drop_target')).toHaveText('Target');

await page.waitForTimeout(5000);
})