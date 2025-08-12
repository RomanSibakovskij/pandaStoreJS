"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("../utilities/base.page.js");
const TestDataGenerator = require("../utilities/test.data.generator.js");
const Logger = require("../utilities/logger.js");

class RegisterPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);
    }


}
module.exports = RegisterPageInvalidSingularInput;