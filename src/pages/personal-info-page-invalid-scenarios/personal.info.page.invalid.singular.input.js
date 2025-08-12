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

}
module.exports = PersonalInfoPageInvalidSingularInput;