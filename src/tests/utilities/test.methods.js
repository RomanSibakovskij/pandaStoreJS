"use strict"

const BasePage = require("../../pages/utilities/base.page.js");
const { GeneralPage } = require("../../pages/general.page.js");
const { HomePage } = require("../../pages/home.page.js");
const { LoginRegisterDashboardPage } = require("../../pages/login.register.dashboard.page.js");

//const GeneralPageDataLoggers = require("../data-loggers/general.page.data.loggers.js");
const GeneralPageTextElementAssert = require("../test-text-element-asserts/general.page.text.element.assert.js");
const HomePageTextElementAssert = require("../test-text-element-asserts/home.page.text.element.assert.js");
const HomePageDataLoggers = require("../data-loggers/home.page.data.loggers.js");
const LoginRegisterDashPageTextElementAssert = require("../test-text-element-asserts/login.register.dash.page.text.element.assert.js");

const BaseTest = require("./base.test");
const {captureScreenshot} = require("./screehot.class.js");

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

}
module.exports = TestMethods;