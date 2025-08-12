"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("../utilities/base.page.js");
const TestDataGenerator = require("../utilities/test.data.generator.js");
const Logger = require("../utilities/logger.js");

class RegisterPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._registerPageFirstNameInputField = By.xpath("//input[@name='firstname']");
        this._registerPageLastNameInputField = By.xpath("//input[@name='lastname']");
        this._registerPageEmailInputField = By.xpath("//input[@type='email']");
        this._registerPagePasswordInputField = By.xpath("//input[@type='password']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid user register data input - no singular input
        this._noFirstName = "";
        this._noLastName = "";
        this._noEmail = "";

    }

    //invalid user register data input methods - no singular input
    async inputNoFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const noFirstName = this._noFirstName;
        Logger.info("No user first name: ", noFirstName);
        await firstNameInputField.sendKeys(noFirstName);
    }
    async inputNoLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const noLastName = this._noLastName;
        Logger.info("No user last name: ", noLastName);
        await lastNameInputField.sendKeys(noLastName);
    }
    async inputNoEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const noEmail = this._noEmail;
        Logger.info("No user email: ", noEmail);
        await emailInputField.sendKeys(noEmail);
    }

}
module.exports = RegisterPageInvalidSingularInput;