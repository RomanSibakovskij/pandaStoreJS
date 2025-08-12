"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const { PersonalInfoPage } = require("../../pages/personal.info.page.js");

class PersonalInfoPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }


}
module.exports = PersonalInfoPageTextElementAssert;