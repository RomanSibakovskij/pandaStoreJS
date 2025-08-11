const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const {LoginRegisterDashboardPage} = require("../../pages/login.register.dashboard.page.js");

class LoginRegisterDashPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //login/register dashboard page text element assert test method
    async isLoginRegisterDashPageTextElementAsExpected(){
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        //new customer (register) section
        //assert the login/register dashboard page new customer (register) section title is as expected
        const loginRegisterDashPageRegisterSectionTitle = await loginRegisterDashboardPage.getNewCustomerSectionTitle();
        assert.strictEqual(loginRegisterDashPageRegisterSectionTitle, "NEW CUSTOMERS?", "The login/register dashboard page new customer (register) section title doesn't match expectations.");
        //assert the login/register dashboard page new customer (register) section subtitle is as expected
        const loginRegisterDashPageRegisterSectionSubtitle = await loginRegisterDashboardPage.getNewCustomerSectionSubtitle();
        assert.strictEqual(loginRegisterDashPageRegisterSectionSubtitle, "It's quick and easy to create an account to shop faster and save your order to account.", "The login/register dashboard page new customer (register) section subtitle doesn't match expectations.");
        //returning customer (login) section
        //assert the login/register dashboard page returning customer (login) section title is as expected
        const loginRegisterDashPageLoginSectionTitle = await loginRegisterDashboardPage.getLoginSectionTitle();
        assert.strictEqual(loginRegisterDashPageLoginSectionTitle, "REGISTERED CUSTOMERS", "The login/register dashboard page returning customer (login) section title doesn't match expectations.");
        //assert the login/register dashboard page returning customer (login) section email subtext is as expected
        const loginSectionEmailSubtext = await loginRegisterDashboardPage.getLoginSectionEmailSubtext();
        assert.strictEqual(loginSectionEmailSubtext, "Email", "The login/register dashboard page returning customer (login) section email subtext doesn't match expectations.");
        //assert the login/register dashboard page returning customer (login) section password subtext is as expected
        const loginSectionPasswordSubtext = await loginRegisterDashboardPage.getLoginSectionPasswordSubtext();
        assert.strictEqual(loginSectionPasswordSubtext, "Password", "The login/register dashboard page returning customer (login) section password subtext doesn't match expectations.");
        //assert the login/register dashboard page returning customer (login) section forgot password link text is as expected
        const loginSectionForgotPasswordLinkText = await loginRegisterDashboardPage.getLoginSectionForgotPasswordLinkText();
        assert.strictEqual(loginSectionForgotPasswordLinkText, "Forgot your password?", "The login/register dashboard page returning customer (login) section forgot password link text doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = LoginRegisterDashPageTextElementAssert;