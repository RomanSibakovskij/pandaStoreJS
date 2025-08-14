"use strict"

const Logger = require("../../pages/utilities/logger.js");
const BaseTest = require("../utilities/base.test");
const {ShoppingCartPage} = require("../../pages/shopping.cart.page.js");

class ShoppingCartPageDataLogger extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

}
module.exports = ShoppingCartPageDataLogger;