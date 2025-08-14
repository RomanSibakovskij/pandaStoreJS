"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const {ShoppingCartPage} = require("../../pages/shopping.cart.page.js");

class ShoppingCartPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }
}
module.exports = ShoppingCartPageTextElementAssert;