import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { error } from 'node:console';

export class ProductPage extends BasePage{
    
    constructor(page : Page){
        super(page);
    }

    private productText = ".title";
    private logo = ".app_logo";

    private productList=".inventory_item";
    private productTitle=".inventory_item_name ";
    private productDescription = ".inventory_item_desc";
    private productPrice=".inventory_item_price";
    private addToCartBtn=".btn_primary.btn_small.btn_inventory";
    private checkoutButton ="#shopping_cart_container";

    async isProductFieldvisible(): Promise<boolean>{
        return await this.page.locator(this.productText).isVisible();
    }

    async isLogoPresent() : Promise<boolean>{
        return await this.page.locator(this.logo).isVisible();
    }

    async validateProductDetails(){
        const products = await this.page.locator(this.productList).count();
        console.log(`Total products Found: ${products}`);

        for(let i=0; i<products; i++){
            const title = await this.page.locator(this.productList).nth(i).locator(this.productTitle).innerText();
            console.log(`Product ${i+1} title : ${title}`);

            if(!title){
                throw new Error(`Product ${i+1} is missing title`);
            }


            const description = await this.page.locator(this.productList).nth(i).locator(this.productDescription).innerText();
            console.log(`Product ${i+1} Description : ${description}`);

            if(!description){
                throw new Error(`Product ${i+1} is missing description`);
            }

            
            const price = await this.page.locator(this.productList).nth(i).locator(this.productPrice).innerText();
            console.log(`Product ${i+1} price : ${price}`);

            if(!price){
                throw new Error(`Product ${i+1} is missing price`);
            }

            const addToCart = await this.page.locator(this.productList).nth(i).locator(this.addToCartBtn).innerText();
            console.log(`Product ${i+1} addToCart : ${addToCart}`);

            if(!addToCart){
                throw new Error(`Product ${i+1} is missing addToCart button`);
            }
        
        }
    }

    async addToCartByName(targetProductName:string){
        const productNameCount = await this.page.locator(this.productList).count();
        console.log(productNameCount);

        for(let i=0; i<productNameCount; i++){
            const product = this.page.locator(this.productList).count();
            for(let i=0; i<productNameCount; i++){
                const product = this.page.locator(this.productList).nth(i);
                const name = await product.locator(this.productTitle).textContent();
                console.log(name);
                if(name?.trim() === targetProductName){
                    await product.locator(this.addToCartBtn).click();
                    console.log(`Product : ${targetProductName} is the product added to the cart`);
                    return;
                }
            }
            throw new Error("Product : ${targetProductName} is not found on product page.")
        }

    }
    async clickOnCheckOutBtn(){
        await this.page.locator(this.checkoutButton).click();
    }
} 