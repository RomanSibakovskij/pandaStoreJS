"use strict"

const Logger = require("../../pages/utilities/logger.js");
const BaseTest = require("../utilities/base.test");
const {ShoppingCartPage} = require("../../pages/shopping.cart.page.js");

class ShoppingCartPageDataLogger extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //shopping cart page data logger method
    async logShoppingCartPageProductData(){
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        console.log("Displayed shopping cart page product data: " + "\n")
        //log shopping cart page product table product name
        const shoppingCartPageProductName = await shoppingCartPage.getShoppingCartTableProductName();
        Logger.info("Shopping cart page product table product name(s): " + shoppingCartPageProductName);
        //log shopping cart page product table product current price
        const shoppingCartPageProductCurrentPrice = await shoppingCartPage.getShoppingCartTableProductCurrentPrice();
        Logger.info("Shopping cart page product table product current price(s): " + shoppingCartPageProductCurrentPrice);
        //log shopping cart page product table product color
        const shoppingCartPageProductColor = await shoppingCartPage.getShoppingCartTableProductColor();
        Logger.info("Shopping cart page product table product color(s): " + shoppingCartPageProductColor);
        //log shopping cart page product table product size
        const shoppingCartPageProductSize = await shoppingCartPage.getShoppingCartTableProductSize();
        Logger.info("Shopping cart page product table product size(s): " + shoppingCartPageProductSize);
        //log shopping cart page product table product quantity
        const shoppingCartPageProductQty = await shoppingCartPage.getShoppingCartTableProductQty();
        Logger.info("Shopping cart page product table product quantity(ies): " + shoppingCartPageProductQty);
        //log shopping cart page product table product total price
        const shoppingCartPageProductTotalPrice = await shoppingCartPage.getShoppingCartTableProductTotalPrice();
        Logger.info("Shopping cart page product table product total price(s): " + shoppingCartPageProductTotalPrice + "\n");
        //product summary table
        console.log("Displayed shopping cart product summary table displayed data: " + "\n")
        //log shopping cart page product summary table product count
        const shoppingCartPageSummaryProductCount = await shoppingCartPage.getShoppingCartSummaryProductCount();
        Logger.info("Shopping cart page product summary table product count: " + shoppingCartPageSummaryProductCount);
        //log shopping cart page product summary table product price
        const shoppingCartPageSummaryProductPrice = await shoppingCartPage.getShoppingCartSummaryProductPrice();
        Logger.info("Shopping cart page product summary table product price: " + shoppingCartPageSummaryProductPrice);
        //log shopping cart page product summary table product shipping price
        const shoppingCartPageSummaryProductShippingPrice = await shoppingCartPage.getShoppingCartSummaryProductShippingPrice();
        Logger.info("Shopping cart page product summary table product shipping price: " + shoppingCartPageSummaryProductShippingPrice);
        //log shopping cart page product summary table displayed offer
        const shoppingCartPageSummaryOffer = await shoppingCartPage.getShoppingCartSummaryOffer();
        Logger.info("Shopping cart page product summary table displayed offer: " + shoppingCartPageSummaryOffer);
        //log shopping cart page product summary table tax amount
        const shoppingCartPageSummaryTaxAmount = await shoppingCartPage.getShoppingCartSummaryTaxes();
        Logger.info("Shopping cart page product summary table tax amount: " + shoppingCartPageSummaryTaxAmount);
        //log shopping cart page product summary table total price
        const shoppingCartPageSummaryTotalPrice = await shoppingCartPage.getShoppingCartSummaryTotalPrice();
        Logger.info("Shopping cart page product summary table total price: " + shoppingCartPageSummaryTotalPrice);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ShoppingCartPageDataLogger;