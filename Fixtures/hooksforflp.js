import {test} from '@playwright/test';

test.beforeEach(async ({page})=>{
await page.goto("https://flptitan.com");
console.log("LAUNCHED url..")
})

test.afterEach(async()=>{
console.log("CLOSING the browser..")
})
