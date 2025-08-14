"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test.js");
const ShoppingCartModal = require("../../pages/modals/shopping.cart.modal.js");

class ShoppingCartModalTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //shopping cart modal text element assert test method
    async isShoppingCartModalTextElementAsExpected(){
        const shoppingCartModal = new ShoppingCartModal(this.driver);
        //assert the shopping cart modal product color subtext is as expected
        const shopCartModalProductColorSubtext = await shoppingCartModal.getShoppingCartModalProductColorSubtext();
        assert.strictEqual(shopCartModalProductColorSubtext, "Color:", "The shopping cart modal product color subtext doesn't match expectations.");
        //assert the shopping cart modal product size subtext is as expected
        const shopCartModalProductSizeSubtext = await shoppingCartModal.getShoppingCartModalProductSizeSubtext();
        assert.strictEqual(shopCartModalProductSizeSubtext, "Size:", "The shopping cart modal product size subtext doesn't match expectations.");
        //assert the shopping cart modal product size subtext is as expected
        const shopCartModalProductQtySubtext = await shoppingCartModal.getShoppingCartModalProductQtySubtext();
        assert.strictEqual(shopCartModalProductQtySubtext, "Quantity:", "The shopping cart modal product quantity subtext doesn't match expectations.");
        //total item section
        //assert the shopping cart modal product total shipping price subtext is as expected
        const shopCartModalTotalShippingPriceSubtext = await shoppingCartModal.getShoppingCartModalTotalShippingPriceSubtext();
        assert.strictEqual(shopCartModalTotalShippingPriceSubtext, "Total shipping:", "The shopping cart modal product total shipping price subtext doesn't match expectations.");
        //assert the shopping cart modal product taxes subtext is as expected
        const shopCartModalTaxesSubtext = await shoppingCartModal.getShoppingCartModalTaxesSubtext();
        assert.strictEqual(shopCartModalTaxesSubtext, "Taxes:", "The shopping cart modal product taxes subtext doesn't match expectations.");
        //assert the shopping cart modal product total price subtext is as expected
        const shopCartModalTotalPriceSubtext = await shoppingCartModal.getShoppingCartModalTotalPriceNoTaxSubtext();
        assert.strictEqual(shopCartModalTotalPriceSubtext, "Total:", "The shopping cart modal product total price subtext doesn't match expectations.");
        //assert the shopping cart modal product total price subtext is as expected
        const shopCartModalContinueShoppingLinkText = await shoppingCartModal.getShoppingCartModalContinueShoppingLinkText();
        assert.strictEqual(shopCartModalContinueShoppingLinkText, "Continue shopping", "The shopping cart modal product continue shopping link text doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ShoppingCartModalTextElementAssert;