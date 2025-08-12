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
        this._noPassword = "";

        //invalid user register data input - too short singular input
        this._tooShortFirstName = "F"; //1 char
        this._tooShortLastName = "D"; //1 char
        this._tooShortEmail = testDataGenerator.generateRandomTooShortEmailAddress(1); //1 char -> name,domain
        this._tooShortPassword = "K#D2swa"; //7 chars

        //invalid user register data input - too long singular input
        this._tooLongFirstName = "Fhfgdsgdtwetrtjdsfgrfdgjhkjmngbfdsfffhkjgsedhgtfgsdetgtujyhgdsfgdfhtgfsdfdffgdsgfgfdgdsfgfdhgfdhgdfd"; //100 chars
        this._tooLongLastName = "Dhfgdsgdtwetrtjdsfgrfdgjhkjmngbfdsfffhkjgsedhgtfgsdetgtujyhgdsfgdfhtgfsdfdffgdsgfgfdgdsfgfdhgfdhgdfd"; //100 chars
        this._tooLongEmail = testDataGenerator.generateRandomTooLongEmailAddress(100);
        this._tooLongPassword = "Khfgdsgdtwetrtjdsfgrfdgjhkjmngbfdsfffhkjgsedhgtfgsdetgtujy$%dsfgdfhtds12312"; //75 chars

        //invalid user register data input - invalid singular input format
        this._invalidFirstNameFormat = "@#$%#$#^"; //special symbols only
        this._invalidLastNameFormat = "#$#$@%$#%"; //special symbols only

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
    async inputNoPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const noPassword = this._noPassword;
        Logger.info("No user password: ", noPassword);
        await passwordInputField.sendKeys(noPassword);
    }

    //invalid user register data input methods - too short singular input
    async inputTooShortFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const tooShortFirstName = this._tooShortFirstName;
        Logger.info("Too short user first name: ", tooShortFirstName);
        await firstNameInputField.sendKeys(tooShortFirstName);
    }
    async inputTooShortLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const tooShortLastName = this._tooShortLastName;
        Logger.info("Too short user last name: ", tooShortLastName);
        await lastNameInputField.sendKeys(tooShortLastName);
    }
    async inputTooShortEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const tooShortEmail = this._tooShortEmail;
        Logger.info("Too short user email: ", tooShortEmail);
        await emailInputField.sendKeys(tooShortEmail);
    }
    async inputTooShortPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const tooShortPassword = this._tooShortPassword;
        Logger.info("Too short user password: ", tooShortPassword);
        await passwordInputField.sendKeys(tooShortPassword);
    }

    //invalid user register data input methods - too long singular input
    async inputTooLongFirstNameIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const tooLongFirstName = this._tooLongFirstName;
        Logger.info("Too long user first name: ", tooLongFirstName);
        await firstNameInputField.sendKeys(tooLongFirstName);
    }
    async inputTooLongLastNameIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const tooLongLastName = this._tooLongLastName;
        Logger.info("Too long user last name: ", tooLongLastName);
        await lastNameInputField.sendKeys(tooLongLastName);
    }
    async inputTooLongEmailIntoEmailInputField(){
        const emailInputField = await this.driver.findElement(this._registerPageEmailInputField);
        const tooLongEmail = this._tooLongEmail;
        Logger.info("Too long user email: ", tooLongEmail);
        await emailInputField.sendKeys(tooLongEmail);
    }
    async inputTooLongPasswordIntoPasswordInputField(){
        const passwordInputField = await this.driver.findElement(this._registerPagePasswordInputField);
        const tooLongPassword = this._tooLongPassword;
        Logger.info("Too long user password: ", tooLongPassword);
        await passwordInputField.sendKeys(tooLongPassword);
    }

    //invalid user register data input methods - invalid singular input format
    async inputInvalidFirstNameFormatIntoFirstNameInputField(){
        const firstNameInputField = await this.driver.findElement(this._registerPageFirstNameInputField);
        const invalidFirstNameFormat = this._invalidFirstNameFormat;
        Logger.info("Invalid user first name format: ", invalidFirstNameFormat);
        await firstNameInputField.sendKeys(invalidFirstNameFormat);
    }
    async inputInvalidLastNameFormatIntoLastNameInputField(){
        const lastNameInputField = await this.driver.findElement(this._registerPageLastNameInputField);
        const invalidLastNameFormat = this._invalidLastNameFormat;
        Logger.info("Invalid user last name format: ", invalidLastNameFormat);
        await lastNameInputField.sendKeys(invalidLastNameFormat);
    }

}
module.exports = RegisterPageInvalidSingularInput;