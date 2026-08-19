import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/login.js'
import {CreateAccount} from '../pages/createaccount.js'

export const test = baseTest.extend({

  loginpage: async ({page}, use) => {
    const loginpage = new LoginPage(page)
    //console.log("before fixtutre part")
    await use(loginpage)
    //console.log("after fixture part")
  },
  
  createaccount1: async ({page}, use) => {
    const createaccount1 = new CreateAccount(page)
    //console.log("before fixtutre part")
    await use(createaccount1)
    //console.log("after fixture part")
  }

})
