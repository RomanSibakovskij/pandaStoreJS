"use strict"

const Logger = require("../../pages/utilities/logger.js")

const BaseTest = require("../utilities/base.test.js");
const {HomePage} = require("../../pages/home.page.js");

class HomePageDataLoggers extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }


}
module.exports = HomePageDataLoggers;