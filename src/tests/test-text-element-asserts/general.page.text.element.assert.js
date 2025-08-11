"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const {GeneralPage} = require("../../pages/general.page");

class GeneralPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }
    

}
module.exports = GeneralPageTextElementAssert;