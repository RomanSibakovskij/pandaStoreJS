"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const { AccountDashboardPage } = require("../../pages/account.dashboard.page.js");
const { RegisterPage } = require("../../pages/register.page.js");

class AccountDashPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

}
module.exports = AccountDashPageTextElementAssert;