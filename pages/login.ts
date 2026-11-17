import {Page} from '@playwright/test'

export class LoginPage{

    constructor(private page:Page) {}

    async doLogin(){

        const url='https://automationpracticehubapp.netlify.app';
        const username = this.page.getByPlaceholder('Admin');
        const password = this.page.getByLabel('Password');
        const loginBtn = this.page.getByRole('button', {name:'Sign In'});

        await this.page.goto(url);
        await username.fill('Admin');
        await password.first().fill('Hello@123');
        await loginBtn.click();

    }

    async invalidLogin(){
        const url='https://automationpracticehubapp.netlify.app';
        const username = this.page.getByPlaceholder('Admin');
        const password = this.page.getByLabel('Password');
        const loginBtn = this.page.getByRole('button', {name:'Sign In'});


        await this.page.goto(url);
        await username.fill('Admin');
        await password.first().fill('Hello123');
        await loginBtn.click();

    }
}