import {test,expect, Page, chromium} from '@playwright/test'

test.describe('Multiple Tabs and Multiple Windows.', () =>{

    test('Test 1 : Handle Multiple Tabs', async({page : Page}) =>{
        const browser = await chromium.launch({headless : false});
        const context = await browser.newContext();      
        const page = await context.newPage();

        await page.goto('https://demoqa.com/');
        await page.locator("text = Alerts, Frame & Windows").click();
        await page.locator("text=Browser Windows").click();

        const[newTab] = await Promise.all([
            page.waitForEvent("popup"),
            await page.locator("#tabButton").click()
        ]) 

        await newTab.waitForLoadState();
        console.log("New Tab url : ", newTab.url());
        await page.waitForTimeout(3000);
        await newTab.close();
    })


    test('Test 2 : Handle Multiple Windows', async({page : Page}) =>{
        const browser = await chromium.launch({headless : false});
        const context = await browser.newContext();      
        const page = await context.newPage();

        await page.goto('https://demoqa.com/');
        await page.locator("text = Alerts, Frame & Windows").click();
        await page.locator("text=Browser Windows").click();

        const[newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.locator("#windowButton").click()
        ]) 

        await newWindow.waitForLoadState();
        console.log("New Tab url : ", newWindow.url());
        await page.waitForTimeout(3000);
        await newWindow.close();
    })

    test.fixme('Test 3 : Handle Multiple Windows and read message', async({page : Page}) =>{
        const browser = await chromium.launch({headless : false});
        const context = await browser.newContext();      
        const page = await context.newPage();

        await page.goto('https://demoqa.com/');
        await page.locator("text = Alerts, Frame & Windows").click();
        await page.locator("text=Browser Windows").click();

        const[newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.locator("#messageWindowButton").click()
        ]) 

        await newWindow.waitForLoadState();
        const message = await newWindow.textContent('selector-for-the-message');
        console.log('Message in New Tab:', message);
        await page.waitForTimeout(5000);
        await newWindow.close();
    })
})