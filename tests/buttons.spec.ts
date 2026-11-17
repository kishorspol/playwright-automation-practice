import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/login';

test('Buttons', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.doLogin();

    const buttons = page.getByText('Buttons').nth(0);
    await expect(buttons).toBeVisible();

    //Click on the Submit button
    await page.getByRole('button', { name: 'Submit' }).nth(1).click();
    const submitBtnMessage = page.getByText('Form submitted successfully!');
    await expect(submitBtnMessage).toBeVisible();

    //Save button
    await page.getByRole('button',{name:'Save'}).click();
    const saveBtnMessage = page.getByText('Data saved!');
    await expect(saveBtnMessage).toBeVisible();

    //Reset button
    const resetButton = page.getByRole('button',{name:'Reset'});
    await resetButton.click();
    console.log('Reset button clicked successfully');

    //Disabled button
    const disabledButton = page.getByRole('button',{name:'Disabled Button'});
    await expect(disabledButton).toBeVisible();
    await expect(disabledButton).toBeDisabled();


})