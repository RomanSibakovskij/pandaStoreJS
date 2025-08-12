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
        this._noOldPassword = "";

        //invalid personal info user data input - too short singular input
        this._tooShortEditedFirstName = "D"; //1 char
        this._tooShortEditedLastName = "C"; //1 char
        this._tooShortEditedEmail = testDataGenerator.generateRandomTooShortEmailAddress(1); //1 char -> name, domain
        this._tooShortNewPassword = "Hg%4sas"; //7 chars

        //invalid personal info user data input - too long singular input
        this._tooLongEditedFirstName = "Dsdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; //100 chars
        this._tooLongEditedLastName = "Csdfdgdfgfewtrythgydfggfgfjmbnjnvcvcxcsdrteytuiyioipokjghhfgdgrertrdtgdfghfjhgkjbvghgdfgfhfhujhjgfhg"; //100 chars
        this._tooLongEditedEmail = testDataGenerator.generateRandomTooLongEmailAddress(100); //100 chars -> name, domain
        this._tooLongNewPassword = "Hghfgdsgdtwetrtjdsfgrfdgjhkjmngbfds*&^(kjgsehgt@#$detgujy$%dsgdfhtds675"; //73 chars

        //invalid personal info user data input - invalid singular input format
        this._invalidEditedFirstNameFormat = "%$#%^$^&^"; //special symbols only
        this._invalidEditedLastNameFormat = "(&*^%&^%%$)"; //special symbols only
        this._invalidEditedEmailFormat = "sfdsfdsffakemail.com"; //missing '@'
        this._existingEmailAsEdited = "m0@example.com"; //used beforehand in manual testing
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
    async inputNoOldPasswordIntoPasswordInputField(){
        const editedNewPasswordInputField = await this.driver.findElement(this._personalInfoPagePasswordInputField);
        const noOldPassword = this._noOldPassword;
        Logger.info("No user password: ", noOldPassword);
        await editedNewPasswordInputField.sendKeys(noOldPassword);
    }

    //invalid user edited data input methods - too short singular input
    async inputTooShortEditedFirstNameIntoFirstNameInputField(){
        const editedFirstNameInputField = await this.driver.findElement(this._personalInfoPageFirstNameInputField);
        await editedFirstNameInputField.clear();
        const tooShortEditedFirstName = this._tooShortEditedFirstName;
        Logger.info("Too short edited user first name: ", tooShortEditedFirstName);
        await editedFirstNameInputField.sendKeys(tooShortEditedFirstName);
    }
    async inputTooShortEditedLastNameIntoLastNameInputField(){
        const editedLastNameInputField = await this.driver.findElement(this._personalInfoPageLastNameInputField);
        await editedLastNameInputField.clear();
        const tooShortEditedLastName = this._tooShortEditedLastName;
        Logger.info("Too short edited user last name: ", tooShortEditedLastName);
        await editedLastNameInputField.sendKeys(tooShortEditedLastName);
    }
    async inputTooShortEditedEmailIntoEmailInputField(){
        const editedEmailInputField = await this.driver.findElement(this._personalInfoPageEmailInputField);
        await editedEmailInputField.clear();
        const tooShortEditedEmail = this._tooShortEditedEmail;
        Logger.info("Too short edited user email: ", tooShortEditedEmail);
        await editedEmailInputField.sendKeys(tooShortEditedEmail);
    }
    async inputTooShortNewPasswordIntoNewPasswordInputField(){
        const editedNewPasswordInputField = await this.driver.findElement(this._personalInfoPageNewPasswordInputField);
        const tooShortNewPassword = this._tooShortNewPassword;
        Logger.info("Too short user new password: ", tooShortNewPassword);
        await editedNewPasswordInputField.sendKeys(tooShortNewPassword);
    }

    //invalid user edited data input methods - too long singular input
    async inputTooLongEditedFirstNameIntoFirstNameInputField(){
        const editedFirstNameInputField = await this.driver.findElement(this._personalInfoPageFirstNameInputField);
        await editedFirstNameInputField.clear();
        const tooLongEditedFirstName = this._tooLongEditedFirstName;
        Logger.info("Too long edited user first name: ", tooLongEditedFirstName);
        await editedFirstNameInputField.sendKeys(tooLongEditedFirstName);
    }
    async inputTooLongEditedLastNameIntoLastNameInputField(){
        const editedLastNameInputField = await this.driver.findElement(this._personalInfoPageLastNameInputField);
        await editedLastNameInputField.clear();
        const tooLongEditedLastName = this._tooLongEditedLastName;
        Logger.info("Too long edited user last name: ", tooLongEditedLastName);
        await editedLastNameInputField.sendKeys(tooLongEditedLastName);
    }
    async inputTooLongEditedEmailIntoEmailInputField(){
        const editedEmailInputField = await this.driver.findElement(this._personalInfoPageEmailInputField);
        await editedEmailInputField.clear();
        const tooLongEditedEmail = this._tooLongEditedEmail;
        Logger.info("Too long edited user email: ", tooLongEditedEmail);
        await editedEmailInputField.sendKeys(tooLongEditedEmail);
    }
    async inputTooLongNewPasswordIntoNewPasswordInputField(){
        const editedNewPasswordInputField = await this.driver.findElement(this._personalInfoPageNewPasswordInputField);
        const tooLongNewPassword = this._tooLongNewPassword;
        Logger.info("Too long user new password: ", tooLongNewPassword);
        await editedNewPasswordInputField.sendKeys(tooLongNewPassword);
    }

    //invalid user edited data input methods - invalid singular input format
    async inputInvalidEditedFirstNameFormatIntoFirstNameInputField(){
        const editedFirstNameInputField = await this.driver.findElement(this._personalInfoPageFirstNameInputField);
        await editedFirstNameInputField.clear();
        const invalidEditedFirstNameFormat = this._invalidEditedFirstNameFormat;
        Logger.info("Invalid edited user first name format: ", invalidEditedFirstNameFormat);
        await editedFirstNameInputField.sendKeys(invalidEditedFirstNameFormat);
    }
    async inputInvalidEditedLastNameFormatIntoLastNameInputField(){
        const editedLastNameInputField = await this.driver.findElement(this._personalInfoPageLastNameInputField);
        await editedLastNameInputField.clear();
        const invalidEditedLastNameFormat = this._invalidEditedLastNameFormat;
        Logger.info("Invalid edited user last name format: ", invalidEditedLastNameFormat);
        await editedLastNameInputField.sendKeys(invalidEditedLastNameFormat);
    }
    async inputInvalidEditedEmailFormatIntoEmailInputField(){
        const editedEmailInputField = await this.driver.findElement(this._personalInfoPageEmailInputField);
        await editedEmailInputField.clear();
        const invalidEditedEmailFormat = this._invalidEditedEmailFormat;
        Logger.info("Invalid edited user email format: ", invalidEditedEmailFormat);
        await editedEmailInputField.sendKeys(invalidEditedEmailFormat);
    }
    async inputExistingEmailAsEditedIntoEmailInputField(){
        const editedEmailInputField = await this.driver.findElement(this._personalInfoPageEmailInputField);
        await editedEmailInputField.clear();
        const existingEmail = this._existingEmailAsEdited;
        Logger.info("Existing edited user email: ", existingEmail);
        await editedEmailInputField.sendKeys(existingEmail);
    }

}
module.exports = PersonalInfoPageInvalidSingularInput;