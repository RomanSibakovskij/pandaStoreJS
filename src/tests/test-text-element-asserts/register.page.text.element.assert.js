const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const { RegisterPage } = require("../../pages/register.page.js");

class RegisterPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

    
}
module.exports = RegisterPageTextElementAssert;