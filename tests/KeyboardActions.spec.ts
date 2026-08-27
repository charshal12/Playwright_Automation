import {test,expect} from '@playwright/test';

test('Keyboard Actions: Press Enter', async ({ page }) => {
await page.goto('https://www.flipkart.com/');
await page.locator('.b3wTlE').click();
await page.getByRole('textbox', { name: 'Search for Products, Brands' }).focus();
await page.keyboard.type("Laptop");
await page.keyboard.press("Enter");
await expect(page.locator('//a[@class="GD4sye ECYCDD"]')).toHaveText('Laptops');
await page.waitForTimeout(5000);
});

test('Keyboard Actions: Select All (CTRL+A) and Backspace', async ({ page }) => {
await page.goto('https://www.flipkart.com/');
await page.locator('.b3wTlE').click();
await page.getByRole('textbox', { name: 'Search for Products, Brands' }).focus();
await page.keyboard.type("Laptop");
await page.keyboard.press('Control+A');
await page.waitForTimeout(3000);
await page.keyboard.press('Backspace');
await page.waitForTimeout(5000);
});

test ('Keyboard Actions: Copy Paste', async ({ page }) => {
await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

await page.locator('#name').focus();
await page.keyboard.type("Jim Corbett");
await page.keyboard.press('Control+A');
await page.keyboard.press('Control+C');
const email=page.locator('#email');
await email.focus();
await page.keyboard.press('Control+V')
const existingEmailValue = await email.inputValue();
const existingEmailTrimValue= existingEmailValue.replace(/\s+/g, '');//removing whitespaces
const emailValue = await email.fill(existingEmailTrimValue+'@gmail.com');
console.log(emailValue);
// await expect(page.locator('#email')).toContainText("Jim Corbett");
await page.waitForTimeout(5000);
});

test.only('Keyboard Actions: Shift Down', async ({ page }) => {
await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
await page.locator('#name').focus();
await page.keyboard.down('Shift');
await page.keyboard.press('KeyA');
await page.keyboard.up('Shift');
await page.waitForTimeout(5000);
});

