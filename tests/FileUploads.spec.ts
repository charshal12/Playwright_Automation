import {test,expect} from '@playwright/test';
import path from 'path';

test('File Uploads 1', async ({ page }) => {
await page.goto('https://testpages.eviltester.com/pages/files/file-upload/');

const uploadFileName= '123.xlsx';
const filePath = path.join(__dirname,'Uploads', uploadFileName);
await page.setInputFiles('#fileinput',filePath);
await expect(page.locator('#itsafile')).toBeEnabled();
//await page.waitForTimeout(3000);
await page.locator('#itsafile').click();
const uploadButton = await page.locator('//input[@type="submit"]');
uploadButton.isEnabled();
uploadButton.click();

await expect(page.locator('div.centered h2')).toHaveText('You uploaded this file:');
await expect(page.locator('#uploadedfilename')).toHaveText(uploadFileName);

await page.waitForTimeout(5000);


});


test ('Multiple File Uploads', async ({ page }) => {
await page.goto('http://uitestingplayground.com/upload');

const uploadFileName1= '123.xlsx';
const uploadFileName2= 'ABC.docx';

const frame1 = page.frameLocator("iframe[src='/static/upload.html']");

const filePath1 = path.join(__dirname,'Uploads', uploadFileName1);
const filePath2 = path.join(__dirname,'Uploads', uploadFileName2);
await frame1.locator(".browse-btn").waitFor({state : 'attached'});
await frame1.locator(".browse-btn").setInputFiles([filePath1,filePath2]);

const uploadedFiles = await frame1.locator('//div[@class=\"file-item\"]//p').allTextContents();
console.log(uploadedFiles);

await expect(uploadedFiles).toContain(uploadFileName1);
await expect(uploadedFiles).toContain(uploadFileName2);
await page.waitForTimeout(5000);

});