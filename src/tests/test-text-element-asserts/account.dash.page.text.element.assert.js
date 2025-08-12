"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const { AccountDashboardPage } = require("../../pages/account.dashboard.page.js");

class AccountDashPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //account dashboard page text element assert test method
    async isAccountDashboardPageAsideTextElementAsExpected(){
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        //assert the account dashboard page each aside link text(s) match expectations (as a list)
        const accountDashPageAsideLinkTextElem = await accountDashboardPage.getAccountDashPageAsideLinkText();
        const addressLinkLabel = (
            accountDashPageAsideLinkTextElem.includes("Addresses")
                ? "Addresses"
                : "Add first address"
        );
        const expectedAccountDashAsideLinkTextElem = ["Dashboard", "Information", addressLinkLabel, "Order history and details", "Credit slips", "Vouchers", "Merchandise returns", "My loved items", "My wishlists", "Blog comments", "Product comments", "Sign out"];
        assert.deepStrictEqual(accountDashPageAsideLinkTextElem, expectedAccountDashAsideLinkTextElem, "The account dashboard page aside link text(s) don't match expectations.");
        //assert the account dashboard page back to your account link text is as expected
        const accountDashPageBackToAccountLinkText = await accountDashboardPage.getAccountDashboardPageBackToAccountLinkText();
        assert.strictEqual(accountDashPageBackToAccountLinkText, "Back to your account", "The account dashboard page back to your account link text doesn't match expectations.");
        //assert the account dashboard page home link text is as expected
        const accountDashPageHomeLinkText = await accountDashboardPage.getAccountDashboardPageHomeLinkText();
        assert.strictEqual(accountDashPageHomeLinkText, "Home", "The account dashboard page home link text doesn't match expectations.");
    }

    //account dashboard page text element assert test method
    async isAccountDashboardPageTextElementAsExpected(){
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        //assert the account dashboard page title is as expected
        const accountDashPageTitle = await accountDashboardPage.getAccountDashboardPageTitle();
        assert.strictEqual(accountDashPageTitle, "HELLO", "The account dashboard page title doesn't match expectations.");
        //assert the account dashboard page subtitle is as expected
        const accountDashPageSubtitle = await accountDashboardPage.getAccountDashboardPageSubtitle();
        assert.strictEqual(accountDashPageSubtitle, "Thanks for joining us, we provide variety of clothes and shoes.", "The account dashboard page subtitle doesn't match expectations.");
        //assert the account dashboard page each aside link text(s) match expectations (as a list)
        const accountDashPageDashboardLinkTextElem = await accountDashboardPage.getAccountDashPageDashboardLinkText();
        const hasAddress = accountDashPageDashboardLinkTextElem.includes("Addresses"); //changes only after new address addition
        const expectedAccountDashboardLinkTextElem = ["Information", hasAddress ? "Addresses" : "Add first address", "Order history and details", "Credit slips", "Vouchers", "Merchandise returns", "My loved items", "My wishlists", "Blog comments", "Product comments", "Sign out"];
        assert.deepStrictEqual(accountDashPageDashboardLinkTextElem, expectedAccountDashboardLinkTextElem, "The account dashboard page main dashboard link text(s) don't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = AccountDashPageTextElementAssert;