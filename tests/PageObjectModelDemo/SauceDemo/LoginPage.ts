import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class Login extends BasePage
{
    constructor(page : Page){
        super(page);
    }

    private userNameField = "#user-name";
    private passwordField = "#password";
    private loginBtn = "#login-button"; 

    async loginSauceDemo(userName:string, password:string){
        await this.page.fill(this.userNameField,userName);
        await this.page.fill(this.passwordField,password);
        await this.page.click(this.loginBtn);
    }
}
