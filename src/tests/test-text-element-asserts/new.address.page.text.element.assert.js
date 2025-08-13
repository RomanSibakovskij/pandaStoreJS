"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const { NewAddressPage } = require("../../pages/new.address.page.js");

class NewAddressPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //new address page text element assert test method
    async isNewAddressPageTextElementAsExpected(){
        const newAddressPage = new NewAddressPage(this.driver);
        //assert the new address page title is as expected
        const newAddressPageTitle = await newAddressPage.getNewAddressPageTitle();
        assert.strictEqual(newAddressPageTitle, "NEW ADDRESS", "The new address page title doesn't match expectations.");
        //input form
        //assert the new address page alias subtext is as expected
        const newAddressPageAliasSubtext = await newAddressPage.getNewAddressPageAliasSubtext();
        assert.strictEqual(newAddressPageAliasSubtext, "Alias (Optional)", "The new address page alias subtext doesn't match expectations.");
        //assert the new address page first name subtext is as expected
        const newAddressPageFirstNameSubtext = await newAddressPage.getNewAddressPageFirstNameSubtext();
        assert.strictEqual(newAddressPageFirstNameSubtext, "First name", "The new address page first name subtext doesn't match expectations.");
        //assert the new address page last name subtext is as expected
        const newAddressPageLastNameSubtext = await newAddressPage.getNewAddressPageLastNameSubtext();
        assert.strictEqual(newAddressPageLastNameSubtext, "Last name", "The new address page last name subtext doesn't match expectations.");
        //assert the new address page company subtext is as expected
        const newAddressPageCompanySubtext = await newAddressPage.getNewAddressPageCompanySubtext();
        assert.strictEqual(newAddressPageCompanySubtext, "Company (Optional)", "The new address page company subtext doesn't match expectations.");
        //assert the new address page address one subtext is as expected
        const newAddressPageAddressOneSubtext = await newAddressPage.getNewAddressPageAddressOneSubtext();
        assert.strictEqual(newAddressPageAddressOneSubtext, "Address", "The new address page address one subtext doesn't match expectations.");
        //assert the new address page address two subtext is as expected
        const newAddressPageAddressTwoSubtext = await newAddressPage.getNewAddressPageAddressTwoSubtext();
        assert.strictEqual(newAddressPageAddressTwoSubtext, "Address Complement (Optional)", "The new address page address two subtext doesn't match expectations.");
        //assert the new address page city subtext is as expected
        const newAddressPageCitySubtext = await newAddressPage.getNewAddressPageCitySubtext();
        assert.strictEqual(newAddressPageCitySubtext, "City", "The new address page city subtext doesn't match expectations.");
        //assert the new address page state subtext is as expected
        const newAddressPageStateSubtext = await newAddressPage.getNewAddressPageStateSubtext();
        assert.strictEqual(newAddressPageStateSubtext, "State", "The new address page state subtext doesn't match expectations.");
        //assert the new address page post code subtext is as expected
        const newAddressPagePostCodeSubtext = await newAddressPage.getNewAddressPagePostCodeSubtext();
        assert.strictEqual(newAddressPagePostCodeSubtext, "Zip/Postal Code", "The new address page post code subtext doesn't match expectations.");
        //assert the new address page country subtext is as expected
        const newAddressPageCountrySubtext = await newAddressPage.getNewAddressPageCountrySubtext();
        assert.strictEqual(newAddressPageCountrySubtext, "Country", "The new address page country subtext doesn't match expectations.");
        //assert the new address page phone subtext is as expected
        const newAddressPagePhoneSubtext = await newAddressPage.getNewAddressPagePhoneSubtext();
        assert.strictEqual(newAddressPagePhoneSubtext, "Phone (Optional)", "The new address page phone subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = NewAddressPageTextElementAssert;