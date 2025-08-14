"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const ShoppingCartModal = require("../../pages/modals/shopping.cart.modal.js");

class ShoppingCartModalTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

}
module.exports = ShoppingCartModalTextElementAssert;