import {test,expect} from '@playwright/test';

test('Negative Assertions ',async ({ page }) =>{
await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
// const userName = page.locator("#name").fill("Test User");
// await page.waitForTimeout(5000);
// const userEmail = page.locator("#email").fill("Test Email");
// await page.waitForTimeout(5000);
await expect(page.locator("#name")).not.toHaveValue("Test User");
//await page.locator("#gender").check();
await expect(page.locator("#gender")).not.toBeChecked();
//await page.locator("#hobbies").check();
await expect(page.locator("#hobbies")).not.toBeChecked();

})
    