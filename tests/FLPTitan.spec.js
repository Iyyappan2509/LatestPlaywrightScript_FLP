import{test} from '@playwright/test';
import VpinPassword2 from '../pages/VpinPassword';
import selectCountries from '../pages/selectCountries';
require('../Fixtures/hooksforflp');
import {readExcelFile }  from '../utils/excelutils';



test('Latest FLP Titan @RegressionMain',async ({page})=>{
    const datas = readExcelFile('C:\\Users\\iulaganathan\\apache-jmeter-5.6.2\\bin\\Iyyappan_Mini_Project\\DemoTestData.xlsx','LoginPage');
   console.log(datas);
    const loginPage=new VpinPassword2(page);
    const countrySelection=new selectCountries(page);
    await loginPage.enterPinValue(datas[0].VpinValue);
    await loginPage.clickValidationButton();
    await countrySelection.cookiesAccept();
    await countrySelection.selectCountry();
    await countrySelection.selectCountryFromList(datas[0].RegionName,datas[0].CountryName,datas[0].Language);
// await page.pause();

})