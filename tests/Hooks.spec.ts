import{test, Page, chromium, Browser} from '@playwright/test';
let browser : Browser;
let page : Page;

test.describe("Hooks", () => {
     test.beforeAll(async() =>{
        console.log("Launch the browser");
        browser = await chromium.launch({headless:false}); //launch browser
        page = await browser.newPage(); //open the page
     })

     test.afterAll(async() => {
        console.log("Closing the browser");
        await browser.close();
     })

     test.beforeEach(async() =>
    {
        console.log("Launching the URL");
        await page.goto("https://www.google.com/");    
    })

    test.afterEach(async() =>
    {
        console.log("Test Completed");
    })

    test("Test 1 : Search Playwright automation", async() =>
        {
            await page.locator('//textarea[@title="Search"]').fill('Playwright Automation');
            await page.keyboard.press('Enter');
            console.log("Test 1 Execution is completed")
        })

    test("Test 2 : Search JavaScrript Tutorial", async() =>
        {
            await page.locator('//textarea[@title="Search"]').fill('JavaScrript Tutorial');
            await page.keyboard.press('Enter');
            console.log("Test 2 Execution is completed")
        })
})