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
    }

    //invalid login data input methods - no singular input
    async inputNoLoginEmailIntoEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginSectionEmailInputField);
        const noLoginEmail = this._noLoginEmail;
        Logger.info("No login email: ", noLoginEmail);
        await loginEmailInputField.sendKeys(noLoginEmail);
    }

}
module.exports = LoginRegisterDashPageInvalidSingularInput;