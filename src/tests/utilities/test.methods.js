"use strict"

const assert = require("node:assert");

const BasePage = require("../../pages/utilities/base.page.js");
const { GeneralPage } = require("../../pages/general.page.js");

const GeneralPageDataLoggers = require("../data-loggers/general.page.data.loggers.js");
const GeneralPageTextElementAssert = require("../test-text-element-asserts/general.page.text.element.assert.js");
const HomePageTextElementAssert = require("../test-text-element-asserts/home.page.text.element.assert.js");
const HomePageDataLoggers = require("../data-loggers/home.page.data.loggers.js");
const LoginRegisterDashPageTextElementAssert = require("../test-text-element-asserts/login.register.dash.page.text.element.assert.js");

const BaseTest = require("./base.test");
const Logger = require("../../pages/utilities/logger.js");
const {captureScreenshot} = require("./screenshot.class");

class TestMethods extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }


}
module.exports = TestMethods;