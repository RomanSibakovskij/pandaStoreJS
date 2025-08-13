"use strict"

const {By, Key} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const TestDataGenerator = require("./utilities/test.data.generator.js");
const Logger = require("./utilities/logger");

class NewAddressPage extends BasePage {

    constructor(driver) {
        super(driver);
    }

}
module.exports = { NewAddressPage };