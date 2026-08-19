import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/login';
import { CreateAccount } from '../pages/createaccount';

test('test', async ({ page }) => {
  const firstname = faker.person.firstName();
  const lastname = faker.person.lastName();
  const email = faker.internet.email();

  const loginpageobj = new LoginPage(page);
  await loginpageobj.clickcreateaccountlink(email);

  await page.screenshot({ path: 'Screenshots/createAccountscreenshot.png', fullPage: true });
  console.log('Email is ' + email);

  const createaccount = new CreateAccount(page);
  await createaccount.createaccountsubmit(firstname, lastname);

  await page.screenshot({ path: 'Screenshots/createAccountsubmitscreenshot.png', fullPage: true });
  await expect(page.getByText('Your account has been created.')).toBeVisible();
});