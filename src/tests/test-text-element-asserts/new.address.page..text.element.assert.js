"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const { NewAddressPage } = require("../../pages/new.address.page.js");

class NewAddressPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

}
module.exports = NewAddressPageTextElementAssert;