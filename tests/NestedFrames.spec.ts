import {test, expect} from 'playwright/test';
test('Nested Frames', async ({ page }) => { 
    await page.goto('https://play1.automationcamp.ir/frames.html');

    //frame using frame locator
    const parentFrame = await page.frameLocator("#frame1");

    const childFrame = parentFrame.frameLocator("#frame2");

    childFrame.locator("#click_me_2").click();
    await expect(childFrame.locator("#click_me_2")).toHaveText("Clicked");
    
    await page.waitForTimeout(5000);

})