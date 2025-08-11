"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger.js");

class GeneralPage extends BasePage{

    constructor(driver) {
        super(driver);
        
    }




}
module.exports = { GeneralPage };