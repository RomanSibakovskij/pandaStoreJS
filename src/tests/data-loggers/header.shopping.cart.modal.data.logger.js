"use strict"

const Logger = require("../../pages/utilities/logger.js")
const BaseTest = require("../utilities/base.test");
const HeaderShoppingCartModal = require("../../pages/modals/header.shopping.cart.modal.js");

class HeaderShoppingCartModalDataLogger extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //header shopping cart modal product data logger method
    async logHeaderShoppingCartModalProductData(){
        const headerShoppingCartModal = new HeaderShoppingCartModal(this.driver);
        console.log("Displayed header shopping cart modal product data: " + "\n")
        //log header shopping cart modal product name
        const headerShoppingCartModalProductName = await headerShoppingCartModal.getHeaderShoppingCartModalProductName();
        Logger.info("Header shopping cart modal product name(s): " + headerShoppingCartModalProductName);
        //log header shopping cart modal product unit price
        const headerShoppingCartModalProductUnitPrice = await headerShoppingCartModal.getHeaderShoppingCartModalProductUnitPrice();
        Logger.info("Header shopping cart modal product unit price(s): " + headerShoppingCartModalProductUnitPrice);
        //log header shopping cart modal product quantity
        const headerShoppingCartModalProductQty = await headerShoppingCartModal.getHeaderShoppingCartModalProductQty();
        Logger.info("Header shopping cart modal product quantity(ies): " + headerShoppingCartModalProductQty);
        //log header shopping cart modal product color (due to additional random item addition this logger section doesn't seem to work correctly)
        //const headerShoppingCartModalProductColor = await headerShoppingCartModal.getHeaderShoppingCartModalProductColor();
        //Logger.info("Header shopping cart modal product color(s): " + headerShoppingCartModalProductColor);
        //log header shopping cart modal product size (due to additional random item addition this logger section doesn't seem to work correctly)
        //const headerShoppingCartModalProductSize = await headerShoppingCartModal.getHeaderShoppingCartModalProductSize();
        //Logger.info("Header shopping cart modal product size(s): " + headerShoppingCartModalProductSize);
        //log header shopping cart modal total product price (Selenium can't seem to find this element)
        //const headerShoppingCartModalTotalProductPrice = await headerShoppingCartModal.getHeaderShoppingCartModalTotalProductPriceData();
        //Logger.info("Header shopping cart modal total product price: " + headerShoppingCartModalTotalProductPrice);
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = HeaderShoppingCartModalDataLogger;