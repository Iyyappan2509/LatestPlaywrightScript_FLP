import{test} from '@playwright/test';
import VpinPassword2 from '../pages/VpinPassword';
import selectCountries from '../pages/selectCountries';
require('../Fixtures/hooksforflp');

test('Latest FLP Titan2 @Regression',async ({page})=>{

    const loginPage=new VpinPassword2(page);
    const countrySelection=new selectCountries(page);
    await loginPage.enterPinValue('Uat#2022');
    await loginPage.clickValidationButton();
    await countrySelection.cookiesAccept();
    await countrySelection.selectCountry();
    await countrySelection.selectCountryFromList('Asia','India','English');

// await page.pause();


})