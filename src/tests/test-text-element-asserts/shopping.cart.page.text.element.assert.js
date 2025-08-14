"use strict"
/* eslint-disable no-undef */

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const {ShoppingCartPage} = require("../../pages/shopping.cart.page.js");

class ShoppingCartPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //shopping cart page text element assert test method
    async isShoppingCartPageTextElementAsExpected(){
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        //assert the shopping cart page title is as expected
        const shoppingCartPageTitle = await shoppingCartPage.getShoppingCartPageTitle();
        assert.strictEqual(shoppingCartPageTitle, "Shopping Cart", "The shopping cart page title doesn't match expectations.");
        //product table
        //assert the shopping cart page product color subtext(s) is as expected
        const shoppingCartPageProductColorSubtexts = await shoppingCartPage.getShoppingCartTableProductColorSubtext();
        //make sure the cart isn’t empty
        expect(shoppingCartPageProductColorSubtexts.length).toBeGreaterThan(0);
        //make sure each entry is exactly "Color:"
        shoppingCartPageProductColorSubtexts.forEach(txt => expect(txt.trim()).toBe('Color:'));
        //assert the shopping cart page product size subtext(s) is as expected
        const shoppingCartPageProductSizeSubtexts = await shoppingCartPage.getShoppingCartTableProductSizeSubtext();
        expect(shoppingCartPageProductSizeSubtexts.length).toBeGreaterThan(0);
        shoppingCartPageProductSizeSubtexts.forEach(txt => expect(txt.trim()).toBe('Size:'));
        //product summary table
        //assert the shopping cart page summary table product shipping subtext is as expected
        const shoppingCartPageSummaryShippingSubtext = await shoppingCartPage.getShoppingCartSummaryTableProductShippingSubtext();
        assert.strictEqual(shoppingCartPageSummaryShippingSubtext, "Shipping", "The shopping cart page summary table product shipping subtext doesn't match expectations.");
        //assert the shopping cart page summary table promo code link text is as expected
        const shoppingCartPageSummaryPromoCodeLinkText = await shoppingCartPage.getShoppingCartSummaryTablePromoCodeLinkText();
        assert.strictEqual(shoppingCartPageSummaryPromoCodeLinkText, "Have a promo code?", "The shopping cart page summary table promo code link text doesn't match expectations.");
        //assert the shopping cart page summary table offer subtext is as expected
        const shoppingCartPageSummaryOfferSubtext = await shoppingCartPage.getShoppingCartSummaryTableOfferSubtext();
        assert.strictEqual(shoppingCartPageSummaryOfferSubtext, "Take advantage of our exclusive offers:", "The shopping cart page summary table offer subtext doesn't match expectations.");
        //assert the shopping cart page summary table taxes subtext is as expected
        const shoppingCartPageSummaryTaxesSubtext = await shoppingCartPage.getShoppingCartSummaryTableTaxesSubtext();
        assert.strictEqual(shoppingCartPageSummaryTaxesSubtext, "Taxes", "The shopping cart page summary table taxes subtext doesn't match expectations.");
        //assert the shopping cart page summary table total price subtext is as expected
        const shoppingCartPageSummaryTotalPriceSubtext = await shoppingCartPage.getShoppingCartSummaryTableTotalPriceSubtext();
        assert.strictEqual(shoppingCartPageSummaryTotalPriceSubtext, "Total (tax excl.)", "The shopping cart page summary table total price subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ShoppingCartPageTextElementAssert;