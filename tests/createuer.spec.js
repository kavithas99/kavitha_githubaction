import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {LoginPage} from '../pages/login';
import {CreateAccount} from '../pages/createaccount'

test('test', async ({ page }) => {

    const firstname=faker.person.fullName();
    const lastname=faker.person.lastName();
    faker.date.weekday();

    const loginpageobj=new LoginPage(page)
    loginpageobj.clickcreateaccountlink('xreqyy@we.com')
    const createaccount=new CreateAccount(page)
    createaccount.createaccountsubmit(firstname,lastname)  

});