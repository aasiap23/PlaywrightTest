const { waitForDebugger } = require("inspector");
const { Z_ASCII } = require("zlib");
const { expect } = require('@playwright/test'); 
const exp = require("constants");


class BasketPage {
    constructor(page)
    {
        this.page = page;

    
        this.newItems = page.locator("#cat1020379201");
        this.closeSubsTwo = page.locator("//button[@type='button']")
        
        this.chatClose = page.locator("zrc-header__close-svg")
        this.searchHover = page.locator("a[class='center-container__search-toggle header-button ng-star-inserted'] span[class='text-icon']")
        this.lampOnecolor = page.getByText("JEDNOKOLOROWA DOTYKOWA LAMPA BIURKOWA")
        this.goldColorLamp = page.locator("li[class='product-color-selector__color ng-star-inserted selected'] img[alt='Złoty']")
        this.priceLamp = page.locator("zh-product-price[class='product-detail-content__product-price'] span[class='price-single__current inline-avoid-rtl']")
        this.imgLamp = page.locator("div[class='swiper-slide ng-star-inserted swiper-slide-active'] img[alt='JEDNOKOLOROWA DOTYKOWA LAMPA BIURKOWA']")
        this.swipNextButton = page.locator(".swiper-button-next")
        this.closeImgLamp = page.locator(".icon.close.icon-close")
        this.plusButton = page.locator(".units-selector__btn-units.increase.icon-plus-thin")
        this.countLamp = page.locator("input[type='tel']")
        this.addToCart = page.locator(".add-to-cart-button__text.ng-star-inserted")
        this.checkBasket = page.locator("footer[class='mini-cart__footer'] span[class='mdc-button__label']")

        this.emptyBasket = page.getByRole("button", {name:"OPRÓŻNIJ KOSZYK"})
        

 

    }

   

    
    async newItemMet()
    
    {
        await this.newItems.click();
        await expect(this.newItems).toHaveText("NOWE ARTYKUŁY")
    
        await this.searchHover.hover();
    
        

    }
    async closeSubsMetTwo()
    
    {
        //await this.chatClose.click();
        await this.closeSubsTwo.click();
    }

    async chooseLampMet()
    
    {
        await expect(this.lampOnecolor).toHaveText("JEDNOKOLOROWA DOTYKOWA LAMPA BIURKOWA");
        await this.lampOnecolor.click();
        await expect(this.priceLamp).toHaveText("149PLN")
        //await this.goldColorLamp.click();
        await this.imgLamp.click();
        await this.swipNextButton.click();
        await this.closeImgLamp.click();
        await this.plusButton.first().click();
        //await expect(this.countLamp).toHaveValue('2');
        const digital = await this.countLamp.inputValue();
        expect(Number(digital)).toBe(2);
        
        await this.addToCart.click();
        

        // bez białych znaków
        await expect(this.addToCart).toHaveText(/Dodaj do koszyka\s*\(\s*\d+PLN\s*\)/, { timeout: 15000 });

        await expect(this.checkBasket).toHaveText("Sprawdź twój koszyk")
        await this.checkBasket.click();
        
    }

    async basketMet(){
        await expect(this.emptyBasket).toHaveText("OPRÓŻNIJ KOSZYK")
        await this.emptyBasket.click()

    }

    

    


    }

    






module.exports = {BasketPage};