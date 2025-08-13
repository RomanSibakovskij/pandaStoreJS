"use strict"

const Logger = require("../../pages/utilities/logger.js")
const BaseTest = require("../utilities/base.test");
const { AddressesDashboardPage } = require("../../pages/addresses.dashboard.page.js");

class AddressesDashPageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }


}
module.exports = AddressesDashPageDataLogger;