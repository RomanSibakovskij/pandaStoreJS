"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("../utilities/base.page.js");
const Logger = require("../utilities/logger");

class LoginRegisterDashPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._loginSectionEmailInputField = By.xpath("//section[@id='login_form_block']//input[@name='email']");
        this._loginSectionPasswordInputField = By.xpath("//section[@id='login_form_block']//input[@name='password']");

        //invalid user login data - no singular input
        this._noLoginEmail = "";
        this._noLoginPassword = "";

        //invalid user login data - invalid singular input
        this._invalidLoginEmail = "kHGJGFHf@fakemail.com";
        this._invalidLoginEmailFormat = "kHGJGFHffakemail.com"; //missing '@'
        this._invalidLoginPassword = "stacker@$@#4";
    }

    //invalid login data input methods - no singular input
    async inputNoLoginEmailIntoEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginSectionEmailInputField);
        const noLoginEmail = this._noLoginEmail;
        Logger.info("No login email: ", noLoginEmail);
        await loginEmailInputField.sendKeys(noLoginEmail);
    }
    async inputNoLoginPasswordIntoPasswordInputField(){
        const validPasswordInputField = await this.driver.findElement(this._loginSectionPasswordInputField);
        const noLoginPassword = this._noLoginPassword;
        Logger.info("No login password: ", noLoginPassword);
        await validPasswordInputField.sendKeys(noLoginPassword);
    }

    //invalid login data input methods - invalid singular input
    async inputInvalidLoginEmailIntoEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginSectionEmailInputField);
        const invalidLoginEmail = this._invalidLoginEmail;
        Logger.info("Invalid login email: ", invalidLoginEmail);
        await loginEmailInputField.sendKeys(invalidLoginEmail);
    }
    async inputInvalidLoginEmailFormatIntoEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginSectionEmailInputField);
        const invalidLoginEmailFormat = this._invalidLoginEmailFormat;
        Logger.info("Invalid login email format: ", invalidLoginEmailFormat);
        await loginEmailInputField.sendKeys(invalidLoginEmailFormat);
    }
    async inputInvalidLoginPasswordIntoPasswordInputField(){
        const validPasswordInputField = await this.driver.findElement(this._loginSectionPasswordInputField);
        const invalidLoginPassword = this._invalidLoginPassword;
        Logger.info("Invalid login password: ", invalidLoginPassword);
        await validPasswordInputField.sendKeys(invalidLoginPassword);
    }

}
module.exports = LoginRegisterDashPageInvalidSingularInput;