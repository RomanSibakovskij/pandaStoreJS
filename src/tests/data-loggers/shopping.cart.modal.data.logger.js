"use strict"

const Logger = require("../../pages/utilities/logger.js");
const BaseTest = require("../utilities/base.test");
const ShoppingCartModal = require("../../pages/modals/shopping.cart.modal.js");

class ShoppingCartModalDataLogger extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

}
module.exports = ShoppingCartModalDataLogger;