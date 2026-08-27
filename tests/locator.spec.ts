import {test,expect} from '@playwright/test';

test.skip('Locators Practice', async ({ page }) =>
{
    await page.goto('https://www.amazon.in');
    await page.getByRole('button',{name : 'Continue shopping'}).click();
    // await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Laptop');
    // await page.getByRole('button', { name: 'Go', exact: true }).click();
    // await page.getByText('Customer Service').click();
    
//    await page.getByAltText('Refrigerators').click();
    //await page.getByTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in').click();
    
})

test.skip('Locators Practice 2', async ({ page }) =>
{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    // const labelName = await page.getByLabel('Name:');
    // await expect(labelName).toBeVisible();
    await page.getByPlaceholder('name@example.com').fill('abc@gmail.com');
         // not recommended, but used here for demonstration purposes
})

test.skip('Locators Practice 3', async ({ page }) =>{
    await page.goto('https://demo.applitools.com/');
    //await page.waitForTimeout(5000);
    // await page.getByPlaceholder('Enter your username').fill('Username');
    // await page.waitForTimeout(5000); // not recommended, but used here for demonstration purposes
    
})

test.skip('Locators Practice 4', async ({ page }) =>{
await page.goto('https://excalidraw.com/');
await page.getByTitle('Keep selected tool active after drawing — Q').click();
//await page.getByTestId('main-menu-trigger').click();
await page.waitForTimeout(5000);
})

//CSS Selectors
test.skip('Locators Practice 5', async ({ page }) =>{
    await page.goto('https://accounts.saucelabs.com/am/XUI/#login/');
    // await page.locator('#idToken1').fill('username'); //Page.locator("#idName")
    // await page.locator("input[type='password']").fill('password'); //Page.locator(".className")
    // await page.locator(".btn.btn-lg.btn-block.btn--primary").click(); //Page.locator(".className1.className2.className3")
    // //await page.locator("input[role='button']").click();//Page.locator("tagName[attribute='value']")
    await page.locator(".btn.btn-block.btn--social").nth(2).click();//Page.locator(".className").nth(0) //nth(1) //nth(2)
    await page.waitForTimeout(5000);
})

//XPATH
test('Locators Practice 6', async ({ page }) =>{
    await page.goto('https://www.amazon.in/');
    await page.getByRole('button',{name : 'Continue shopping'}).click();
    //await page.locator("//input[@id='twotabsearchtextbox']").fill('laptop');
    await page.locator("//a[text()='Prime Video']").click();
    //await page.waitForTimeout(5000);
})  
