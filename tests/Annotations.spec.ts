import {test,expect} from '@playwright/test'

test.describe('Google Search Tests', () => {
    
    test('Google Homepage should load', async({page}) => {
        await page.goto("http://www.google.com");
        await expect(page).toHaveTitle("Google");

    })

    test.skip('Google search should work', async({page}) => {
        await page.goto("http://www.google.com");
        await page.fill("   ","Playwright");
        await page.press("//textarea[@name='q']",'Enter');
        await expect(page).toHaveTitle('Playwright'); 
       
    })

    test.fixme('Check is Google logo is visible', async({page}) => {
         await page.goto("http://www.google.com");
         await expect(page.locator('img[alt="Google"]')).toBeVisible(); 
    })

    test('Google images should load', async({page}) => {
        test.slow();
         await page.goto("http://www.google.com");
         await expect(page).toHaveTitle(/Google Images/); 
    })

    test.fail('Google logo should be visible (but using an incorrect selector)', async({page}) => {
        test.slow();
         await page.goto("http://www.google.com");
          await expect(page.locator('img[alt="WrongGoogleLogo"]')).toBeVisible(); 
    })

    test('Search Playwright Automation', async({page}) => {
        test.slow();
        await page.goto("http://www.google.com");
        await page.fill("textarea[aria-label='Search']","Playwright Automation");
        await page.press("//textarea[@name='q']",'Enter');
        console.log("Test 1 Execution Completed.") 
    })


    

})