import {test, expect} from '@playwright/test';

test('Datepicker 1 using fill method', async ({ page }) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    await page.locator("#dob").fill("2025-12-23");
    await expect(page.locator("#dob")).toHaveValue("2025-12-23");

});


test('Datepicker 2 using ', async ({ page }) => {

    await page.goto('https://www.globalsqa.com/demo-site/datepicker/');
    await page.locator("#Simple Date Picker").isVisible();
    //await page.waitForSelector("#Simple Date Picker");
    const frame = page.frameLocator("//div[@rel-title='Simple Date Picker']//iframe[@class='demo-frame']");
    await frame.locator("#datepicker").click();
    await frame.locator("text='12'").click();
    await expect(frame.locator("#datepicker")).toHaveValue("08/12/2026");
    
    await page.waitForTimeout(5000);

});

test('Datepicker 3 selecting Month and Year Dropdown ', async ({ page }) => {

    await page.goto('https://www.globalsqa.com/demo-site/datepicker/');
    await page.locator("//div[@class='newtabs horizontal']//li[@id='DropDown DatePicker']").click();
    await page.waitForSelector("//div[@class='newtabs horizontal']//li[@id='DropDown DatePicker']");

    const frame = page.frameLocator("//div[@rel-title='DropDown DatePicker']//iframe[@class='demo-frame']");
    await frame.locator("#datepicker").click();
    await frame.locator("#ui-datepicker-div").waitFor({ state: 'visible' });
    const month = await frame.locator(".ui-datepicker-month").allTextContents();
    console.log(month);
    await frame.locator(".ui-datepicker-month").click();
    await frame.locator(".ui-datepicker-month").selectOption({ label: 'May' });

    const year = await frame.locator(".ui-datepicker-year").allTextContents();
    console.log(year);
    await frame.locator(".ui-datepicker-year").click();
    await frame.locator(".ui-datepicker-year").selectOption({ value: '2017' });

    await frame.locator("text='10'").click();

    await expect(frame.locator("#datepicker")).toHaveValue("05/10/2017");

    await page.waitForTimeout(5000);
});

test('Datepicker 4 ', async ({ page }) => {   
  await page.goto('https://www.globalsqa.com/demo-site/datepicker/');
    await page.locator("#Simple Date Picker").isVisible();
    //await page.waitForSelector("#Simple Date Picker");
    const frame = page.frameLocator("//div[@rel-title='Simple Date Picker']//iframe[@class='demo-frame']");
    await frame.locator('#datepicker').click();
    const date = new Date();
    console.log(date);
    const currentDate = date.getDate();
    console.log(currentDate);

    await frame.locator(`text='${currentDate}'`).click();
    // 08/22/2026 Mon/Date/Year format
    const today = new Date();
    const currentDay = today.getDate();
    console.log(currentDay);
    const currentMonth = today.getMonth() + 1; // Months are zero-based, so we add 1
    console.log(currentMonth);
    const currentYear = today.getFullYear();
    console.log(currentYear);
    const formattedDate = `${currentMonth.toString().padStart(2, '0')}/${currentDay.toString().padStart(2, '0')}/${currentYear}`;
    console.log(formattedDate); 
    await frame.locator("#datepicker").click();
    const datepickerValue = await frame.locator("#datepicker").inputValue();
    console.log(datepickerValue);
  //  await page.waitForTimeout(5000);

    const expectedDate = new Date(formattedDate);
    const actualDate = new Date(datepickerValue);
     expect (actualDate.getTime()).toBe(expectedDate.getTime());



});

test('Datepicker 5 ', async ({ page }) => { 
    const targetYear = 2027;
    const targetMonth = "May";
    const targetDate = "2";
    await page.goto('https://www.globalsqa.com/demo-site/datepicker/');
    await page.locator("#Simple Date Picker").isVisible();
    const frame = page.frameLocator("//div[@rel-title='Simple Date Picker']//iframe[@class='demo-frame']");
    await frame.locator('#datepicker').click();
//await page.waitForTimeout(5000);
    while(true){
        const displayedYearText = await frame.locator(".ui-datepicker-year").textContent() || "0";
        
        console.log(displayedYearText);
        const displayedYear = parseInt(displayedYearText);
        console.log(displayedYear);

        if(displayedYear === targetYear)
            break;
        if(displayedYear<targetYear)
            await frame.locator(".ui-datepicker-next").click();
        else
            await frame.locator(".ui-datepicker-prev").click();
    }

    while(true){
        const displayedMonth = await frame.locator(".ui-datepicker-month").textContent();
        console.log(displayedMonth);
    
        if(displayedMonth === targetMonth)
            break;
        else
            await frame.locator(".ui-datepicker-next").click();
    }
    await frame.locator(`text="${targetDate}"`).click();
    await page.waitForTimeout(5000);

})