import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/login';

test('test', async ({ page }) => {

    const firstname=faker.person.fullName();
    const lastname=faker.person.lastName();

    const loginpageobj=new LoginPage(page)
    loginpageobj.clickcreateaccountlink('ser@ty.com')

  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill(firstname);
  await page.getByRole('textbox', { name: 'Last name *' }).click();
  await page.getByRole('textbox', { name: 'Last name *' }).fill(lastname);
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('We1234!');
  await page.locator('#days').selectOption('4');
  await page.locator('#months').selectOption('7');
  await page.locator('#years').selectOption('2002');
  await page.getByRole('button', { name: 'Register ' }).click();
  await expect(page.getByText('Your account has been created.')).toBeVisible();
});