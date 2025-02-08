const { waitForDebugger } = require("inspector");
const { Z_ASCII } = require("zlib");
const { expect } = require('@playwright/test'); 


class LoginPage {
    constructor(page)
    {
        this.page = page;

        this.login = page.locator("a[class='right-container__account-link header-button ng-star-inserted'] span[class='text-icon']")
        this.newAccount = page.getByRole("button", {name:"Utwórz nowe konto"});
        this.countryList = page.getByLabel("Poland")
        this.countryLogin = page.locator("#mat-select-4-panel").filter({hasText:'Malta'})
        this.nameLogin = page.locator("#firstName")
        this.emailLogin = page.locator("#email")
        this.passwordLogin = page.locator("#password")
        this.acceptRodo = page.locator("#checkbox-privacy-policy-accepted-signup-input")
        this.acceptNewsleter = page.locator("#subscribeToNewsletter-input")
        this.createAccount = page.getByRole("button", {name:"UTWÓRZ KONTO"})

        this.oneSmallLetterIcon = page.locator("//body[1]/div[5]/div[2]/div[1]/mat-dialog-container[1]/div[1]/div[1]/zh-login-dialog[1]/div[1]/div[1]/zh-signup[1]/div[1]/form[1]/zh-password-strength[1]/div[1]/ul[1]/li[1]/span[1]")
        this.oneBigLetterIcon = page.locator("//body[1]/div[5]/div[2]/div[1]/mat-dialog-container[1]/div[1]/div[1]/zh-login-dialog[1]/div[1]/div[1]/zh-signup[1]/div[1]/form[1]/zh-password-strength[1]/div[1]/ul[1]/li[3]/span[1]")
        this.oneDigitalIcon = page.locator("//body[1]/div[5]/div[2]/div[1]/mat-dialog-container[1]/div[1]/div[1]/zh-login-dialog[1]/div[1]/div[1]/zh-signup[1]/div[1]/form[1]/zh-password-strength[1]/div[1]/ul[1]/li[5]/span[1]")

        this.minEightIcon = page.locator("//body[1]/div[5]/div[2]/div[1]/mat-dialog-container[1]/div[1]/div[1]/zh-login-dialog[1]/div[1]/div[1]/zh-signup[1]/div[1]/form[1]/zh-password-strength[1]/div[1]/ul[1]/li[2]/span[1]")

        this.maxThreeIcon = page.locator("//body[1]/div[5]/div[2]/div[1]/mat-dialog-container[1]/div[1]/div[1]/zh-login-dialog[1]/div[1]/div[1]/zh-signup[1]/div[1]/form[1]/zh-password-strength[1]/div[1]/ul[1]/li[4]/span[1]")

    }

    

    async loginMet(name, email, password)
    
    {
        await this.login.click();
        await this.newAccount.click()
        //await this.countryList.click()
        //await this.countryLogin.click()
        await this.nameLogin.type(name);
        await this.emailLogin.type(email);
        await this.passwordLogin.type(password);
        await this.acceptRodo.click()
        await this.acceptNewsleter.click();
        await expect(this.acceptNewsleter).toBeChecked();
        await this.acceptNewsleter.click();
        await expect(this.acceptNewsleter).not.toBeChecked();
        await this.createAccount.click();
        await expect(this.oneSmallLetterIcon).toHaveClass("icon icon-check");
        await expect(this.oneBigLetterIcon).toHaveClass("icon icon-cross");
        await expect(this.oneDigitalIcon).toHaveClass("icon icon-cross");
        await expect(this.minEightIcon).toHaveClass("icon icon-cross");
        await expect(this.maxThreeIcon).toHaveClass("icon icon-check");


    }
    
   


  




}

module.exports = {LoginPage};