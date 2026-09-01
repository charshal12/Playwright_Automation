import {test, expect} from '@playwright/test';
import {Login} from './PageObjectModelDemo/SauceDemo/LoginPage';
import { ProductPage } from './PageObjectModelDemo/SauceDemo/ProductPage';
import { CheckoutPage } from './PageObjectModelDemo/SauceDemo/CheckoutPage';


test('User should be able to login', async({page}) => {
    const login = new Login(page);
    const productPage = new ProductPage(page);
    const cart = new CheckoutPage(page);

    await login.navigate("https://www.saucedemo.com/");
    await login.waitForPageLoad();
    await login.loginSauceDemo("standard_user", "secret_sauce");
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');


    const isProduct = await productPage.isProductFieldvisible();
    expect(isProduct).toBeTruthy();

    const isLogo = await  productPage.isLogoPresent();
    expect(isLogo).toBeTruthy();

    await productPage.validateProductDetails();
    await productPage.addToCartByName("Sauce Labs Onesie");
    await page.waitForTimeout(4000);
    await productPage.clickOnCheckOutBtn();
    const productNameInCart = await cart.getProductNmeInCart();
    expect(productNameInCart).toBe("Sauce Labs Onesie");


})