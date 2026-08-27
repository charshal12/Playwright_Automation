import {test, expect} from 'playwright/test';

test('Web Table 1', async ({ page }) => {
    await page.goto('https://letcode.in/table/');
    const table = await page.locator("#shopping");
    await expect(table).toBeVisible();

    const rows = await page.locator("#shopping tbody tr").count();
    console.log(`No of rows in the table are : ${rows}`);
    expect(rows).toBe(4);

    const columns = await page.locator("#shopping thead tr th").count();
    console.log(`No of columns in the table are : ${columns}`);
    expect(columns).toBe(2);

    const itemName = await page.locator("#shopping tbody tr:nth-child(2) td:nth-child(1)").textContent();
    console.log(`The value of the cell is : ${itemName}`);
    expect(itemName).toBe("Apple");

    const itemPrice = await page.locator("#shopping tbody tr:nth-child(2) td:nth-child(2)").textContent();
    console.log(`The value of the cell is : ${itemPrice}`);
    expect(itemPrice).toBe("180");

    const columnHeader = await page.locator("#shopping thead tr th:nth-child(1)").textContent();
    console.log(`The value of the column header is : ${columnHeader}`);
    expect(columnHeader).toEqual("Items");

    const priceHeader = await page.locator("#shopping thead tr th:nth-child(2)").textContent();
    console.log(`The value of the column header is : ${priceHeader}`);
    expect(priceHeader).toEqual("Price");
})

test('Web Table 2', async ({ page }) => {
    await page.goto('https://letcode.in/table/');
    const table = await page.locator("#simpletable");
    await expect(table).toBeVisible();

    const names = ['Koushik', 'Yashwant', 'Iron'];
    for (const name of names) {
        const row = await page.locator("#simpletable tbody tr").filter({ hasText: name });
        await row.locator("input[type='checkbox']").check();
        await expect(row.locator("input[type='checkbox']")).toBeChecked();
    }
})

test('Web Table 3', async ({ page }) => {
    await page.goto('https://letcode.in/table/');
    const calories = await page.locator("//tbody[contains(@class,'text-slate-700 dark:text-slate-300')]//td[2]").allTextContents();

    console.log(calories);

    const isSorted = calories.join()===[...calories].sort().join();
    console.log(`Is the column sorted : ${isSorted}`);
    await expect(isSorted).toBeTruthy();

})

//tbody[@class='divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300']//td[2]
//tbody[contains(@class,'dark:bg-slate-950 text-slate-700 dark:text-slate-300')]//td[2]
//tbody[contains(@class,'text-slate-700 dark:text-slate-300')]//td[2] ==> xpath
//tbody.text-slate-700.dark\:text-slate-300 td:nth-child(2) ==> CSS equivalent
