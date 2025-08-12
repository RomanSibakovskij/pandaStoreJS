const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const { RegisterPage } = require("../../pages/register.page.js");

class RegisterPageTextElementAssert extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //register page text element assert test method
    async isRegisterPageTextElementAsExpected(){
        const registerPage = new RegisterPage(this.driver);
        //assert the register page title is as expected
        const registerPageTitle = await registerPage.getRegisterPageTitle();
        assert.strictEqual(registerPageTitle, "CREATE AN ACCOUNT", "The register page title doesn't match expectations.");
        //assert the register page subtitle is as expected
        const registerPageSubtitle = await registerPage.getRegisterPageSubtitle();
        assert.strictEqual(registerPageSubtitle, "Already have an account? Log in instead!", "The register page subtitle doesn't match expectations.");
        //input form
        //assert the register page first name subtext is as expected
        const registerPageFirstNameSubtext = await registerPage.getRegisterPageFirstNameSubtext();
        assert.strictEqual(registerPageFirstNameSubtext, "First name", "The register page first name subtext doesn't match expectations.");
        //assert the register page last name subtext is as expected
        const registerPageLastNameSubtext = await registerPage.getRegisterPageLastNameSubtext();
        assert.strictEqual(registerPageLastNameSubtext, "Last name", "The register page last name subtext doesn't match expectations.");
        //assert the register page email subtext is as expected
        const registerPageEmailSubtext = await registerPage.getRegisterPageEmailSubtext();
        assert.strictEqual(registerPageEmailSubtext, "Email", "The register page email subtext doesn't match expectations.");
        //assert the register page password subtext is as expected
        const registerPagePasswordSubtext = await registerPage.getRegisterPagePasswordSubtext();
        assert.strictEqual(registerPagePasswordSubtext, "Password", "The register page password subtext doesn't match expectations.");
        //assert the register page newsletter subtext is as expected
        const registerPageNewsletterSubtext = await registerPage.getRegisterPageNewsletterSubtext();
        assert.strictEqual(registerPageNewsletterSubtext, "Sign up for our newsletter", "The register page newsletter subtext doesn't match expectations.");
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = RegisterPageTextElementAssert;