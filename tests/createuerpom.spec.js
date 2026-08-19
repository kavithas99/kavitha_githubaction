import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/login';
import { CreateAccount } from '../pages/createaccount';

test('test', async ({ page }) => {
  const firstname = faker.person.firstName();
  const lastname = faker.person.lastName();

  const loginpageobj = new LoginPage(page);
  await loginpageobj.clickcreateaccountlink('ser@ty.com');

  const createAccountPage = new CreateAccount(page);
  await createAccountPage.createaccountsubmit(firstname, lastname);

  await expect(page.getByText('Your account has been created.')).toBeVisible();
});