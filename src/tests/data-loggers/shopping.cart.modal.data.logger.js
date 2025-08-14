"use strict"

const Logger = require("../../pages/utilities/logger.js");
const BaseTest = require("../utilities/base.test");
const ShoppingCartModal = require("../../pages/modals/shopping.cart.modal.js");

class ShoppingCartModalDataLogger extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //shopping cart modal product data logger method
    async logShoppingCartModalProductData(){
        const shoppingCartModal = new ShoppingCartModal(this.driver);
        console.log("Displayed shopping cart modal product data: " + "\n")
        //log shopping cart modal product name
        const shoppingCartModalProductName = await shoppingCartModal.getShoppingCartModalProductName();
        Logger.info("Shopping cart modal product name: " + shoppingCartModalProductName);
        //log shopping cart modal product color
        const shoppingCartModalProductColor = await shoppingCartModal.getShoppingCartModalProductColor();
        Logger.info("Shopping cart modal product color: " + shoppingCartModalProductColor);
        //log shopping cart modal product size
        const shoppingCartModalProductSize = await shoppingCartModal.getShoppingCartModalProductSize();
        Logger.info("Shopping cart modal product size: " + shoppingCartModalProductSize);
        //log shopping cart modal product quantity
        const shoppingCartModalProductQty = await shoppingCartModal.getShoppingCartModalProductQuantity();
        Logger.info("Shopping cart modal product quantity: " + shoppingCartModalProductQty);
        //log shopping cart modal total item price
        const shoppingCartModalTotalItemPrice = await shoppingCartModal.getShoppingCartModalTotalItemPrice();
        Logger.info("Shopping cart modal total item price: " + shoppingCartModalTotalItemPrice);
        //log shopping cart modal total shipping price
        const shoppingCartModalTotalShippingPrice = await shoppingCartModal.getShoppingCartModalTotalShippingPrice();
        Logger.info("Shopping cart modal total shipping price: " + shoppingCartModalTotalShippingPrice);
        //log shopping cart modal taxes
        const shoppingCartModalTaxes = await shoppingCartModal.getShoppingCartModalTaxes();
        Logger.info("Shopping cart modal taxes: " + shoppingCartModalTaxes);
        //log shopping cart modal total price no tax
        const shoppingCartModalTotalPriceNoTax = await shoppingCartModal.getShoppingCartModalTotalPriceNoTax();
        Logger.info("Shopping cart modal total price (no tax): " + shoppingCartModalTotalPriceNoTax + "\n");

        console.log("Displayed shopping cart modal product you may like section product data: " + "\n")
        //log shopping cart modal product you may like product unit price(s)
        const shoppingCartModalProductMayLikeUnitPrice = await shoppingCartModal.getShoppingCartModalProductsMayLikeProductUnitPrice();
        Logger.info("Shopping cart product you may like product unit price(s): " + shoppingCartModalProductMayLikeUnitPrice);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ShoppingCartModalDataLogger;