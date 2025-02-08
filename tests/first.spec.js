const {test, expect} = require('@playwright/test');
const {FirstPage} = require('../pageObjects/FirstPage');
const {LoginPage} = require('../pageObjects/LoginPage');
const {BasketPage} = require('../pageObjects/BasketPage');
const dataSet = JSON.parse(JSON.stringify(require("../utils/placeholderTestData")))


test.beforeEach(async ({ page }) => {
    const firstPage = new FirstPage(page);
    await firstPage.goTo(); 
});

for(const data of dataSet)
{
test(`Search item ${data.item}`, async({page})=>
{
    ///const context = await browser.newContext();
    ///const page = await context.newPage();
    
    //const search = "wazon";
    const firstPage = new FirstPage(page);
    //await firstPage.goTo();
    
    console.log(await page.title());
    ///await expect(page).toHaveTitle('Zara Home Polska / Poland | Oficjalna strona')
    await firstPage.acceptCookieMet();
    await firstPage.searchLook();
    await firstPage.chooseItem(data.item);

    

    await page.pause();
    

});
}
test('Choose test: bathroom', async({page})=>
{
    
    const firstPage = new FirstPage(page);
    //await firstPage.goTo();
    await firstPage.acceptCookieMet();
    await firstPage.chooseBath();
    //await firstPage.closeSubsMet();



    await page.pause();
});

test('Registration without success', async({page})=>
    {
            
        const firstPage = new FirstPage(page);
        await firstPage.acceptCookieMet();
    
        const name = "Joanna"
        const email = "joan@joan.com"
        const password = "test"
        const loginPage = new LoginPage(page);
        await loginPage.loginMet(name, email, password);
            
            //await firstPage.closeSubsMet();
        
        
        
        await page.pause();
        });

test.only('I want to add item to the basket', async({page})=>
    {
        
        const firstPage = new FirstPage(page);
        await firstPage.acceptCookieMet();
        await firstPage.hover();

        const basketPage = new BasketPage(page);
        await basketPage.newItemMet();
        
        await basketPage.closeSubsMetTwo();
        await basketPage.chooseLampMet();




        
        
        
        //await firstPage.closeSubsMet();
    
    
    
        await page.pause();
    });


