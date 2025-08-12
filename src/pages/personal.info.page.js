"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const TestDataGenerator = require("./utilities/test.data.generator.js");
const { RegisterPage } = require("../pages/register.page.js");
const Logger = require("./utilities/logger");

class PersonalInfoPage extends BasePage{

    constructor(driver) {
        super(driver);
    }



}
module.exports = PersonalInfoPage;