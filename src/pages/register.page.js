"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const TestDataGenerator = require("./utilities/test.data.generator.js");
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

        const testDataGenerator = new TestDataGenerator(this.driver);

        //valid user register input data
        const { firstName, lastName } = testDataGenerator.getRandomName();
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = testDataGenerator.generateRandomEmailAddress(8);
        this._password = testDataGenerator.generateRandomPassword();

    }

    //click "Mr." radio button method
    async clickMrRadioButton(){
        const mrRadioButton = this.driver.findElement(this._registerPageMrRadioButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: mrRadioButton }).click().perform();
    }

    //click "Mrs." radio button method
    async clickMrsRadioButton(){
        const mrsRadioButton = this.driver.findElement(this._registerPageMrsRadioButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: mrsRadioButton }).click().perform();
    }

    //valid user register data input methods
    async inputFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const firstName = this._firstName;
        Logger.info("Valid user first name: ", firstName);
        await firstNameInputField.sendKeys(firstName);
    }
    async inputLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const lastName = this._lastName;
        Logger.info("Valid user last name: ", lastName);
        await lastNameInputField.sendKeys(lastName);
    }
    async inputEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const email = this._email;
        Logger.info("Valid user email: ", email);
        await emailInputField.sendKeys(email);
    }
    async inputPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const password = this._password;
        Logger.info("Valid user password: ", password);
        await passwordInputField.sendKeys(password);
    }

    //click "View Password" button method
    async clickViewRegisterPasswordButton(){
        const registerViewPasswordButton = this.driver.findElement(this._registerPageViewPasswordButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: registerViewPasswordButton }).click().perform();
    }

    //click "Save" button method
    async clickSaveButton(){
        const registerSaveButton = this.driver.findElement(this._registerPageSaveButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: registerSaveButton }).click().perform();
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
            //this._registerPageMrRadioButton,
            this._registerPageMrRadioSubtext,
            //this._registerPageMrsRadioButton,
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
            //this._registerPageNewsletterSignupCheckbox,
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