import {test,expect} from '@playwright/test'

test.describe('Google Search Tests', ()=> {
    
    test('Test 1 : Search for Playwright Automation.@Smoke', async({page}) => {
        await page.goto("http://www.google.com");
        await page.fill("//textarea[@name='q']","Playwright Automation");
        await page.press("//textarea[@name='q']",'Enter');
       // await expect(page).toHaveTitle('Playwright'); 
       console.log('Searched for Playwright Automation');
    });

    test('Test 2 : Search for Selenium Automation.@Smoke', async({page}) => {
        await page.goto("http://www.google.com");
        await page.fill("//textarea[@name='q']","Selenium Automation");
        await page.press("//textarea[@name='q']",'Enter');
        console.log('Searched for Selenium Automation');
    });

    test('Test 3 : Search for Cypress Automation.@Regression', async({page}) => {
        await page.goto("http://www.google.com");
        await page.fill("//textarea[@name='q']","Cypress Automation");
        await page.press("//textarea[@name='q']",'Enter');
        console.log('Searched for Cypress Automation');
    });

    test('Test 4 : Search for API Automation.@Regression', async({page}) => {
        await page.goto("http://www.google.com");
        await page.fill("//textarea[@name='q']","API Automation");
        await page.press("//textarea[@name='q']",'Enter');
        console.log('Searched for API Automation');
    });

     test('Test 5 : Search for Postman Automation.@Regression', async({page}) => {
        await page.goto("http://www.google.com");
        await page.fill("//textarea[@name='q']","Postman Automation");
        await page.press("//textarea[@name='q']",'Enter');
        console.log('Searched for Postman Automation');
    });


})