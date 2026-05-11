import { receiveMessageOnPort } from "node:worker_threads";

import { expect, test } from "@playwright/test";

class selectCountries{
    constructor(page){
this.page=page;
this.clickCookies= this.page.getByTestId('actionButton-accept');
this.selectCountriesvalue=this.page.getByRole('button', { name: 'select country' });

    }
async cookiesAccept(){
    if(expect(await this.clickCookies.isVisible())){
        console.log("Accepting the cookies..");
await this.clickCookies.click();
}
else{
    console.log("Cookies accept button is not visible..");
}
    }
    

async selectCountry(){
    await this.selectCountriesvalue.click();
}

async selectCountryFromList(regionValue,countryName,Language){
      await this.page.getByRole('button', { name: regionValue }).click();
await this.page.getByRole('button', { name: countryName }).click();
await this.page.getByText(Language).click();
    }
    }

 export default selectCountries;