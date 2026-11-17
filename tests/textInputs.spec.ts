import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/login';
import {TextInputFields} from '../pages/textInputFields';

test('Text input fields', async({page})=>{
    const inputFields = new TextInputFields(page);
    const loginPage = new LoginPage(page);
    await loginPage.doLogin();

    const textInput = page.getByText('Text Inputs');
    await expect(textInput).toBeVisible();

    await inputFields.textInputFields();




})