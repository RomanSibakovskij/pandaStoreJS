"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger.js");

class RegisterPage extends BasePage{

    constructor(driver) {
        super(driver);

        //register page web elements
        this._registerPageTitle = By.xpath("//section[@id='register_form_block']/h3");
        this._registerPageSubtitle = By.xpath("//section[@id='register_form_block']//p");
        this._registerPageLoginLink = By.xpath("//section[@id='register_form_block']//p/a");
        //input form
        this._registerPageSocialSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_id_gender']/label");
        this._registerPageMrRadioButton = By.xpath("//div[@class='form-group form-group-small  st_form_item_id_gender']//input[@value='1']");
        this._registerPageMrRadioSubtext = By.xpath("//span[contains(text(), 'Mr.')]");
        this._registerPageMrsRadioButton = By.xpath("//div[@class='form-group form-group-small  st_form_item_id_gender']//input[@value='2']");
        this._registerPageMrsRadioSubtext = By.xpath("//span[contains(text(), 'Mrs.')]");
        this._registerPageFirstNameSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_firstname']/label");
        this._registerPageFirstNameInputField = By.xpath("//input[@name='firstname']");
        this._registerPageLastNameSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_lastname']/label");
        this._registerPageLastNameInputField = By.xpath("//input[@name='lastname']");
        this._registerPageEmailSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_email']/label");
        this._registerPageEmailInputField = By.xpath("//input[@type='email']");
        this._registerPagePasswordSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_password']/label");
        this._registerPageViewPasswordButton = By.xpath("//button[@class='btn show_password']");
        this._registerPagePasswordInputField = By.xpath("//input[@type='password']");
        this._registerPageNewsletterSubtext = By.xpath("//span[@class='flex_child']");
        this._registerPageNewsletterSignupCheckbox = By.xpath("//input[@name='newsletter']");
        this._registerPageSaveButton = By.xpath("//button[@class='btn btn-primary btn-large js-submit-active btn-spin btn-full-width']");
        //name singular input error message element
        this._regPageSingularInputErrorMessage = By.xpath("//div[@class='help-block  alert alert-danger']");

    }

    //register page text element getters
    async getRegisterPageTitle(){
        const registerPageTitle = await this.driver.findElement(this._registerPageTitle);
        return await registerPageTitle.getText();
    }
    async getRegisterPageSubtitle(){
        const registerPageSubtitle = await this.driver.findElement(this._registerPageSubtitle);
        return await registerPageSubtitle.getText();
    }

    //input form
    async getRegisterPageFirstNameSubtext(){
        const registerPageFirstNameSubtext = await this.driver.findElement(this._registerPageFirstNameSubtext);
        return await registerPageFirstNameSubtext.getText();
    }
    async getRegisterPageLastNameSubtext(){
        const registerPageLastNameSubtext = await this.driver.findElement(this._registerPageLastNameSubtext);
        return await registerPageLastNameSubtext.getText();
    }
    async getRegisterPageEmailSubtext(){
        const registerPageEmailSubtext = await this.driver.findElement(this._registerPageEmailSubtext);
        return await registerPageEmailSubtext.getText();
    }
    async getRegisterPagePasswordSubtext(){
        const registerPagePasswordSubtext = await this.driver.findElement(this._registerPagePasswordSubtext);
        return await registerPagePasswordSubtext.getText();
    }
    async getRegisterPageNewsletterSubtext(){
        const registerPageNewsletterSubtext = await this.driver.findElement(this._registerPageNewsletterSubtext);
        return await registerPageNewsletterSubtext.getText();
    }

    //private data getters
    async getFirstName(){return this._firstName;}
    async getLastName(){return this._lastName;}
    async getEmail(){return this._email;}
    async getPassword(){return this._password;}

    //register page invalid name input error message element getter
    async getRegisterPageInvalidInputErrorMsg(){
        const registerPageInvalidInputErrorMsg = await this.driver.findElement(this._regPageSingularInputErrorMessage);
        return await registerPageInvalidInputErrorMsg.getText();
    }

    //register page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isRegisterPageWebElementDisplayed(){
        const elementsToCheck = [
            this._registerPageTitle,
            this._registerPageSubtitle,
            this._registerPageLoginLink,
            this._registerPageSocialSubtext,
            this._registerPageMrRadioButton,
            this._registerPageMrRadioSubtext,
            this._registerPageMrsRadioButton,
            this._registerPageMrsRadioSubtext,
            this._registerPageFirstNameSubtext,
            this._registerPageFirstNameInputField,
            this._registerPageLastNameSubtext,
            this._registerPageLastNameInputField,
            this._registerPageEmailSubtext,
            this._registerPageEmailInputField,
            this._registerPagePasswordSubtext,
            this._registerPagePasswordInputField,
            this._registerPageViewPasswordButton,
            this._registerPageNewsletterSubtext,
            this._registerPageNewsletterSignupCheckbox,
            this._registerPageSaveButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { RegisterPage };