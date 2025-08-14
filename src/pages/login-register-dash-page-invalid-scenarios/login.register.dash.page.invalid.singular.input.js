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
    }


}
module.exports = LoginRegisterDashPageInvalidSingularInput;