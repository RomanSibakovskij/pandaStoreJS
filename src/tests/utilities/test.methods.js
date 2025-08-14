"use strict"
const assert = require("node:assert");

const BasePage = require("../../pages/utilities/base.page.js");
const { GeneralPage } = require("../../pages/general.page.js");
const { HomePage } = require("../../pages/home.page.js");
const { LoginRegisterDashboardPage } = require("../../pages/login.register.dashboard.page.js");
const { RegisterPage } = require("../../pages/register.page.js");
const { AccountDashboardPage } = require("../../pages/account.dashboard.page.js");
const { PersonalInfoPage } = require("../../pages/personal.info.page.js");
const { AddressesDashboardPage } = require("../../pages/addresses.dashboard.page.js");
const { NewAddressPage } = require("../../pages/new.address.page.js");
const { ShoppingCartPage } = require("../../pages/shopping.cart.page.js");

const ShoppingCartModal = require("../../pages/modals/shopping.cart.modal.js");
const HeaderShoppingCartModal = require("../../pages/modals/header.shopping.cart.modal.js");

const RegisterPageInvalidSingularInput = require("../../pages/reg-page-invalid-scenarios/register.page.invalid.singular.input.js");
const PersonalInfoPageInvalidSingularInput = require("../../pages/personal-info-page-invalid-scenarios/personal.info.page.invalid.singular.input.js");
const NewAddressPageInvalidSingularInput = require("../../pages/new-address-page-invalid-scenarios/new.address.page.invalid.singular.input.js");
const LoginRegisterDashPageInvalidSingularInput = require("../../pages/login-register-dash-page-invalid-scenarios/login.register.dash.page.invalid.singular.input.js");

//const GeneralPageDataLoggers = require("../data-loggers/general.page.data.loggers.js");
const GeneralPageTextElementAssert = require("../test-text-element-asserts/general.page.text.element.assert.js");
const HomePageTextElementAssert = require("../test-text-element-asserts/home.page.text.element.assert.js");
const LoginRegisterDashPageTextElementAssert = require("../test-text-element-asserts/login.register.dash.page.text.element.assert.js");
const RegisterPageTextElementAssert = require("../test-text-element-asserts/register.page.text.element.assert.js");
const AccountDashboardPageTextElementAssert = require("../test-text-element-asserts/account.dash.page.text.element.assert.js");
const PersonalInfoPageTextElementAssert = require("../test-text-element-asserts/personal.info.page.text.element.assert.js");
const AddressesDashPageTextElementAssert = require("../test-text-element-asserts/addresses.dash.page.text.element.assert.js");
const NewAddressPageTextElementAssert = require("../test-text-element-asserts/new.address.page.text.element.assert.js");
const ShoppingCartPageTextElementAssert = require("../test-text-element-asserts/shopping.cart.page.text.element.assert.js");

const ShoppingCartModalTextElementAssert = require("../modals/shopping.cart.modal.text.element.assert.js");

const HomePageDataLoggers = require("../data-loggers/home.page.data.loggers.js");
const AddressesDashPageDataLogger = require("../data-loggers/addresses.dash.page.data.logger.js");
const ShoppingCartPageDataLogger = require("../data-loggers/shopping.cart.page.data.logger.js");

//const ShoppingCartModalDataLogger = require("../data-loggers/shopping.cart.modal.data.logger.js");
const HeaderShoppingCartModalDataLogger = require("../data-loggers/header.shopping.cart.modal.data.logger");

const BaseTest = require("./base.test");
const {captureScreenshot} = require("./screenshot.class.js");
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
        //wait for elements to load (sometimes request verification may take place)
        await basePage.waitForElementLoad(5000);
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
        await basePage.waitForElementLoad(1000);
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
        await basePage.waitForElementLoad(1000);
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
        await basePage.waitForElementLoad(1000);
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
        await basePage.waitForElementLoad(1000);
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
        await basePage.waitForElementLoad(1000);
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
        await basePage.waitForElementLoad(1000);
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
        await basePage.waitForElementLoad(1000);
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
        await basePage.waitForElementLoad(1000);
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
        await basePage.waitForElementLoad(1000);
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
        await basePage.waitForElementLoad(1000);
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

    //invalid user (male) account creation test method - too short user password (7 chars)
    async invalidUserAccountCreationTooShortPasswordTest(){
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
        //input too short user password into password input field (7 chars)
        await registerPageInvalidSingularInput.inputTooShortPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - too short password
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - Too Short Password");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //assert the user gets an expected error message
        const invalidPasswordInputErrorMsg = await registerPage.getRegisterPageInvalidInputErrorMsg();
        assert.strictEqual(invalidPasswordInputErrorMsg, "Password must be between 8 and 72 characters long\n" + "The minimum score must be: Strong\n" + "Add another word or two. Uncommon words are better.", "The too short password input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - Too Short Password");
        //assert the user stays on register page after too short password input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account with too short password input, test has failed");
    }

    //too long singular input

    //invalid user (male) account creation test method - too long user first name (100 chars)
    async invalidUserAccountCreationTooLongFirstNameTest(){
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
        //input too long user first name into first name input field (100 chars)
        await registerPageInvalidSingularInput.inputTooLongFirstNameIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - too long first name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - Too Long First Name");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - Too Long First Name");
        //assert the user stays on register page after too long first name input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account with too long first name input, test has failed");
    }

    //invalid user (male) account creation test method - too long user last name (100 chars)
    async invalidUserAccountCreationTooLongLastNameTest(){
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
        //input too short user last name into last name input field (100 chars)
        await registerPageInvalidSingularInput.inputTooLongLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - too long last name
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - Too Long Last Name");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - Too Long Last Name");
        //assert the user stays on register page after too long last name input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account with too long last name input, test has failed");
    }

    //invalid user (male) account creation test method - too long user email (100 chars -> name, domain)
    async invalidUserAccountCreationTooLongEmailTest(){
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
        //input too short user email into email input field (100 chars -> name, domain)
        await registerPageInvalidSingularInput.inputTooLongEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - too long email
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - Too Long Email");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - Too Long Email");
        //assert the user stays on register page after too long email input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account with too long email input, test has failed");
    }

    //invalid user (male) account creation test method - too long user password (75 chars)
    async invalidUserAccountCreationTooLongPasswordTest(){
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
        //input too long user password into password input field (75 chars)
        await registerPageInvalidSingularInput.inputTooLongPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - too long password
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - Too Long Password");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //assert the user gets an expected error message
        const invalidPasswordInputErrorMsg = await registerPage.getRegisterPageInvalidInputErrorMsg();
        assert.strictEqual(invalidPasswordInputErrorMsg, "Password must be between 8 and 72 characters long", "The too long password input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - Too Long Password");
        //assert the user stays on register page after too long password input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account with too long password input, test has failed");
    }

    //invalid singular input format

    //invalid user (male) account creation test method - invalid user first name (special symbols only)
    async invalidUserAccountCreationInvalidFirstNameFormatTest(){
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
        //input invalid user first name format into first name input field (special symbols only)
        await registerPageInvalidSingularInput.inputInvalidFirstNameFormatIntoFirstNameInputField();
        //input valid user last name into last name input field
        await registerPage.inputLastNameIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - invalid first name input format
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - Invalid First Name Format");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(4000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //assert the user gets an expected error message
        const nameInputErrorMsg = await registerPage.getRegisterPageInvalidInputErrorMsg();
        assert.strictEqual(nameInputErrorMsg, "Invalid format.", "The invalid first name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - Invalid First Name Format");
        //assert the user stays on register page after inputting an invalid first name input format
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account with invalid first name input format, test has failed");
    }

    //invalid user (male) account creation test method - invalid user last name input format (special symbols only)
    async invalidUserAccountCreationInvalidLastNameFormatTest(){
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
        //input invalid user last name format into last name input field (special symbols only)
        await registerPageInvalidSingularInput.inputInvalidLastNameFormatIntoLastNameInputField();
        //input valid user email into email input field
        await registerPage.inputEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - invalid last name input format
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - Invalid Last Name Format");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(4000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //assert the user gets an expected error message
        const nameInputErrorMsg = await registerPage.getRegisterPageInvalidInputErrorMsg();
        assert.strictEqual(nameInputErrorMsg, "Invalid format.", "The invalid last name input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - Invalid Last Name Format");
        //assert the user stays on register page after inputting an invalid last name input format
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account with invalid last name input format, test has failed");
    }

    //invalid user (male) account creation test method - invalid user email input format (missing '@')
    async invalidUserAccountCreationInvalidEmailFormatTest(){
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
        //input invalid user email format into email input field (missing '@')
        await registerPageInvalidSingularInput.inputInvalidEmailFormatIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - invalid email input format
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - Invalid Email Input Format");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(4000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - Invalid Email Input Format");
        //assert the user stays on register page after inputting an invalid email input format
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account with invalid email input format, test has failed");
    }

    //invalid user (male) account creation test method - existing user email (used beforehand in manual testing)
    async invalidUserAccountCreationExistingEmailTest(){
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
        //input existing user email into email input field (used beforehand in manual testing)
        await registerPageInvalidSingularInput.inputExistingEmailIntoEmailInputField();
        //input valid user password into password input field
        await registerPage.inputPasswordIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - existing email
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - Existing Email");
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
        //assert the user gets an expected error message
        const emailInputErrorMsg = await registerPage.getRegisterPageInvalidInputErrorMsg();
        assert.strictEqual(emailInputErrorMsg, "The email is already used, please choose another one or sign in", "The existing email input error message doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - Existing Email");
        //assert the user stays on register page after existing email input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account with existing email input, test has failed");
    }

    //invalid user (male) account creation test method - invalid user password format (similar lowercases only)
    async invalidUserAccountCreationInvalidPasswordFormatTest(){
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
        //input invalid user password format into password input field (similar lowercases only)
        await registerPageInvalidSingularInput.inputInvalidPasswordFormatIntoPasswordInputField();
        //click "View Password" button
        await registerPage.clickViewRegisterPasswordButton();
        //capture screenshot of the register page display after invalid data input - invalid password format
        await captureScreenshot(this.driver, "Register Page Display After Invalid Data Input (Male) - Invalid Password Format");
        //click "Save" button
        await registerPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) is getting added without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Account Creation Test Result (Male) - Invalid Password Format");
        //assert the user gets an expected error message
        const invalidPasswordInputErrorMsg = await registerPage.getRegisterPageInvalidInputErrorMsg();
        assert.strictEqual(invalidPasswordInputErrorMsg, "Repeats like \"aaa\" are easy to guess\n" + "Add another word or two. Uncommon words are better.\n" + "Avoid repeated words and characters", "The too long password input error message doesn't match expectations or the error wasn't triggered.");
        //assert the user stays on register page after too long password input
        const currentURL = await this.driver.getCurrentUrl();
        const regPageURL = "https://panda2.sunnytoo.com/en/?controller=registration";
        assert.strictEqual(currentURL, regPageURL, "The user was able to create an account with invalid password input format, test has failed");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid edit account tests

    //valid edit account (with login email) test method
    async validEditAccountWithEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await personalInfoPage.inputEditedFirstNameIntoFirstNameInputField();
        //input valid edited last name into last name input field
        await personalInfoPage.inputEditedLastNameIntoLastNameInputField();
        //input valid edited email into email input field
        await personalInfoPage.inputEditedEmailIntoEmailInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after valid edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display After Valid Edited Data Input (with edited email)");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user receives an expected success message
        const updateSuccessMessage = await personalInfoPage.getPersonalInfoUpdateSuccessMessage();
        assert.strictEqual(updateSuccessMessage, "Information successfully updated.", "The information update success message doesn't match expectations or the edit user account data process has failed.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid Edit Account Data Test Result (with email)");
    }

    //valid edit account (with login password) test method
    async validEditAccountWithPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input valid edited first name into first name input field
        await personalInfoPage.inputEditedFirstNameIntoFirstNameInputField();
        //input valid edited last name into last name input field
        await personalInfoPage.inputEditedLastNameIntoLastNameInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //input valid new password into new password input field
        await personalInfoPage.inputNewPasswordIntoNewPasswordInputField();
        //click "View new password" button
        await personalInfoPage.clickViewPersonalInfoNewPasswordButton();
        //capture screenshot of the personal info page display after valid edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display After Valid Edited Data Input (with new password)");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user receives an expected success message
        const updateSuccessMessage = await personalInfoPage.getPersonalInfoUpdateSuccessMessage();
        assert.strictEqual(updateSuccessMessage, "Information successfully updated.", "The information update success message doesn't match expectations or the edit user account data process has failed.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid Edit Account Data Test Result (with password)");
    }

    //invalid edit account tests

    //no singular input

    //invalid edit account test method - no edited first name
    async invalidEditAccountNoFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //don't input edited first name into first name input field
        await personalInfoPageInvalidSingularInput.inputNoEditedFirstNameIntoFirstNameInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - no edited first name
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - No Edited First Name");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - No Edited First Name");
        //assert the user stays on personal info page after existing email input
        const currentURL = await this.driver.getCurrentUrl();
        const personalInfoPageURL = "https://panda2.sunnytoo.com/en/identity";
        assert.strictEqual(currentURL, personalInfoPageURL, "The user was able to edit account data with missing first name input, test has failed");
    }

    //invalid edit account test method - no edited last name
    async invalidEditAccountNoLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //don't input edited last name into last name input field
        await personalInfoPageInvalidSingularInput.inputNoEditedLastNameIntoLastNameInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - no edited last name
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - No Edited Last Name");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - No Edited Last Name");
        //assert the user stays on personal info page after missing last name input
        const currentURL = await this.driver.getCurrentUrl();
        const personalInfoPageURL = "https://panda2.sunnytoo.com/en/identity";
        assert.strictEqual(currentURL, personalInfoPageURL, "The user was able to edit account data with missing last name input, test has failed");
    }

    //invalid edit account test method - no edited email
    async invalidEditAccountNoEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //don't input edited email into email input field
        await personalInfoPageInvalidSingularInput.inputNoEditedEmailIntoEmailInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - no edited email
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - No Edited Email");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - No Edited Email");
        //assert the user stays on personal info page after missing email input
        const currentURL = await this.driver.getCurrentUrl();
        const personalInfoPageURL = "https://panda2.sunnytoo.com/en/identity";
        assert.strictEqual(currentURL, personalInfoPageURL, "The user was able to edit account data with missing email input, test has failed");
    }

    //invalid edit account test method - no user password (it's required to perform editing user account data)
    async invalidEditAccountNoPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //don't input old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPageInvalidSingularInput.inputNoOldPasswordIntoPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - no user password
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - No Password");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - No Password");
        //assert the user stays on personal info page after missing password input
        const currentURL = await this.driver.getCurrentUrl();
        const personalInfoPageURL = "https://panda2.sunnytoo.com/en/identity";
        assert.strictEqual(currentURL, personalInfoPageURL, "The user was able to edit account data with missing password input, test has failed");
    }

    //too short singular input

    //invalid edit account test method - too short edited first name (1 char)
    async invalidEditAccountTooShortFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input too short edited first name into first name input field (1 char)
        await personalInfoPageInvalidSingularInput.inputTooShortEditedFirstNameIntoFirstNameInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - too short edited first name
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - Too Short Edited First Name");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - Too Short Edited First Name");
        //if the user account edit process isn't aborted, throw an error
        const updateSuccessMessage = await personalInfoPage.getPersonalInfoUpdateSuccessMessage();
        if (updateSuccessMessage === "Information successfully updated.") {
            throw new Error("The too short edited first name error wasn't triggered, test has failed");
        }
    }

    //invalid edit account test method - too short edited last name (1 char)
    async invalidEditAccountTooShortLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input too short edited last name into last name input field (1 char)
        await personalInfoPageInvalidSingularInput.inputTooShortEditedLastNameIntoLastNameInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - too short edited last name
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - Too Short Edited Last Name");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - Too Short Edited Last Name");
        //if the user account edit process isn't aborted, throw an error
        const updateSuccessMessage = await personalInfoPage.getPersonalInfoUpdateSuccessMessage();
        if (updateSuccessMessage === "Information successfully updated.") {
            throw new Error("The too short edited last name error wasn't triggered, test has failed");
        }
    }

    //invalid edit account test method - too short edited email (1 char -> name, domain)
    async invalidEditAccountTooShortEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input too short edited email into email input field (1 char -> name, domain)
        await personalInfoPageInvalidSingularInput.inputTooShortEditedEmailIntoEmailInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - too short edited email
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - Too Short Edited Email");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - Too Short Edited Email");
        //if the user account edit process isn't aborted, throw an error
        const updateSuccessMessage = await personalInfoPage.getPersonalInfoUpdateSuccessMessage();
        if (updateSuccessMessage === "Information successfully updated.") {
            throw new Error("The too short edited email error wasn't triggered, test has failed");
        }
    }

    //invalid edit account test method - too short new password (7 chars)
    async invalidEditAccountTooShortNewPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //input too short new password into new password input field (7 chars)
        await personalInfoPageInvalidSingularInput.inputTooShortNewPasswordIntoNewPasswordInputField();
        //click "View new password" button
        await personalInfoPage.clickViewPersonalInfoNewPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - too short new password
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - Too Short New Password");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - Too Short New Password");
        //assert the user gets expected error messages
        const invalidPersonalInfoPageUpdateError = await personalInfoPage.getPersonalInfoUpdateFailureMessage();
        assert.strictEqual(invalidPersonalInfoPageUpdateError,"Could not update your information, please check your data.", "The user account info update error doesn't match expectations or the error wasn't triggered.")
        const invalidPersonalInfoPageSingularInputError = await personalInfoPage.getPersonalInfoSingularInputErrorMsg();
        assert.strictEqual(invalidPersonalInfoPageSingularInputError,"Password must be between 8 and 72 characters long\n" + "The minimum score must be: Strong\n" + "Add another word or two. Uncommon words are better.", "The too short edited password input error doesn't match expectations or the error wasn't triggered.")
    }

    //too long singular input

    //invalid edit account test method - too long edited first name (100 chars)
    async invalidEditAccountTooLongFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input too long edited first name into first name input field (100 chars)
        await personalInfoPageInvalidSingularInput.inputTooLongEditedFirstNameIntoFirstNameInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - too long edited first name
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - Too Long Edited First Name");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - Too Long Edited First Name");
        //if the user account edit process isn't aborted, throw an error
        const updateSuccessMessage = await personalInfoPage.getPersonalInfoUpdateSuccessMessage();
        if (updateSuccessMessage === "Information successfully updated.") {
            throw new Error("The too long edited first name error wasn't triggered, test has failed");
        }
    }

    //invalid edit account test method - too long edited last name (100 chars)
    async invalidEditAccountTooLongLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input too long edited last name into last name input field (100 chars)
        await personalInfoPageInvalidSingularInput.inputTooLongEditedLastNameIntoLastNameInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - too long edited last name
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - Too Long Edited Last Name");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - Too Long Edited Last Name");
        //if the user account edit process isn't aborted, throw an error
        const updateSuccessMessage = await personalInfoPage.getPersonalInfoUpdateSuccessMessage();
        if (updateSuccessMessage === "Information successfully updated.") {
            throw new Error("The too long edited last name error wasn't triggered, test has failed");
        }
    }

    //invalid edit account test method - too long edited email (100 chars -> name, domain)
    async invalidEditAccountTooLongEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input too long edited email into email input field (100 char -> name, domain)
        await personalInfoPageInvalidSingularInput.inputTooLongEditedEmailIntoEmailInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - too long edited email
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - Too Long Edited Email");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - Too Long Edited Email");
        //assert the user stays on personal info page after missing password input
        const currentURL = await this.driver.getCurrentUrl();
        const personalInfoPageURL = "https://panda2.sunnytoo.com/en/identity";
        assert.strictEqual(currentURL, personalInfoPageURL, "The user was able to edit account data with too long edited email input, test has failed");
    }

    //invalid edit account test method - too long new password (73 chars)
    async invalidEditAccountTooLongNewPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //input too long new password into new password input field (73 chars)
        await personalInfoPageInvalidSingularInput.inputTooLongNewPasswordIntoNewPasswordInputField();
        //click "View new password" button
        await personalInfoPage.clickViewPersonalInfoNewPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - too long new password
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - Too Long New Password");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - Too Long New Password");
        //assert the user gets expected error messages
        const invalidPersonalInfoPageUpdateError = await personalInfoPage.getPersonalInfoUpdateFailureMessage();
        assert.strictEqual(invalidPersonalInfoPageUpdateError,"Could not update your information, please check your data.", "The user account info update error doesn't match expectations or the error wasn't triggered.")
        const invalidPersonalInfoPageSingularInputError = await personalInfoPage.getPersonalInfoSingularInputErrorMsg();
        assert.strictEqual(invalidPersonalInfoPageSingularInputError,"Password must be between 8 and 72 characters long\n" + "The minimum score must be: Strong\n" + "Add another word or two. Uncommon words are better.", "The too long edited password input error doesn't match expectations or the error wasn't triggered.")
    }

    //invalid singular input format

    //invalid edit account test method - invalid edited first name format (special symbols only)
    async invalidEditAccountInvalidFirstNameFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input invalid edited first name format into first name input field (special symbols only)
        await personalInfoPageInvalidSingularInput.inputInvalidEditedFirstNameFormatIntoFirstNameInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - invalid edited first name format
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - Invalid Edited First Name Format");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - Invalid Edited First Name Format");
        //assert the user gets expected error messages
        const updateFailureMessage = await personalInfoPage.getPersonalInfoUpdateFailureMessage();
        assert.strictEqual(updateFailureMessage, "Could not update your information, please check your data.", "The personal info page information update failure message doesn't match expectations.")
        const invalidFirstNameError = await personalInfoPage.getPersonalInfoSingularInputErrorMsg();
        assert.strictEqual(invalidFirstNameError, "Invalid format.", "The invalid first name input format error doesn't match expectations or the error wasn't triggered.");
    }

    //invalid edit account test method - invalid edited last name format (special symbols only)
    async invalidEditAccountInvalidLastNameFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input invalid edited last name format into last name input field (special symbols only)
        await personalInfoPageInvalidSingularInput.inputInvalidEditedLastNameFormatIntoLastNameInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - invalid edited last name format
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - Invalid Edited Last Name Format");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - Invalid Edited Last Name Format");
        //assert the user gets expected error messages
        const updateFailureMessage = await personalInfoPage.getPersonalInfoUpdateFailureMessage();
        assert.strictEqual(updateFailureMessage, "Could not update your information, please check your data.", "The personal info page information update failure message doesn't match expectations.")
        const invalidLastNameError = await personalInfoPage.getPersonalInfoSingularInputErrorMsg();
        assert.strictEqual(invalidLastNameError, "Invalid format.", "The invalid last name input format error doesn't match expectations or the error wasn't triggered.");
    }

    //invalid edit account test method - invalid edited email format (missing '@')
    async invalidEditAccountInvalidEmailFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input invalid edited email format into email input field (missing '@')
        await personalInfoPageInvalidSingularInput.inputInvalidEditedEmailFormatIntoEmailInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - invalid edited email format
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - Invalid Edited Email Format");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - Invalid Edited Email Format");
    }

    //invalid edit account test method - existing email (used beforehand in manual testing)
    async invalidEditAccountExistingEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input existing email format into email input field (used beforehand in manual testing) //The email is already used, please choose another one or sign in
        await personalInfoPageInvalidSingularInput.inputExistingEmailAsEditedIntoEmailInputField();
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - invalid edited email format
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - Invalid Edited Email Format");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - Invalid Edited Email Format");
        //assert the user gets expected error messages
        const updateFailureMessage = await personalInfoPage.getPersonalInfoUpdateFailureMessage();
        assert.strictEqual(updateFailureMessage, "Could not update your information, please check your data.", "The personal info page information update failure message doesn't match expectations.")
        const invalidLastNameError = await personalInfoPage.getPersonalInfoSingularInputErrorMsg();
        assert.strictEqual(invalidLastNameError, "The email is already used, please choose another one or sign in", "The existing email input error doesn't match expectations or the error wasn't triggered.");
    }

    //invalid edit account test method - invalid new password format (similar lowercases only)
    async invalidEditAccountInvalidNewPasswordFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageInvalidSingularInput = new PersonalInfoPageInvalidSingularInput(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Information" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(0);
        //wait for elements to load
        await basePage.waitForElementLoad(3000);
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the personal info page display before edited data input
        await captureScreenshot(this.driver, "Personal Info Page Display Before Edited Data Input");
        //input valid old password into old password input field (without it, the user won't be able to save edited data)
        await personalInfoPage.inputOldPasswordIntoOldPasswordInputField();
        //click "View old password" button
        await personalInfoPage.clickViewPersonalInfoPasswordButton();
        //input invalid new password format into new password input field (similar lowercases only)
        await personalInfoPageInvalidSingularInput.inputInvalidNewPasswordFormatIntoNewPasswordInputField();
        //click "View new password" button
        await personalInfoPage.clickViewPersonalInfoNewPasswordButton();
        //capture screenshot of the personal info page display after invalid edited data input - invalid new password format
        await captureScreenshot(this.driver, "Personal Info Page Display After Invalid Edited Data Input - Invalid New Password Format");
        //click "Save" button
        await personalInfoPage.clickSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Edit Account Data Test Result - Invalid New Password Format");
        //assert the user gets expected error messages
        const invalidPersonalInfoPageUpdateError = await personalInfoPage.getPersonalInfoUpdateFailureMessage();
        assert.strictEqual(invalidPersonalInfoPageUpdateError,"Could not update your information, please check your data.", "The user account info update error doesn't match expectations or the error wasn't triggered.")
        const invalidPersonalInfoPageSingularInputError = await personalInfoPage.getPersonalInfoSingularInputErrorMsg();
        assert.strictEqual(invalidPersonalInfoPageSingularInputError,"Repeats like \"aaa\" are easy to guess\n" + "Add another word or two. Uncommon words are better.\n" + "Avoid repeated words and characters", "The invalid edited new password input format error doesn't match expectations or the error wasn't triggered.")
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid new address addition tests

    //valid add user address test method
    async validAddNewUserAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        const addressesDashboardPageTextElementAssert = new AddressesDashPageTextElementAssert(this.driver);
        const addressesDashboardPageDataLogger = new AddressesDashPageDataLogger(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad();
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input valid new address alias (optional, more for visual assert) into new address alias input field
        await newAddressPage.inputNewAddressAliasIntoAddressAliasInputField();
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after valid data input
        await captureScreenshot(this.driver, "New Address Page Display After Valid Data Input");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //assert the user gets an expected success message
        const addAddressSuccessMessage = await addressesDashboardPage.getAddressesDashboardPageAddressAddSuccessMessage();
        assert.strictEqual(addAddressSuccessMessage, "Address successfully added.", "The address dashboard new address addition success message doesn't match expectation or the new address addition has failed.");
        //addresses dashboard page web element assert
        await addressesDashboardPage.isAddressesDashboardPageWebElementDisplayed();
        //addresses dashboard page text element assert
        await addressesDashboardPageTextElementAssert.isAddressesDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //log user address displayed data
        await addressesDashboardPageDataLogger.logAddressesDashPageData();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid Add New User Address Test Result");
    }

    //valid add additional user address test method
    async validAddAdditionalNewUserAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        const addressesDashboardPageTextElementAssert = new AddressesDashPageTextElementAssert(this.driver);
        const addressesDashboardPageDataLogger = new AddressesDashPageDataLogger(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //addresses dashboard page web element assert
        await addressesDashboardPage.isAddressesDashboardPageWebElementDisplayed();
        //addresses dashboard page text element assert
        await addressesDashboardPageTextElementAssert.isAddressesDashboardPageTextElementAsExpected();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //capture screenshot of the addresses dashboard page display
        await captureScreenshot(this.driver, "Addresses Dashboard Page Display");
        //click "Create new address" link method
        await addressesDashboardPage.clickAddressesDashboardCreateNewAddressLink();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input valid new address alias (optional, more for visual assert) into new address alias input field
        await newAddressPage.inputNewAddressAliasIntoAddressAliasInputField();
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after valid data input
        await captureScreenshot(this.driver, "New Address Page Display After Valid Data Input");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //assert the user gets an expected success message
        const addAddressSuccessMessage = await addressesDashboardPage.getAddressesDashboardPageAddressAddSuccessMessage();
        assert.strictEqual(addAddressSuccessMessage, "Address successfully added.", "The address dashboard new address addition success message doesn't match expectation or the new address addition has failed.");
        //addresses dashboard page web element assert
        await addressesDashboardPage.isAddressesDashboardPageWebElementDisplayed();
        //addresses dashboard page text element assert
        await addressesDashboardPageTextElementAssert.isAddressesDashboardPageTextElementAsExpected();
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //log user address displayed data
        await addressesDashboardPageDataLogger.logAddressesDashPageData();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid Add New User Address Test Result");
    }

    //invalid new address addition tests

    //no singular input

    //invalid add user address test method - no country
    async invalidAddNewUserAddressNoCountryTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "Country" dropdown menu
        await newAddressPage.clickCountryDropdownMenu();
        //select "Please choose" option
        await newAddressPage.selectChooseCountryOption();
        //capture screenshot of the new address page display after invalid data input - no country
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - No Country");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - No Country");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //assert the user stays on the same page (process doesn't get completed)
        const currentURL = await this.driver.getCurrentUrl();
        const newAddressPageURL = "https://panda2.sunnytoo.com/en/address";
        assert.strictEqual(currentURL, newAddressPageURL, "The user was able to add new address without country input, test has failed");
    }

    //invalid add user address test method - no state
    async invalidAddNewUserAddressNoStateTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //capture screenshot of the new address page display after invalid data input - no state
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - No State");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - No State");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //assert the user stays on the same page (process doesn't get completed)
        const currentURL = await this.driver.getCurrentUrl();
        const newAddressPageURL = "https://panda2.sunnytoo.com/en/address";
        assert.strictEqual(currentURL, newAddressPageURL, "The user was able to add new address without state input, test has failed");
    }

    //invalid add user address test method - no first name
    async invalidAddNewUserAddressNoFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //don't input first name into new address first name input field
        await newAddressPageInvalidSingularInput.inputNoNewAddressFirstNameIntoAddressFirstNameInputField();
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - no first name
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - No First Name");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - No First Name");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //assert the user stays on the same page (process doesn't get completed)
        const currentURL = await this.driver.getCurrentUrl();
        const newAddressPageURL = "https://panda2.sunnytoo.com/en/address";
        assert.strictEqual(currentURL, newAddressPageURL, "The user was able to add new address without first name input, test has failed");
    }

    //invalid add user address test method - no last name
    async invalidAddNewUserAddressNoLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //don't input last name into new address last name input field
        await newAddressPageInvalidSingularInput.inputNoNewAddressLastNameIntoAddressLastNameInputField();
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - no last name
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - No Last Name");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - No Last Name");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //assert the user stays on the same page (process doesn't get completed)
        const currentURL = await this.driver.getCurrentUrl();
        const newAddressPageURL = "https://panda2.sunnytoo.com/en/address";
        assert.strictEqual(currentURL, newAddressPageURL, "The user was able to add new address without last name input, test has failed");
    }

    //invalid add user address test method - no address
    async invalidAddNewUserAddressNoAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //don't input new address into new address one input field
        await newAddressPageInvalidSingularInput.inputNoNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - no address
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - No Address");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - No Address");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //assert the user stays on the same page (process doesn't get completed)
        const currentURL = await this.driver.getCurrentUrl();
        const newAddressPageURL = "https://panda2.sunnytoo.com/en/address";
        assert.strictEqual(currentURL, newAddressPageURL, "The user was able to add new address without address input, test has failed");
    }

    //invalid add user address test method - no city
    async invalidAddNewUserAddressNoCityTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //don't input new address city into new address city input field
        await newAddressPageInvalidSingularInput.inputNoNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - no city
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - No City");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - No City");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //assert the user stays on the same page (process doesn't get completed)
        const currentURL = await this.driver.getCurrentUrl();
        const newAddressPageURL = "https://panda2.sunnytoo.com/en/address";
        assert.strictEqual(currentURL, newAddressPageURL, "The user was able to add new address without city input, test has failed");
    }

    //invalid add user address test method - no post code
    async invalidAddNewUserAddressNoPostCodeTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //don't input new address post code into new address post code input field
        await newAddressPageInvalidSingularInput.inputNoNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - no post code
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - No Post Code");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - No Post Code");
        //assert the user stays on the same page (process doesn't get completed)
        const currentURL = await this.driver.getCurrentUrl();
        const newAddressPageURL = "https://panda2.sunnytoo.com/en/address";
        assert.strictEqual(currentURL, newAddressPageURL, "The user was able to add new address without post code input, test has failed");
    }

    //too short singular input

    //invalid add user address test method - too short first name (1 char)
    async invalidAddNewUserAddressTooShortFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input too short first name into new address first name input field (1 char)
        await newAddressPageInvalidSingularInput.inputTooShortNewAddressFirstNameIntoAddressFirstNameInputField();
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - too short first name
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Too Short First Name");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Too Short First Name");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //if the user gets a success message, throw an error
        const addAddressSuccessMessage = await addressesDashboardPage.getAddressesDashboardPageAddressAddSuccessMessage();
        if (addAddressSuccessMessage && addAddressSuccessMessage.trim() === "Address successfully added.") {
            throw new Error("The too short new address first name input error doesn't get triggered, test has failed.");
        }
    }

    //invalid add user address test method - too short last name (1 char)
    async invalidAddNewUserAddressTooShortLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input too short last name into new address last name input field
        await newAddressPageInvalidSingularInput.inputTooShortNewAddressLastNameIntoAddressLastNameInputField();
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - too short last name
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Too Short Last Name");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Too Short Last Name");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //if the user gets a success message, throw an error
        const addAddressSuccessMessage = await addressesDashboardPage.getAddressesDashboardPageAddressAddSuccessMessage();
        if (addAddressSuccessMessage && addAddressSuccessMessage.trim() === "Address successfully added.") {
            throw new Error("The too short new address last name input error doesn't get triggered, test has failed.");
        }
    }

    //invalid add user address test method - too short address (3 chars)
    async invalidAddNewUserAddressTooShortAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input too short new address into new address one input field (3 chars)
        await newAddressPageInvalidSingularInput.inputTooShortNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - too short address
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Too Short Address");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Too Short Address");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //if the user gets a success message, throw an error
        const addAddressSuccessMessage = await addressesDashboardPage.getAddressesDashboardPageAddressAddSuccessMessage();
        if (addAddressSuccessMessage && addAddressSuccessMessage.trim() === "Address successfully added.") {
            throw new Error("The too short new address input error doesn't get triggered, test has failed.");
        }
    }

    //invalid add user address test method - too short city (1 char)
    async invalidAddNewUserAddressTooShortCityTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input too short new address city into new address city input field (1 char)
        await newAddressPageInvalidSingularInput.inputTooShortNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - too short city
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Too Short City");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Too Short City");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //if the user gets a success message, throw an error
        const addAddressSuccessMessage = await addressesDashboardPage.getAddressesDashboardPageAddressAddSuccessMessage();
        if (addAddressSuccessMessage && addAddressSuccessMessage.trim() === "Address successfully added.") {
            throw new Error("The too short new address city input error doesn't get triggered, test has failed.");
        }
    }

    //invalid add user address test method - too short post code (4 digits)
    async invalidAddNewUserAddressTooShortPostCodeTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input too short new address post code into new address post code input field (4 digits)
        await newAddressPageInvalidSingularInput.inputTooShortNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - too short post code
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Too Short Post Code");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad();
        //assert the user gets expected error messages
        const addressAddFailureMessage = await newAddressPage.getNewAddressInfoAddFailureMessage();
        assert.strictEqual(addressAddFailureMessage, "Please fix the error below.", "The new address page address addition failure message doesn't match expectations.")
        const invalidPostCodeError = await newAddressPage.getNewAddressSingularInputErrorMsg();
        assert.strictEqual(invalidPostCodeError, "Invalid postcode - should look like \"NNNNN\"", "The new address too short post code input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Too Short Post Code");
    }

    //too long singular input

    //invalid add user address test method - too long first name (100 chars)
    async invalidAddNewUserAddressTooLongFirstNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input too long first name into new address first name input field (100 chars)
        await newAddressPageInvalidSingularInput.inputTooLongNewAddressFirstNameIntoAddressFirstNameInputField();
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - too long first name
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Too Long First Name");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Too Long First Name");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //if the user gets a success message, throw an error
        const addAddressSuccessMessage = await addressesDashboardPage.getAddressesDashboardPageAddressAddSuccessMessage();
        if (addAddressSuccessMessage && addAddressSuccessMessage.trim() === "Address successfully added.") {
            throw new Error("The too long new address first name input error doesn't get triggered, test has failed.");
        }
    }

    //invalid add user address test method - too long last name (100 chars)
    async invalidAddNewUserAddressTooLongLastNameTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input too long last name into new address last name input field (100 chars)
        await newAddressPageInvalidSingularInput.inputTooLongNewAddressLastNameIntoAddressLastNameInputField();
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - too long last name
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Too Long Last Name");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Too Long Last Name");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //if the user gets a success message, throw an error
        const addAddressSuccessMessage = await addressesDashboardPage.getAddressesDashboardPageAddressAddSuccessMessage();
        if (addAddressSuccessMessage && addAddressSuccessMessage.trim() === "Address successfully added.") {
            throw new Error("The too long new address last name input error doesn't get triggered, test has failed.");
        }
    }

    //invalid add user address test method - too long address (100 chars)
    async invalidAddNewUserAddressTooLongAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input too long new address into new address one input field (100 chars)
        await newAddressPageInvalidSingularInput.inputTooLongNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - too short address
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Too Short Address");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Too Short Address");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //if the user gets a success message, throw an error
        const addAddressSuccessMessage = await addressesDashboardPage.getAddressesDashboardPageAddressAddSuccessMessage();
        if (addAddressSuccessMessage && addAddressSuccessMessage.trim() === "Address successfully added.") {
            throw new Error("The too long new address input error doesn't get triggered, test has failed.");
        }
    }

    //invalid add user address test method - too long city (100 chars)
    async invalidAddNewUserAddressTooLongCityTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input too long new address city into new address city input field (100 chars)
        await newAddressPageInvalidSingularInput.inputTooLongNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - no city
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Too Long City");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Too Long City");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //if the user gets a success message, throw an error
        const addAddressSuccessMessage = await addressesDashboardPage.getAddressesDashboardPageAddressAddSuccessMessage();
        if (addAddressSuccessMessage && addAddressSuccessMessage.trim() === "Address successfully added.") {
            throw new Error("The too long new address city input error doesn't get triggered, test has failed.");
        }
    }

    //invalid add user address test method - too long post code (6 digits)
    async invalidAddNewUserAddressTooLongPostCodeTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input too long new address post code into new address post code input field (6 digits)
        await newAddressPageInvalidSingularInput.inputTooLongNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - too long post code
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Too Long Post Code");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user gets expected error messages
        const addressAddFailureMessage = await newAddressPage.getNewAddressInfoAddFailureMessage();
        assert.strictEqual(addressAddFailureMessage, "Please fix the error below.", "The new address page address addition failure message doesn't match expectations.")
        const invalidPostCodeError = await newAddressPage.getNewAddressSingularInputErrorMsg();
        assert.strictEqual(invalidPostCodeError, "Invalid postcode - should look like \"NNNNN\"", "The new address too long post code input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Too Long Post Code");
    }

    //invalid singular input format

    //invalid add user address test method - invalid first name format (special symbols only)
    async invalidAddNewUserAddressInvalidFirstNameFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input invalid first name format into new address first name input field (special symbols only)
        await newAddressPageInvalidSingularInput.inputInvalidNewAddressFirstNameFormatIntoAddressFirstNameInputField();
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - invalid first name format
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Invalid First Name Format");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user gets expected error messages
        const addressAddFailureMessage = await newAddressPage.getNewAddressInfoAddFailureMessage();
        assert.strictEqual(addressAddFailureMessage, "Please fix the error below.", "The new address page address addition failure message doesn't match expectations.")
        const invalidPostCodeError = await newAddressPage.getNewAddressSingularInputErrorMsg();
        assert.strictEqual(invalidPostCodeError, "Invalid name", "The new address invalid first name input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Invalid First Name Format");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
    }

    //invalid add user address test method - invalid last name format (special symbols only)
    async invalidAddNewUserAddressInvalidLastNameFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input invalid last name format into new address last name input field (special symbols only)
        await newAddressPageInvalidSingularInput.inputInvalidNewAddressLastNameFormatIntoAddressLastNameInputField();
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - invalid last name format
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Invalid Last Name Format");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user gets expected error messages
        const addressAddFailureMessage = await newAddressPage.getNewAddressInfoAddFailureMessage();
        assert.strictEqual(addressAddFailureMessage, "Please fix the error below.", "The new address page address addition failure message doesn't match expectations.")
        const invalidPostCodeError = await newAddressPage.getNewAddressSingularInputErrorMsg();
        assert.strictEqual(invalidPostCodeError, "Invalid name", "The new address invalid last name input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Invalid Last Name Format");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
    }

    //invalid add user address test method - invalid address format (special symbols only)
    async invalidAddNewUserAddressInvalidAddressFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input invalid new address format into new address one input field (special symbols only)
        await newAddressPageInvalidSingularInput.inputInvalidNewAddressFormatIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - invalid address input format
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Invalid Address Input Format");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user gets expected error messages
        const addressAddFailureMessage = await newAddressPage.getNewAddressInfoAddFailureMessage();
        assert.strictEqual(addressAddFailureMessage, "Please fix the error below.", "The new address page address addition failure message doesn't match expectations.")
        const invalidPostCodeError = await newAddressPage.getNewAddressSingularInputErrorMsg();
        assert.strictEqual(invalidPostCodeError, "Invalid format.", "The new address invalid address input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Invalid Address Input Format");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
    }

    //invalid add user address test method - invalid city format (special symbols only)
    async invalidAddNewUserAddressInvalidCityFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input invalid new address city format into new address city input field (100 chars)
        await newAddressPageInvalidSingularInput.inputInvalidNewAddressCityFormatIntoAddressCityInputField();
        //input valid new address post code into new address post code input field
        await newAddressPage.inputNewAddressPostCodeIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - invalid city format
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Invalid City Format");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user gets expected error messages
        const addressAddFailureMessage = await newAddressPage.getNewAddressInfoAddFailureMessage();
        assert.strictEqual(addressAddFailureMessage, "Please fix the error below.", "The new address page address addition failure message doesn't match expectations.")
        const invalidPostCodeError = await newAddressPage.getNewAddressSingularInputErrorMsg();
        assert.strictEqual(invalidPostCodeError, "Invalid format.", "The new address invalid city input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Invalid City Format");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
    }

    //invalid add user address test method - invalid post code format (special symbols only)
    async invalidAddNewUserAddressInvalidPostCodeFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const newAddressPage = new NewAddressPage(this.driver);
        const newAddressPageInvalidSingularInput = new NewAddressPageInvalidSingularInput(this.driver);
        const newAddressPageTextElementAssert = new NewAddressPageTextElementAssert(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //click "My Account" upper header navbar link
        await generalPage.clickMyAccountUpperNavLink();
        //account dashboard page breadcrumb web element assert
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside section web element assert
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page web element assert
        await accountDashboardPage.isAccountDashboardPageWebElementDisplayed();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //account dashboard page text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageTextElementAsExpected();
        //capture screenshot of the account dashboard page display
        await captureScreenshot(this.driver, "Account Dashboard Page Display");
        //click "Addresses" link method
        await accountDashboardPage.clickAccountDashboardSetLinkMethod(1);
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //new address page web element assert
        await newAddressPage.isNewAddressPageWebElementDisplayed();
        //new address page text element assert
        await newAddressPageTextElementAssert.isNewAddressPageTextElementAsExpected();
        //capture screenshot of the new address page display before data input
        await captureScreenshot(this.driver, "New Address Page Display Before Data Input");
        //input valid new address into new address one input field
        await newAddressPage.inputNewAddressIntoAddressOneInputField();
        //input valid new address city into new address city input field
        await newAddressPage.inputNewAddressCityIntoAddressCityInputField();
        //input invalid new address post code format into new address post code input field (special symbols only)
        await newAddressPageInvalidSingularInput.inputInvalidNewAddressPostCodeFormatIntoAddressPostCodeInputField();
        //click "State" dropdown menu
        await newAddressPage.clickStateDropdownMenu();
        //select "Illinois" option
        await newAddressPage.selectIllinoisStateOption();
        //capture screenshot of the new address page display after invalid data input - too long post code
        await captureScreenshot(this.driver, "New Address Page Display After Invalid Data Input - Too Long Post Code");
        //click "Save" button
        await newAddressPage.clickNewAddressSaveButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user gets expected error messages
        const addressAddFailureMessage = await newAddressPage.getNewAddressInfoAddFailureMessage();
        assert.strictEqual(addressAddFailureMessage, "Please fix the error below.", "The new address page address addition failure message doesn't match expectations.")
        const invalidPostCodeError = await newAddressPage.getNewAddressSingularInputErrorMsg();
        assert.strictEqual(invalidPostCodeError, "Invalid postcode - should look like \"NNNNN\"", "The new address invalid post code input format error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid Add New User Address Test Result - Too Long Post Code");
    }

    //remove user address test method
    async removeUserAddressTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        const addressesDashPageTextElementAssert = new AddressesDashPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(1500);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //addresses dashboard page web element assert
        await addressesDashboardPage.isAddressesDashboardPageWebElementDisplayed();
        //addresses dashboard page text element assert
        await addressesDashPageTextElementAssert.isAddressesDashboardPageTextElementAsExpected();
        //account dashboard page aside section text element assert
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //capture screenshot of the addresses dashboard page display
        await captureScreenshot(this.driver, "Addresses Dashboard Page Display");
        //click "Delete" address link
        await addressesDashboardPage.clickAddressesDashSetDeleteAddressLinkMethod(0)
        //wait for elements to load
        await basePage.waitForElementLoad(1500);
        //assert the user gets an expected address removal success message
        const removeAddressSuccessMessage = await addressesDashboardPage.getAddressesDashboardPageAddressAddSuccessMessage();
        assert.strictEqual(removeAddressSuccessMessage, "Address successfully deleted.", "The address dashboard address removal success message doesn't match expectation or the address removal has failed.");
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Remove User Address Test Result");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //valid login / logout tests

    //user logout test method
    async userLogoutTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        const loginRegisterDashPageTextElementAssert = new LoginRegisterDashPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(1000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //capture screenshot of the addresses dashboard page display
        await captureScreenshot(this.driver, "Addresses Dashboard Page Display");
        //click "Sign out" aside link
        await accountDashboardPage.clickAccountDashboardSetAsideLinkMethod(11);
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await loginRegisterDashPageTextElementAssert.isLoginRegisterDashPageTextElementAsExpected();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "User Logout Test Result");
    }

    //valid user login test method
    async validUserLoginTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        const loginRegisterDashPageTextElementAssert = new LoginRegisterDashPageTextElementAssert(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        const addressesDashPageTextElementAssert = new AddressesDashPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(1000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await loginRegisterDashPageTextElementAssert.isLoginRegisterDashPageTextElementAsExpected();
        //capture screenshot of the login/register dashboard page before data input
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display Before Data Input");
        //input valid login email into login email input field
        await loginRegisterDashboardPage.inputValidLoginEmailIntoEmailInputField();
        //input valid login password into login password input field
        await loginRegisterDashboardPage.inputValidLoginPasswordIntoPasswordInputField();
        //click "View password" button
        await loginRegisterDashboardPage.clickViewLoginPasswordButton();
        //capture screenshot of the login/register dashboard page after valid data input
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display After Valid Data Input");
        //click "Sign in" button
        await loginRegisterDashboardPage.clickSignInButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1000);
        //assert the user gets logged in (transferred to addresses dashboard page)
        const addressesDashPageTitle = await addressesDashboardPage.getAddressesDashboardPageTitle();
        assert.strictEqual(addressesDashPageTitle, "YOUR ADDRESSES", "The addresses dashboard page title doesn't match expectations.");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //addresses dashboard page web element assert
        await addressesDashboardPage.isAddressesDashboardPageWebElementDisplayed();
        //addresses dashboard page text element assert
        await addressesDashPageTextElementAssert.isAddressesDashboardPageTextElementAsExpected();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid User Login Test Result");
    }

    //valid user login with edited login email test method
    async validUserLoginEditedEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        const loginRegisterDashPageTextElementAssert = new LoginRegisterDashPageTextElementAssert(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(1000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await loginRegisterDashPageTextElementAssert.isLoginRegisterDashPageTextElementAsExpected();
        //capture screenshot of the login/register dashboard page before data input
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display Before Data Input");
        //input valid edited login email into login email input field
        await loginRegisterDashboardPage.inputValidEditedLoginEmailIntoEmailInputField();
        //input valid login password into login password input field
        await loginRegisterDashboardPage.inputValidLoginPasswordIntoPasswordInputField();
        //click "View password" button
        await loginRegisterDashboardPage.clickViewLoginPasswordButton();
        //capture screenshot of the login/register dashboard page after valid data input - edited login email
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display After Valid Data Input - Edited Login Email");
        //click "Sign in" button
        await loginRegisterDashboardPage.clickSignInButton();
        //wait for elements to load
        await basePage.waitForElementLoad(2000);
        //assert the user gets logged in (transferred to personal information page)
        const personalInfoPageTitle = await personalInfoPage.getPersonalInfoPageTitle();
        assert.strictEqual(personalInfoPageTitle, "YOUR PERSONAL INFORMATION", "The personal info page title doesn't match expectations.");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid User Login With Edited Email Test Result");
    }

    //valid user login with edited login password test method
    async validUserLoginEditedPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        const loginRegisterDashPageTextElementAssert = new LoginRegisterDashPageTextElementAssert(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);
        const personalInfoPageTextElementAssert = new PersonalInfoPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(1000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await loginRegisterDashPageTextElementAssert.isLoginRegisterDashPageTextElementAsExpected();
        //capture screenshot of the login/register dashboard page before data input
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display Before Data Input");
        //input valid login email into login email input field
        await loginRegisterDashboardPage.inputValidLoginEmailIntoEmailInputField();
        //input valid edited login password into login password input field
        await loginRegisterDashboardPage.inputValidEditedLoginPasswordIntoPasswordInputField();
        //click "View password" button
        await loginRegisterDashboardPage.clickViewLoginPasswordButton();
        //capture screenshot of the login/register dashboard page after valid data input - edited login password
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display After Valid Data Input - Edited Login Password");
        //click "Sign in" button
        await loginRegisterDashboardPage.clickSignInButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1500);
        //assert the user gets logged in (transferred to personal information page)
        const personalInfoPageTitle = await personalInfoPage.getPersonalInfoPageTitle();
        assert.strictEqual(personalInfoPageTitle, "YOUR PERSONAL INFORMATION", "The personal info page title doesn't match expectations.");
        //log the product addition issue if it gets added without any predefined actions
        const genPageSidebarCartCountText = await generalPage.getSidebarCartButtonText();
        const headerShoppingCartLinkText = await generalPage.getHeaderShoppingCartLinkText();
        if(genPageSidebarCartCountText !== "Cart\n0" && headerShoppingCartLinkText !== "0\\nSHOPPING CART\\n-\\n$0.00"){
            Logger.error(`A random product(s) was added (during user account creation) without any predefined action performed. Expected header shopping cart display: '0 SHOPPING CART - $0.00', Actual: ${headerShoppingCartLinkText}`)
        } else {
            Logger.info("No random product has been added.");
        }
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //personal info page web element assert
        await personalInfoPage.isPersonalInformationPageWebElementDisplayed();
        //personal info page text element assert
        await personalInfoPageTextElementAssert.isPersonalInfoPageTextElementAsExpected();
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Valid User Login With Edited Password Test Result");
    }

    //invalid user login tests

    //no singular input

    //invalid user login test method - no login email
    async invalidUserLoginNoEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        const loginRegisterDashPageInvalidSingularInput = new LoginRegisterDashPageInvalidSingularInput(this.driver);
        const loginRegisterDashPageTextElementAssert = new LoginRegisterDashPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(1000);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await loginRegisterDashPageTextElementAssert.isLoginRegisterDashPageTextElementAsExpected();
        //capture screenshot of the login/register dashboard page before data input
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display Before Data Input");
        //don't input login email into login email input field
        await loginRegisterDashPageInvalidSingularInput.inputNoLoginEmailIntoEmailInputField();
        //input valid login password into login password input field
        await loginRegisterDashboardPage.inputValidLoginPasswordIntoPasswordInputField();
        //click "View password" button
        await loginRegisterDashboardPage.clickViewLoginPasswordButton();
        //capture screenshot of the login/register dashboard page after invalid data input - no login email
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display After Invalid Data Input - No Login Email");
        //click "Sign in" button
        await loginRegisterDashboardPage.clickSignInButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1200);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - No Login Email");
    }

    //invalid user login test method - no login password
    async invalidUserLoginNoPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        const loginRegisterDashPageInvalidSingularInput = new LoginRegisterDashPageInvalidSingularInput(this.driver);
        const loginRegisterDashPageTextElementAssert = new LoginRegisterDashPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(1500);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await loginRegisterDashPageTextElementAssert.isLoginRegisterDashPageTextElementAsExpected();
        //capture screenshot of the login/register dashboard page before data input
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display Before Data Input");
        //input valid login email into login email input field
        await loginRegisterDashboardPage.inputValidLoginEmailIntoEmailInputField();
        //don't input login password into login password input field
        await loginRegisterDashPageInvalidSingularInput.inputNoLoginPasswordIntoPasswordInputField();
        //click "View password" button
        await loginRegisterDashboardPage.clickViewLoginPasswordButton();
        //capture screenshot of the login/register dashboard page after invalid data input - no login password
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display After Invalid Data Input - No Login Password");
        //click "Sign in" button
        await loginRegisterDashboardPage.clickSignInButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1200);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - No Login Password");
    }

    //invalid singular input

    //invalid user login test method - invalid login email
    async invalidUserLoginInvalidEmailTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        const loginRegisterDashPageInvalidSingularInput = new LoginRegisterDashPageInvalidSingularInput(this.driver);
        const loginRegisterDashPageTextElementAssert = new LoginRegisterDashPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(1500);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await loginRegisterDashPageTextElementAssert.isLoginRegisterDashPageTextElementAsExpected();
        //capture screenshot of the login/register dashboard page before data input
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display Before Data Input");
        //input invalid login email into login email input field
        await loginRegisterDashPageInvalidSingularInput.inputInvalidLoginEmailIntoEmailInputField();
        //input valid login password into login password input field
        await loginRegisterDashboardPage.inputValidLoginPasswordIntoPasswordInputField();
        //click "View password" button
        await loginRegisterDashboardPage.clickViewLoginPasswordButton();
        //capture screenshot of the login/register dashboard page after invalid data input - invalid login email
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display After Invalid Data Input - Invalid Login Email");
        //click "Sign in" button
        await loginRegisterDashboardPage.clickSignInButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1200);
        //assert the user gets an expected error
        const invalidSingularLoginInputError = await loginRegisterDashboardPage.getLoginSectionSingularInputErrorMsg();
        assert.strictEqual(invalidSingularLoginInputError,"Authentication failed.", "The invalid login error input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Email");
    }

    //invalid user login test method - invalid login email format
    async invalidUserLoginInvalidEmailFormatTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        const loginRegisterDashPageInvalidSingularInput = new LoginRegisterDashPageInvalidSingularInput(this.driver);
        const loginRegisterDashPageTextElementAssert = new LoginRegisterDashPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(1500);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await loginRegisterDashPageTextElementAssert.isLoginRegisterDashPageTextElementAsExpected();
        //capture screenshot of the login/register dashboard page before data input
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display Before Data Input");
        //input invalid login email format into login email input field
        await loginRegisterDashPageInvalidSingularInput.inputInvalidLoginEmailFormatIntoEmailInputField();
        //input valid login password into login password input field
        await loginRegisterDashboardPage.inputValidLoginPasswordIntoPasswordInputField();
        //click "View password" button
        await loginRegisterDashboardPage.clickViewLoginPasswordButton();
        //capture screenshot of the login/register dashboard page after invalid data input - invalid login email format
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display After Invalid Data Input - Invalid Login Email Format");
        //click "Sign in" button
        await loginRegisterDashboardPage.clickSignInButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1200);
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Email Format");
    }

    //invalid user login test method - invalid login password
    async invalidUserLoginInvalidPasswordTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        const loginRegisterDashboardPage = new LoginRegisterDashboardPage(this.driver);
        const loginRegisterDashPageInvalidSingularInput = new LoginRegisterDashPageInvalidSingularInput(this.driver);
        const loginRegisterDashPageTextElementAssert = new LoginRegisterDashPageTextElementAssert(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(1500);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //login/register dashboard page web element assert
        await loginRegisterDashboardPage.isLoginRegisterDashPageWebElementDisplayed();
        //login/register dashboard page text element assert
        await loginRegisterDashPageTextElementAssert.isLoginRegisterDashPageTextElementAsExpected();
        //capture screenshot of the login/register dashboard page before data input
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display Before Data Input");
        //input valid login email into login email input field
        await loginRegisterDashboardPage.inputValidLoginEmailIntoEmailInputField();
        //input invalid login password into login password input field
        await loginRegisterDashPageInvalidSingularInput.inputInvalidLoginPasswordIntoPasswordInputField();
        //click "View password" button
        await loginRegisterDashboardPage.clickViewLoginPasswordButton();
        //capture screenshot of the login/register dashboard page after invalid data input - invalid login password
        await captureScreenshot(this.driver, "Login and Register Dashboard Page Display After Invalid Data Input - Invalid Login Password");
        //click "Sign in" button
        await loginRegisterDashboardPage.clickSignInButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1200);
        //assert the user gets an expected error message
        const loginSectionSingularInputErrorMsg = await loginRegisterDashboardPage.getLoginSectionSingularInputErrorMsg();
        assert.strictEqual(loginSectionSingularInputErrorMsg, "Authentication failed.", "The login register dashboard page invalid password input error doesn't match expectations or the error wasn't triggered.");
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Invalid User Login Test Result - Invalid Login Password");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page featured product(s) addition to cart tests

    //add single featured product ("Women's Fashion Block Moto Jackets") to cart test method (as a guest)
    async addSingleFeaturedProductToCartTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        //const generalPageDataLoggers = new GeneralPageDataLoggers(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const shoppingCartModal = new ShoppingCartModal(this.driver);
        const shoppingCartModalTextElementAssert = new ShoppingCartModalTextElementAssert(this.driver);
        //const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        const shoppingCartPageTextElementAssert = new ShoppingCartPageTextElementAssert(this.driver);
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(1500);
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
        //hover over set featured product ("Women's Fashion Block Moto Jackets") link
        await homePage.hoverOverSetFeaturedProductLink(2);
        //click set featured product ("Women's Fashion Block Moto Jackets") link
        await homePage.clickSetFeaturedProductAddToCartButton(2);
        //wait for elements to load
        await basePage.waitForElementLoad(1500);
        //shopping cart modal web element assert
        await shoppingCartModal.isShopCartModalWebElementDisplayed();
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAssert.isShoppingCartModalTextElementAsExpected();
        //log shopping cart modal product data (Selenium can't seem to find these elements with VALID selectors)
        //await shoppingCartModalDataLogger.logShoppingCartModalProductData();
        //capture screenshot of the shopping cart modal display
        await captureScreenshot(this.driver, "Shopping Cart Modal Display");
        //assert the user receives expected product addition success message
        const productAdditionSuccessMessage = await shoppingCartModal.getShoppingCartModalProductAdditionSuccessMessage();
        assert.strictEqual(productAdditionSuccessMessage, "Product successfully added to your shopping cart", "The product addition to shopping cart modal success message doesn't match expectations or the product addition process has failed.");
        //click "Shopping cart" button
        await shoppingCartModal.clickShoppingCartButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1300);
        //shopping cart web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart text element assert
        await shoppingCartPageTextElementAssert.isShoppingCartPageTextElementAsExpected();
        //log shopping cart displayed data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData();
        //assert only the required product is in shopping cart, throw the error otherwise
        const expectedProductName = "Women's fashion block moto jackets";
        const actualProductNames = await shoppingCartPage.getShoppingCartTableProductName();
        if(actualProductNames.length === 1 && actualProductNames[0] === expectedProductName){
            Logger.info("Only the expected product is added into shopping cart, test has passed")
        } else {
            await captureScreenshot(this.driver, "Add Single Homepage Featured Product To Cart Test Result (as a guest) - Not Only Set Featured Product is Added");
            throw new Error(`Not only the required product is present in shopping cart after ${expectedProductName} addition to cart. Actual display: ${actualProductNames}. Test has failed.`);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Homepage Featured Product To Cart Test Result (as a guest)");
    }

    //add single featured product ("Women's Fashion Block Moto Jackets") to cart test method (as a registered user)
    async addSingleFeaturedProductToCartRegUserTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        //const generalPageDataLoggers = new GeneralPageDataLoggers(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const accountDashboardPage = new AccountDashboardPage(this.driver);
        const accountDashboardPageTextElementAssert = new AccountDashboardPageTextElementAssert(this.driver);
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        const addressesDashPageTextElementAssert = new AddressesDashPageTextElementAssert(this.driver);
        const shoppingCartModal = new ShoppingCartModal(this.driver);
        const shoppingCartModalTextElementAssert = new ShoppingCartModalTextElementAssert(this.driver);
        //const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        const shoppingCartPageTextElementAssert = new ShoppingCartPageTextElementAssert(this.driver);
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
        //log general page lower footer product data (Selenium can't seem to find these elements with VALID selectors)
        //await generalPageDataLoggers.logLowerFooterSpecialsProductData();
        //log general page lower footer recent articles data (Selenium can't seem to find these elements with VALID selectors)
        //await generalPageDataLoggers.logLowerFooterRecentArticlesData();
        //account dashboard page breadcrumb web assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageBreadcrumbWebElementDisplayed();
        //account dashboard page aside web element assert (present on this page)
        await accountDashboardPage.isAccountDashboardPageAsideWebElementDisplayed();
        //account dashboard page aside text element assert (present on this page)
        await accountDashboardPageTextElementAssert.isAccountDashboardPageAsideTextElementAsExpected();
        //addresses dashboard page web element assert
        await addressesDashboardPage.isAddressesDashboardPageWebElementDisplayed();
        //addresses dashboard page text element assert
        await addressesDashPageTextElementAssert.isAddressesDashboardPageTextElementAsExpected();
        //click header home page logo
        await generalPage.clickHeaderHomePageLogoLink();
        //wait for elements to load
        await basePage.waitForElementLoad(1300);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await generalPageTextElementAssert.isGeneralPageTextElementAsExpected();
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
        //hover over set featured product ("Women's Fashion Block Moto Jackets") link
        await homePage.hoverOverSetFeaturedProductLink(2);
        //click set featured product ("Women's Fashion Block Moto Jackets") link
        await homePage.clickSetFeaturedProductAddToCartButton(2);
        //wait for elements to load
        await basePage.waitForElementLoad(1300);
        //shopping cart modal web element assert
        await shoppingCartModal.isShopCartModalWebElementDisplayed();
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAssert.isShoppingCartModalTextElementAsExpected();
        //log shopping cart modal product data (Selenium can't seem to find these elements with VALID selectors)
        //await shoppingCartModalDataLogger.logShoppingCartModalProductData();
        //capture screenshot of the shopping cart modal display
        await captureScreenshot(this.driver, "Shopping Cart Modal Display");
        //assert the user receives expected product addition success message
        const productAdditionSuccessMessage = await shoppingCartModal.getShoppingCartModalProductAdditionSuccessMessage();
        assert.strictEqual(productAdditionSuccessMessage, "Product successfully added to your shopping cart", "The product addition to shopping cart modal success message doesn't match expectations or the product addition process has failed.");
        //click "Shopping cart" button
        await shoppingCartModal.clickShoppingCartButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1350);
        //shopping cart web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart text element assert
        await shoppingCartPageTextElementAssert.isShoppingCartPageTextElementAsExpected();
        //log shopping cart displayed data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData();
        //assert only the required product is in shopping cart, throw the error otherwise
        const expectedProductName = "Women's fashion block moto jackets";
        const actualProductNames = await shoppingCartPage.getShoppingCartTableProductName();
        if(actualProductNames.length === 1 && actualProductNames[0] === expectedProductName){
            Logger.info("Only the expected product is added into shopping cart, test has passed")
        } else {
            await captureScreenshot(this.driver, "Add Single Homepage Featured Product To Cart Test Result (as a registered user) - Not Only Set Featured Product is Added");
            throw new Error(`Not only the required product is present in shopping cart after ${expectedProductName} addition to cart. Actual display: ${actualProductNames}. Test has failed.`);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Single Homepage Featured Product To Cart Test Result (as a registered user)");
    }

    //add multiple featured products ("Women's Heathered Middle Sleeve Shirt") to cart test method (as a guest)
    async addMultipleFeaturedProductToCartTest(){
        const basePage = new BasePage(this.driver);
        const generalPage = new GeneralPage(this.driver);
        const generalPageTextElementAssert = new GeneralPageTextElementAssert(this.driver);
        //const generalPageDataLoggers = new GeneralPageDataLoggers(this.driver);
        const homePage = new HomePage(this.driver);
        const homePageTextElementAssert = new HomePageTextElementAssert(this.driver);
        const homePageDataLoggers = new HomePageDataLoggers(this.driver);
        const shoppingCartModal = new ShoppingCartModal(this.driver);
        const shoppingCartModalTextElementAssert = new ShoppingCartModalTextElementAssert(this.driver);
        //const shoppingCartModalDataLogger = new ShoppingCartModalDataLogger(this.driver);
        const headerShoppingCartModal = new HeaderShoppingCartModal(this.driver);
        const headerShoppingCartModalDataLogger = new HeaderShoppingCartModalDataLogger(this.driver);
        const shoppingCartPage = new ShoppingCartPage(this.driver);
        const shoppingCartPageTextElementAssert = new ShoppingCartPageTextElementAssert(this.driver);
        const shoppingCartPageDataLogger = new ShoppingCartPageDataLogger(this.driver);
        //wait for elements to load
        await basePage.waitForElementLoad(1300);
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
        //hover over set featured product ("Women's Heathered Middle Sleeve Shirt") link
        await homePage.hoverOverSetFeaturedProductLink(1);
        //click set featured product ("Women's Heathered Middle Sleeve Shirt") link
        await homePage.clickSetFeaturedProductAddToCartButton(1);
        //wait for elements to load
        await basePage.waitForElementLoad(1300);
        //shopping cart modal web element assert
        await shoppingCartModal.isShopCartModalWebElementDisplayed();
        //shopping cart modal text element assert
        await shoppingCartModalTextElementAssert.isShoppingCartModalTextElementAsExpected();
        //log shopping cart modal product data (Selenium can't seem to find these elements with VALID selectors)
        //await shoppingCartModalDataLogger.logShoppingCartModalProductData();
        //capture screenshot of the shopping cart modal display
        await captureScreenshot(this.driver, "Shopping Cart Modal Display");
        //assert the user receives expected product addition success message
        const productAdditionSuccessMessage = await shoppingCartModal.getShoppingCartModalProductAdditionSuccessMessage();
        assert.strictEqual(productAdditionSuccessMessage, "Product successfully added to your shopping cart", "The product addition to shopping cart modal success message doesn't match expectations or the product addition process has failed.");
        //click "Close" modal button
        await shoppingCartModal.clickCloseButton();
        //hover over header shopping cart dropdown link
        await generalPage.hoverOverHeaderShoppingCartDropdownLink();
        //wait for elements to load
        await basePage.waitForElementLoad(1300);
        //header shopping cart modal web element assert
        await headerShoppingCartModal.isHeaderShopCartModalWebElementDisplayed();
        //log header shopping cart modal product data
        await headerShoppingCartModalDataLogger.logHeaderShoppingCartModalProductData();
        //capture screenshot of the header shopping cart modal display before product quantity increase
        await captureScreenshot(this.driver, "Header Shopping Cart Modal Display Before Product Quantity Increase");
        //click product quantity increase button
        await headerShoppingCartModal.clickHeaderModalShoppingCartIncreaseQtyBtn(0);
        //click product quantity increase button
        await headerShoppingCartModal.clickHeaderModalShoppingCartIncreaseQtyBtn(0);
        //capture screenshot of the header shopping cart modal display after product quantity increase
        await captureScreenshot(this.driver, "Header Shopping Cart Modal Display After Product Quantity Increase");
        //log header shopping cart modal product data (to assert the product quantity has increased)
        await headerShoppingCartModalDataLogger.logHeaderShoppingCartModalProductData();
        //click header shopping cart modal "Shopping Cart" button
        await headerShoppingCartModal.clickHeaderModalShoppingCartButton();
        //wait for elements to load
        await basePage.waitForElementLoad(1600);
        //shopping cart web element assert
        await shoppingCartPage.isShoppingCartPageWebElementDisplayed();
        //shopping cart text element assert
        await shoppingCartPageTextElementAssert.isShoppingCartPageTextElementAsExpected();
        //log shopping cart displayed data
        await shoppingCartPageDataLogger.logShoppingCartPageProductData();
        //assert only the required product is in shopping cart, throw the error otherwise
        const expectedProductName = "Women's heathered middle sleeve shirt dress";
        const actualProductNames = await shoppingCartPage.getShoppingCartTableProductName();
        if(actualProductNames.length === 1 && actualProductNames[0] === expectedProductName){
            Logger.info("Only the expected product is added into shopping cart, test has passed")
        } else {
            await captureScreenshot(this.driver, "Add Multiple Featured Products To Cart Test Result (as a guest) - Not Only Set Featured Product is Added");
            throw new Error(`Not only the required product is present in shopping cart after ${expectedProductName} addition to cart. Actual display: ${actualProductNames}. Test has failed.`);
        }
        //capture screenshot of the test result
        await captureScreenshot(this.driver, "Add Multiple Homepage Featured Products To Cart Test Result (as a guest)");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = TestMethods;