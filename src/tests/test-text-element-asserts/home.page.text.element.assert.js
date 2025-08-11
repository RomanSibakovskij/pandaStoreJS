const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const {HomePage} = require("../../pages/home.page");

class HomePageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }


}
module.exports = HomePageTextElementAssert;