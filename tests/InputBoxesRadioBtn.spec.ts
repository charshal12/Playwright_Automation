import { test, expect } from '@playwright/test';

test('InputBox RadioButton Test',async ({ page }) =>
{
await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
await page.locator("#headingOne .accordion-button").click();
await page.getByText(" Text Box").click();
await expect(page).toHaveTitle("Selenium Practice - Text Box");
await expect(page.locator("#TextForm h1")).toHaveText("Text Box");
await page.locator("#fullname").fill("Test User");

await page.locator("#email").fill("Testuser@test.com");
await page.getByPlaceholder("Currend Address").fill("01 Avenue Apartments, Pune");
await page.getByPlaceholder("Password").fill("password");
await page.locator(".btn.btn-primary").click();
})

test("Input Box Radio Button CSS Selectors", async({page})=>{
await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
await page.locator("#headingOne .accordion-button").click();
await page.getByText(" Text Box").click();
await expect(page).toHaveTitle("Selenium Practice - Text Box");
await expect(page.locator("#TextForm h1")).toHaveText("Text Box");
await page.fill("#fullname","Test User");

await page.fill("#email","Testuser@test.com");
await page.fill("#address","01 Avenue Apartments, Pune");
await page.fill("#password","password");
await page.locator(".btn.btn-primary").click();
})


test("Input Box Error Message", async({page})=>{
await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
await page.locator("#headingOne .accordion-button").click();
await page.getByText(" Text Box").click();
await expect(page).toHaveTitle("Selenium Practice - Text Box");
await expect(page.locator("#TextForm h1")).toHaveText("Text Box");

await page.locator(".btn.btn-primary").click();
const errorLabel=page.locator("#fullname-error");
const errorMessage = await errorLabel.textContent();
console.log(errorMessage);

expect(errorMessage).toContain("This field is required.");
})

test("Radio Button", async({page})=>{
await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
await page.locator("#headingOne .accordion-button").click();
await page.getByText(" Radio Button").click();
await expect(page).toHaveTitle("Selenium Practice - Radio Button");
await expect(page.locator("form h1")).toHaveText("Radio Button");
await expect(page.locator("input[value='igottwo']")).not.toBeChecked();
await expect(page.locator("input[value='igotthree']")).not.toBeChecked();
await expect(page.locator("input[value='option3']")).toBeDisabled();

await page.locator("input[value='igottwo']").check();
await expect(page.locator("input[value='igottwo']")).toBeChecked();
await expect(page.locator("#check")).toHaveText("You have checked Yes");

await page.locator("input[value='igotthree']").check();
await expect(page.locator("input[value='igotthree']")).toBeChecked();
await expect(page.locator("#check1")).toHaveText("You have checked Impressive");

await expect(page.locator("#check")).not.toBeVisible();
})

test("Check Box 1 Tutorials Point", async({page})=>{
await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
await page.locator("#headingOne .accordion-button").click();
await page.getByText(" Check Box").click();
await expect(page.locator(".col-md-8.col-lg-8.col-xl-8 h1")).toHaveText("Check Box");
await page.locator("#bs_1 .plus").first().click();
await expect(page.locator("#c_bs_1")).not.toBeChecked();
await expect(page.locator("#c_bf_1")).not.toBeChecked();
await expect(page.locator("#c_bf_2")).not.toBeChecked();

await page.locator("#c_bs_1").check();
await expect(page.locator("#c_bf_1")).toBeChecked();
await expect(page.locator("#c_bf_2")).toBeChecked();

await page.locator("#c_bf_1").uncheck();
await expect(page.locator("#c_bs_1")).not.toBeChecked();
})

test("Check Box 2 Amazon", async({page})=>{
await page.goto('https://www.amazon.in/');
await page.getByRole('button',{name : 'Continue shopping'}).click();
await page.getByPlaceholder('Search Amazon.in').fill('Books');
//await page.waitForTimeout(5000);
await page.getByRole('button', { name: 'Go', exact: true }).click();
await expect(page.locator(".a-color-state.a-text-bold")).toContainText('Books');

//await page.locator("a[aria-label='Apply the filter Hardcover to narrow results'] i[class='a-icon a-icon-checkbox']").check();
await page.locator("//span[text()='Hardcover']").click();

const elements = await page.locator("div[data-cy='price-recipe'] a.a-text-bold").all();

for (const element of elements)
{
    await expect(element).toContainText("Hardcover");
}
})