import {test, expect} from '@playwright/test';
import{LoginPage} from '../pages/login';

test('Login your application', async ({page})=>{
  const loginPage = new LoginPage(page);
  await loginPage.doLogin();

  console.log(await page.getByTestId('basic-elements-page').isVisible());
  await page.getByRole('button', {name:'Logout'}).click();

})


test('After Login successful message',async({page})=>{
  const loginPage = new LoginPage(page);
  await loginPage.doLogin()

  const successMessage = page.getByText(/HomePage/i, {
        exact: true
    });

    await expect(successMessage).toBeVisible();


})


test('After Login Logout button is visible and logged out',async({page})=>{

const loginPage = new LoginPage(page);
await loginPage.doLogin();

const visibleText = page.getByText('Practice automation testing with fundamental HTML form elements and interactions.');
await expect(visibleText).toBeVisible();

await page.getByRole('button', {name:'Logout'}).click();

const logoutMessage = page.getByText('Welcome Back');
await expect(logoutMessage).toBeVisible();

});

test('Invalid Login',async({page})=>{

  const loginPage = new LoginPage(page);
  loginPage.invalidLogin();
  const errorMessage = page.getByText('Invalid username or password. Please try again.');
  await expect(errorMessage).toBeVisible();

})