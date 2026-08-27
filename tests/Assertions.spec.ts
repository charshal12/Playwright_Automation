import {test, expect} from 'playwright/test';
test ('Assertions ', async ({ page }) => {
await page.goto('https://www.amazon.in/');
await page.waitForTimeout(5000);
//await page.getByRole('button',{name : 'Continue shopping'}).click();
await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
await expect(page).toHaveURL('https://www.amazon.in/');
const logo =page.locator("#nav-logo-sprites");
await expect(logo).toBeVisible();

const search = page.locator("#twotabsearchtextbox");
await expect(search).toBeEnabled();
//const password = page.locator(#);
})

test.skip('Assertions 1', async({ page }) => {

await page.goto('https://sauce-demo.myshopify.com/account/login');

const sometext = page.locator("#login_email label");
await expect(sometext).toHaveText("Email Address");//matches complete text


const text = page.locator("#footer-content p");
await expect(text).toContainText("awesome");// find the locator with partial data

const attributeValue = page.locator("#customer_email");
await expect(attributeValue).toHaveAttribute('type','email');
await expect(attributeValue).toHaveClass('long');
await expect(page.locator("#customer_password")).toHaveClass("long password");
})


test('Assertions 2', async({ page }) => {

await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
const userName = page.locator("#name").fill("Test User");
await page.waitForTimeout(5000);
const userEmail = page.locator("#email").fill("Test Email");
await page.waitForTimeout(5000);
await expect(page.locator("#name")).toHaveValue("Test User");
await page.locator("#gender").check();
await expect(page.locator("#gender")).toBeChecked();
await page.locator("#hobbies").check();
await expect(page.locator("#hobbies")).toBeChecked();

})