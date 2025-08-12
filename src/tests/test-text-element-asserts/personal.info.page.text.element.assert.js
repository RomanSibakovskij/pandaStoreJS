"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const { PersonalInfoPage } = require("../../pages/personal.info.page.js");

class PersonalInfoPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //personal info page text element assert test method
    async isPersonalInfoPageTextElementAsExpected(){
        const personalInfoPage = new PersonalInfoPage(this.driver);
        //assert the personal info page title is as expected
        const personalInfoPageTitle = await personalInfoPage.getPersonalInfoPageTitle();
        assert.strictEqual(personalInfoPageTitle, "YOUR PERSONAL INFORMATION", "The personal info page title doesn't match expectations.");
        //input form
        //assert the personal info social subtext is as expected
        const personalInfoPageSocialSubtext = await personalInfoPage.getPersonalInfoSocialSubtext();
        assert.strictEqual(personalInfoPageSocialSubtext, "Social title", "The personal info page social subtext doesn't match expectations.");
        //assert the personal info social "Mr." subtext is as expected
        const personalInfoPageSocialMrSubtext = await personalInfoPage.getPersonalInfoMrRadioSubtext();
        assert.strictEqual(personalInfoPageSocialMrSubtext, "Mr.", "The personal info page social 'Mr.' radio button subtext doesn't match expectations.");
        //assert the personal info social "Mrs." subtext is as expected
        const personalInfoPageSocialMrsSubtext = await personalInfoPage.getPersonalInfoMrsRadioSubtext();
        assert.strictEqual(personalInfoPageSocialMrsSubtext, "Mrs.", "The personal info page social 'Mrs.' radio button subtext doesn't match expectations.");
        //assert the personal info first name subtext is as expected
        const personalInfoPageFirstNameSubtext = await personalInfoPage.getPersonalInfoFirstNameSubtext();
        assert.strictEqual(personalInfoPageFirstNameSubtext, "First name", "The personal info page first name subtext doesn't match expectations.");
        //assert the personal info last name subtext is as expected
        const personalInfoPageLastNameSubtext = await personalInfoPage.getPersonalInfoLastNameSubtext();
        assert.strictEqual(personalInfoPageLastNameSubtext, "Last name", "The personal info page last name subtext doesn't match expectations.");
        //assert the personal info email subtext is as expected
        const personalInfoPageEmailSubtext = await personalInfoPage.getPersonalInfoEmailSubtext();
        assert.strictEqual(personalInfoPageEmailSubtext, "Email", "The personal info page email subtext doesn't match expectations.");
        //assert the personal info password subtext is as expected
        const personalInfoPagePasswordSubtext = await personalInfoPage.getPersonalInfoPasswordSubtext();
        assert.strictEqual(personalInfoPagePasswordSubtext, "Password", "The personal info page password subtext doesn't match expectations.");
        //assert the personal info new password subtext is as expected
        const personalInfoPageNewPasswordSubtext = await personalInfoPage.getPersonalInfoNewPasswordSubtext();
        assert.strictEqual(personalInfoPageNewPasswordSubtext, "New password (Optional)", "The personal info page new password subtext doesn't match expectations.");
        //assert the personal info newsletter subtext is as expected
        const personalInfoPageNewsletterSubtext = await personalInfoPage.getPersonalInfoNewsletterSubtext();
        assert.strictEqual(personalInfoPageNewsletterSubtext, "Sign up for our newsletter", "The personal info page newsletter subtext doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = PersonalInfoPageTextElementAssert;