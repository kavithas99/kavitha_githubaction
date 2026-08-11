import {test as baseTest} from '@playwright/test'

type Myfixture={
fixture1:any;

}

export const test=baseTest.extend<Myfixture>({

fixture1:async({}, use)=>{
const fixture1="set up 1"
console.log("before fixtutre part")
await use(fixture1)
console.log("after fixture part")
}


})