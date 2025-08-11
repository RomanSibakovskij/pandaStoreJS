"use strict"

const {By, until} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger.js");

class HomePage extends BasePage{

    constructor(driver) {
        super(driver);
        
    }


}
module.exports = { HomePage };