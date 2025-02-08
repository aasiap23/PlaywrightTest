const { waitForDebugger } = require("inspector");
const { Z_ASCII } = require("zlib");
const { expect } = require('@playwright/test'); 


class FirstPage {
    constructor(page)
    {
        this.page = page;

        this.acceptCookie = page.locator("#onetrust-accept-btn-handler")
        this.closeSubs = page.locator("//button[@type='button']")



        this.searchS = page.getByText("Szukaj");
        this.searchType = page.getByPlaceholder("Czego szukasz?");

        this.menuHover = page.locator("span[aria-label='MENU']")
        this.bathroom = page.locator("div[id='cat1020116641'] div[class='elem-level-1 menu-category ng-star-inserted'] a:nth-child(1)");
        this.beautychoose = page.locator("div[id='cat1020411837'] span")
        this.filterItem = page.locator("div[class='action-bar-content__item filter-item ng-star-inserted'] a span")
        this.colorfilter = page.locator("span[aria-label='colFilter']")
        this.colorEcruchoose = page.getByText("W KOLORZE ECRU")
        this.colorBlackchoose = page.getByText("CZARNE")
        this.accept = page.locator(".mdc-button__label").filter({hasText: "Zastosuj"})
        this.itemEcruChose = page.locator("img[title='KOMPLET RĘCZNIKÓW DO RAK Z BAWEŁNY WYSOKIEJ JAKOŚCI (KOMPLET 3 SZT.)']");

        


        

    }

    async goTo()
    {
        await this.page.goto("https://www.zarahome.com/pl");
    }


    async acceptCookieMet()
    
    {
        await this.acceptCookie.click();
    }
    
    
    async closeSubsMet()
    
    {
        await this.closeSubs.click();
    }



    async searchLook()
    {
        await this.searchS.click();
        
    }

    async chooseItem(search){

        await this.searchType.type(search);
    
        
    }

    async chooseBath(){

        await this.menuHover.hover();
        await expect(this.bathroom).toHaveText('ŁAZIENKA');
        await this.bathroom.click();
        await this.beautychoose.click();
        await this.filterItem.click();
        await this.colorfilter.click();
        await this.closeSubs.click();
        await this.colorEcruchoose.click();
        await this.colorEcruchoose.isChecked();
        await this.colorBlackchoose.click();
        await this.colorBlackchoose.isChecked();
        await this.accept.click();
        await this.itemEcruChose.click();
    
    }

    async hover(){

        await this.menuHover.hover();
        
    
    }




}

module.exports = {FirstPage};