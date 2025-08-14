"use strict"

const Logger = require("../../pages/utilities/logger.js")
const BaseTest = require("../utilities/base.test");
const HeaderShoppingCartModal = require("../../pages/modals/header.shopping.cart.modal.js");

class HeaderShoppingCartModalDataLogger extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }


}
module.exports = HeaderShoppingCartModalDataLogger;