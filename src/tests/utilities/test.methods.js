"use strict"
const assert = require("node:assert");

const BasePage = require("../../pages/utilities/base.page.js");
const { GeneralPage } = require("../../pages/general.page.js");
const { HomePage } = require("../../pages/home.page.js");
const { LoginRegisterDashboardPage } = require("../../pages/login.register.dashboard.page.js");
const { RegisterPage } = require("../../pages/register.page.js");
const { AccountDashboardPage } = require("../../pages/account.dashboard.page.js");
const { PersonalInfoPage } = require("../../pages/personal.info.page.js");

const RegisterPageInvalidSingularInput = require("../../pages/reg-page-invalid-scenarios/register.page.invalid.singular.input.js");
const PersonalInfoPageInvalidSingularInput = require("../../pages/personal-info-page-invalid-scenarios/personal.info.page.invalid.singular.input.js");

//const GeneralPageDataLoggers = require("../data-loggers/general.page.data.loggers.js");
const GeneralPageTextElementAssert = require("../test-text-element-asserts/general.page.text.element.assert.js");
const HomePageTextElementAssert = require("../test-text-element-asserts/home.page.text.element.assert.js");
const HomePageDataLoggers = require("../data-loggers/home.page.data.loggers.js");
const LoginRegisterDashPageTextElementAssert = require("../test-text-element-asserts/login.register.dash.page.text.element.assert.js");
const RegisterPageTextElementAssert = require("../test-text-element-asserts/register.page.text.element.assert.js");
const AccountDashboardPageTextElementAssert = require("../test-text-element-asserts/account.dash.page.text.element.assert.js");
const PersonalInfoPageTextElementAssert = require("../test-text-element-asserts/personal.info.page.text.element.assert.js");

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
        //capture screenshot of the register page display after valid data input
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

    //invalid edit account test method - invalid new password format (lowercase only)
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
        //input invalid new password format into new password input field (lowercase only)
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
        assert.strictEqual(invalidPersonalInfoPageSingularInputError,"Add different chars into your password.", "The too long edited password input error doesn't match expectations or the error wasn't triggered.")
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = TestMethods;