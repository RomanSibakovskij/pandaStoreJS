"use strict"
const assert = require("node:assert");

const BasePage = require("../../pages/utilities/base.page.js");
const { GeneralPage } = require("../../pages/general.page.js");
const { HomePage } = require("../../pages/home.page.js");
const { LoginRegisterDashboardPage } = require("../../pages/login.register.dashboard.page.js");
const { RegisterPage } = require("../../pages/register.page.js");

const RegisterPageInvalidSingularInput = require("../../pages/reg-page-invalid-scenarios/register.page.invalid.singular.input.js");

//const GeneralPageDataLoggers = require("../data-loggers/general.page.data.loggers.js");
const GeneralPageTextElementAssert = require("../test-text-element-asserts/general.page.text.element.assert.js");
const HomePageTextElementAssert = require("../test-text-element-asserts/home.page.text.element.assert.js");
const HomePageDataLoggers = require("../data-loggers/home.page.data.loggers.js");
const LoginRegisterDashPageTextElementAssert = require("../test-text-element-asserts/login.register.dash.page.text.element.assert.js");
const RegisterPageTextElementAssert = require("../test-text-element-asserts/register.page.text.element.assert.js");

const BaseTest = require("./base.test");
const {captureScreenshot} = require("./screehot.class.js");
const Logger = require("../../pages/utilities/logger.js");

class TestMethods extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //user navigation to register page test method
    async navigateToRegisterPageTest(){
        const basePage = new BasePage(this.driver)
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        //const generalPageDataLoggers = new GeneralPageDataLoggers(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        const loginRegisterDashPageTextElementAssert = new LoginRegisterDashPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //log general page lower footer product data (Selenium can't seem to find these elements with VALID selectors)
        //await generalPageDataLoggers.logLowerFooterSpecialsProductData();
        //log general page lower footer recent articles data (Selenium can't seem to find these elements with VALID selectors)
        //await generalPageDataLoggers.logLowerFooterRecentArticlesData();
        //click upper header "Got it" cookies button
        await generalPage.clickGotItButton();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //home page text element assert
        await homePageTextElementAssert.isHomePageTextElementAsExpected();
        //log home page featured product data
        await homePageDataLoggers.logHomePageFeaturedProductData();
        //log home page new product data
        await homePageDataLoggers.logHomePageNewProductData();
        //log home page featured articles data
        await homePageDataLoggers.logHomePageFeaturedArticlesData();
        //capture screenshot of the home page display
        await captureScreenshot(this.driver, "Home Page Display");
        //click upper navbar "Login" link
        await generalPage.clickUpperNavLoginLink();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //log general page lower footer product data (Selenium can't seem to find these elements with VALID selectors)
        //await generalPageDataLoggers.logLowerFooterSpecialsProductData();
        //log general page lower footer recent articles data (Selenium can't seem to find these elements with VALID selectors)
        //await generalPageDataLoggers.logLowerFooterRecentArticlesData();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await loginRegisterDashPageTextElementAssert.isLoginRegisterDashPageTextElementAsExpected();
        //capture screenshot of the login/register dashboard page display
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display");
        //click "Create account" button
        await loginRegisterDashboardPage.clickCreateAccountButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "User Navigation To Register Page Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid user account creation tests

    //valid user (male) account creation test method
    async validUserAccountCreationTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //click "Mr." radio button
        await registerPage.clickMrRadioButton();
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after valid data input
        await captureScreenshot(this.driver, "Register Page Display After Valid Data Input (Male)");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //assert the user account gets created (the user stays logged in after account creation)
        const actualUsername = (await generalPage.getUpperNavAccountLinkText()).toLowerCase();
        const expectedUsername = ((await registerPage.getFirstName()) + " " + (await registerPage.getLastName())).toLowerCase();
        assert.strictEqual(actualUsername, expectedUsername, `The user name doesn't match expectations. Actual: ${actualUsername}, Expected: ${expectedUsername}`);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("The user account creation proceeds without any issues.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid User Account Creation Test Result (Male)");
    }

    //valid user (female) account creation test method
    async validFemaleUserAccountCreationTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //click "Mrs." radio button
        await registerPage.clickMrsRadioButton();
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after valid data input
        await captureScreenshot(this.driver, "Register Page Display After Valid Data Input (Female)");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //assert the user account gets created (the user stays logged in after account creation)
        const actualUsername = (await generalPage.getUpperNavAccountLinkText()).toLowerCase();
        const expectedUsername = ((await registerPage.getFirstName()) + " " + (await registerPage.getLastName())).toLowerCase();
        assert.strictEqual(actualUsername, expectedUsername, `The user name doesn't match expectations. Actual: ${actualUsername}, Expected: ${expectedUsername}`);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("The user account creation proceeds without any issues.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid User Account Creation Test Result (Female)");
    }

    //invalid user account creation tests

    //no singular input

    //invalid user (male) account creation test method - no user first name
    async invalidUserAccountCreationNoFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //click "Mr." radio button
        await registerPage.clickMrRadioButton();
        //don't input user first name into first name input field
        await registerPageInvalidSingularInput.inputNoFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - no first name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - No First Name");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //assert the user stays on register page after missing first name input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account without first name input, test has failed");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - No First Name");
    }

    //invalid user (male) account creation test method - no user last name
    async invalidUserAccountCreationNoLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //click "Mr." radio button
        await registerPage.clickMrRadioButton();
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //don't input user last name into last name input field
        await registerPageInvalidSingularInput.inputNoLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - no last name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - No Last Name");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //assert the user stays on register page after missing last name input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account without last name input, test has failed");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - No Last Name");
    }

    //invalid user (male) account creation test method - no user email
    async invalidUserAccountCreationNoEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //click "Mr." radio button
        await registerPage.clickMrRadioButton();
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //don't input user email into email input field
        await registerPageInvalidSingularInput.inputNoEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - no email
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - No Email");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //assert the user stays on register page after missing email input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account without email input, test has failed");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - No Email");
    }

    //invalid user (male) account creation test method - no user password
    async invalidUserAccountCreationNoPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //click "Mr." radio button
        await registerPage.clickMrRadioButton();
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //don't input user password into password input field
        await registerPageInvalidSingularInput.inputNoPasswordIntoPasswordInputField();
        //capture screenshot of the register page display after invalid data input - no password
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - No Password");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //assert the user stays on register page after missing password input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account without password input, test has failed");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - No Password");
    }

    //too short singular input

    //invalid user (male) account creation test method - too short user first name (1 char)
    async invalidUserAccountCreationTooShortFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //click "Mr." radio button
        await registerPage.clickMrRadioButton();
        //input too short user first name into first name input field (1 char)
        await registerPageInvalidSingularInput.inputTooShortFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - too short first name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - Too Short First Name");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - Too Short First Name");
        //assert the user stays on register page after too short first name input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account with too short first name input, test has failed");
    }

    //invalid user (male) account creation test method - too short user last name (1 char)
    async invalidUserAccountCreationTooShortLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //click "Mr." radio button
        await registerPage.clickMrRadioButton();
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input too short user last name into last name input field (1 char)
        await registerPageInvalidSingularInput.inputTooShortLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - too short last name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - Too Short Last Name");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - Too Short Last Name");
        //assert the user stays on register page after too short last name input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account with too short last name input, test has failed");
    }

    //invalid user (male) account creation test method - too short user email (1 char -> name, domain)
    async invalidUserAccountCreationTooShortEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const registerPage = new RegisterPage(this.driver);
        const registerPageInvalidSingularInput = new RegisterPageInvalidSingularInput(this.driver);
        const registerPageTextElementAssert = new RegisterPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //register page web element assert
        await registerPage.isRegisterPageWebElementDisplayed();
        //register page text element assert
        await registerPageTextElementAssert.isRegisterPageTextElementAsExpected();
        //capture screenshot of the register page display before data input
        await captureScreenshot(this.driver, "Register Page Display Before Data Input");
        //click "Mr." radio button
        await registerPage.clickMrRadioButton();
        //input valid user first name into first name input field
        await registerPage.inputFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input too short user email into email input field (1 char -> name, domain)
        await registerPageInvalidSingularInput.inputTooShortEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - too short email
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - Too Short Email");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - Too Short Email");
        //assert the user stays on register page after too short email input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account with too short email input, test has failed");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = TestMethods;