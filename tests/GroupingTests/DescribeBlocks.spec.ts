import {test, expect, type Page} from '@playwright/test'

async function login(page : Page){
     await page.goto("https://www.saucedemo.com/");
        const username = await page.locator('#user-name').fill('standard_user');
        const password = await page.locator('#password').fill('secret_sauce');
        const loginBtn = await page.locator('#login-button').click();

        await expect(page.locator('.title')).toHaveText('Products');
}

test.describe("Login Functionality", () => {
    test("Valid Credentials", async({page})=>
     {      await login(page);
    //     await page.goto("https://www.saucedemo.com/");
    //     const username = await page.locator('#user-name').fill('standard_user');
    //     const password = await page.locator('#password').fill('secret_sauce');
    //     const loginBtn = await page.locator('#login-button').click();

    //     await expect(page.locator('.title')).toHaveText('Products');
    })

     test("InValid Credentials", async({page})=>
    {
        await page.goto("https://www.saucedemo.com/");
        const username = await page.locator('#user-name').fill('standard_user1');
        const password = await page.locator('#password').fill('secret_sauce');
        const loginBtn = await page.locator('#login-button').click();
        page.waitForSelector('h3[data-test=\'error\']');
        await expect(page.locator('h3[data-test=\'error\']')).toContainText('do not match');
        
    })

})
 test.describe("Product Page Functionality", () => {
    test("Add Product", async({page})=>
    {await login(page);
        // await page.goto("https://www.saucedemo.com/");
        // const username = await page.locator('#user-name').fill('standard_user');
        // const password = await page.locator('#password').fill('secret_sauce');
        // const loginBtn = await page.locator('#login-button').click();

        // await expect(page.locator('.title')).toHaveText('Products');
        await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
        await expect(page.locator('#remove-sauce-labs-fleece-jacket')).toHaveText('Remove');
      })

     test("CheckOut Page", async({page})=>
    {await login(page);
        // await page.goto("https://www.saucedemo.com/");
        // const username = await page.locator('#user-name').fill('standard_user');
        // const password = await page.locator('#password').fill('secret_sauce');
        // const loginBtn = await page.locator('#login-button').click();

        // await expect(page.locator('.title')).toHaveText('Products');
        await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
        await expect(page.locator('#remove-sauce-labs-fleece-jacket')).toHaveText('Remove');
        await page.locator('//a[@class="shopping_cart_link"]').click();
        await expect(page.locator('.title')).toHaveText('Your Cart');
        await expect(page.locator('#checkout')).toHaveText('Checkout');

        
    })
})