import {test, expect} from 'playwright/test';

test('Frames Using Name', async ({ page }) => {
await page.goto('https://testpages.eviltester.com/pages/embedded-pages/frames/');

//page.frames()
const noOfFrames = page.frames();
console.log(`No of Frames in the page are : ${noOfFrames.length}`);

//using name or url  or locator or index to switch to frame
const frame1= page.frame({name : 'left'});

if(frame1) {
  const ele = await  frame1.waitForSelector("h1", {state : 'visible'});
  const text = frame1.locator("h1");
  await expect(text).toHaveText("Left");
}   else{
    console.error("The Left named Frame is not found on the page.");
}

});



test('Frames Using URL', async ({ page }) => {
await page.goto('https://testpages.eviltester.com/pages/embedded-pages/frames/');

//page.frames()
const noOfFrames = page.frames();
console.log(`No of Frames in the page are : ${noOfFrames.length}`);

//print all the prames
noOfFrames.forEach((frame, index) => {
  console.log(frame.url());
});

//using name or url  or locator or index to switch to frame
const frame2 = page.frame({ url: /frame-includes\/middle\.html/ });

if(frame2) {
  await frame2.waitForSelector("h1", { state: 'visible' });
  const ele = frame2.locator("h1");
  await expect(ele).toHaveText("Middle");
} else {
    console.error("The Middle named Frame is not found on the page.");
}

});



test('Frames Using Index', async ({ page }) => {
await page.goto('https://testpages.eviltester.com/pages/embedded-pages/frames/');

//page.frames()
const noOfFrames = page.frames();
console.log(`No of Frames in the page are : ${noOfFrames.length}`);
const frame3 = noOfFrames[4];
await expect (frame3.locator("h1")).toHaveText("Right");
});