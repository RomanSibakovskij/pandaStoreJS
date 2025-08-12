"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("../utilities/base.page.js");
const TestDataGenerator = require("../utilities/test.data.generator.js");
const Logger = require("../utilities/logger");

class PersonalInfoPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._personalInfoPageFirstNameInputField = By.xpath("//input[@name='firstname']");
        this._personalInfoPageLastNameInputField = By.xpath("//input[@name='lastname']");
        this._personalInfoPageEmailInputField = By.xpath("//input[@type='email']");
        this._personalInfoPagePasswordInputField = By.xpath("//input[@name='password']");
        this._personalInfoPageNewPasswordInputField = By.xpath("//input[@name='new_password']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid personal info user data input - no singular input
        this._noEditedFirstName = "";
        this._noEditedLastName = "";
        this._noEditedEmail = "";
    }

    //invalid user edited data input methods - no singular input
    async inputNoEditedFirstNameIntoFirstNameInputField(){
        const editedFirstNameInputField = await this.driver.findElement(this._personalInfoPageFirstNameInputField);
        await editedFirstNameInputField.clear();
        const noEditedFirstName = this._noEditedFirstName;
        Logger.info("No edited user first name: ", noEditedFirstName);
        await editedFirstNameInputField.sendKeys(noEditedFirstName);
    }
    async inputNoEditedLastNameIntoLastNameInputField(){
        const editedLastNameInputField = await this.driver.findElement(this._personalInfoPageLastNameInputField);
        await editedLastNameInputField.clear();
        const noEditedLastName = this._noEditedLastName;
        Logger.info("No edited user last name: ", noEditedLastName);
        await editedLastNameInputField.sendKeys(noEditedLastName);
    }
    async inputNoEditedEmailIntoEmailInputField(){
        const editedEmailInputField = await this.driver.findElement(this._personalInfoPageEmailInputField);
        await editedEmailInputField.clear();
        const noEditedEmail = this._noEditedEmail;
        Logger.info("No edited user email: ", noEditedEmail);
        await editedEmailInputField.sendKeys(noEditedEmail);
    }

}
module.exports = PersonalInfoPageInvalidSingularInput;