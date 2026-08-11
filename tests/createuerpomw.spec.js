import { expect } from '@playwright/test';
import { test } from '../pages/pomfixture';
import { faker } from '@faker-js/faker';


test('tesoent', async ({ page, loginpage,createaccount1}) => {

    const firstname=faker.person.fullName();
    const lastname=faker.person.lastName();
    faker.date.weekday();

   // const loginpageobj=new LoginPage(page)
    await loginpage.clickcreateaccountlink('xueqasyy@we.com')
    //page.waitForTimeout(3000)
   // const createaccount=new CreateAccount(page)
    await createaccount1.createaccountsubmit(firstname,lastname);

});