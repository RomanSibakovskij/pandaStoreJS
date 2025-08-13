"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const { AddressesDashboardPage } = require("../../pages/addresses.dashboard.page.js");

class AddressesDashPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super(driver);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //addresses dashboard page text element assert test method
    async isAddressesDashboardPageTextElementAsExpected(){
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        //assert the addresses dashboard page title is as expected
        const addressesDashPageTitle = await addressesDashboardPage.getAddressesDashboardPageTitle();
        assert.strictEqual(addressesDashPageTitle, "YOUR ADDRESSES", "The addresses dashboard page title doesn't match expectations.");
        //addresses box link elements
        //assert the addresses dashboard page update link text is as expected

        const addressesDashPageUpdateAddressLinkText = await addressesDashboardPage.getUpdateAddressLinkText();
        addressesDashPageUpdateAddressLinkText.forEach((text, index) => {
            assert.strictEqual(
                text,
                "Update",
                `Update link text at index ${index} was "${text}", expected "Update"`
            );
        });
        
        //assert the addresses dashboard page delete link text is as expected
        const addressesDashPageDeleteAddressLinkText = await addressesDashboardPage.getDeleteAddressLinkText();
        addressesDashPageDeleteAddressLinkText.forEach((text, index) => {
            assert.strictEqual(
                text,
                "Delete",
                `Delete link text at index ${index} was "${text}", expected "Update"`
            );
        });
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = AddressesDashPageTextElementAssert;