const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const {LoginRegisterDashboardPage} = require("../../pages/login.register.dashboard.page.js");

class LoginRegisterDashPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }


}
module.exports = LoginRegisterDashPageTextElementAssert;