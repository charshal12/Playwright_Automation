import{test,Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage{
    
    constructor(page : Page){
        super(page);        
    }
   private itemName = ".inventory_item_name";
   
   async getProductNmeInCart() : Promise<String>{
    return(await this.page.locator(this.itemName).textContent())?.trim() || '';
   }
}