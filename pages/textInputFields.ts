import {Page} from '@playwright/test';

export class TextInputFields {
constructor(private page:Page){}

async textInputFields(){

    const firstName = this.page.getByTestId('first-name');
    const lastName = this.page.getByPlaceholder('Enter your last name');
    const email = this.page.getByTestId('email');
    const password = this.page.getByLabel('Password');
    const feedback = this.page.getByRole('textbox',{name:'Feedback'});
    const submitButton = this.page.getByRole('button',{name:'Submit'})

    await firstName.fill('Kishore');
    await lastName.fill('Pol');
    await email.fill('kishor@gmail.com');
    await password.fill("Kishor@123");
    await feedback.fill('This is a feedback message');
    await submitButton.first().click();

}

}
