import {test,expect} from 'playwright/test'

test('Take Screenshots 1', async({ page }) => {
    await page.goto('https://www.amazon.in/');
    
    await page.waitForTimeout(5000);
    const timeStamp = new Date().toISOString().replace(/[:.]/g, '-');
    // await page.screenshot({path : 'Screenshots/amazon1.png'});//visible part of the screen
    // await page.screenshot({path : 'Screenshots/amazonFull.png', fullPage : true});//Fullpage including footers
    // await page.screenshot({path : `Screenshots/amazon - ${timeStamp}.png`,fullPage : true});//Unique Timestamp 
    const ele = await page.$("#twotabsearchtextbox");
    await ele?.screenshot({path:`Screenshots/amazon - ${timeStamp}.png`});
   //await page.locator('twotabsearchtextbo').fill('hose pipe'); // get the screen shot when the 

})