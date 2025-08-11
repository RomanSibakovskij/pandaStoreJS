"use strict"

const Logger = require("../../pages/utilities/logger.js")

const BaseTest = require("../utilities/base.test.js");
const {HomePage} = require("../../pages/home.page.js");

class HomePageDataLoggers extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page featured product data logger method
    async logHomePageFeaturedProductData(){
        const homePage = new HomePage(this.driver);
        console.log("Displayed home page featured product data: " + "\n");
        //log home page featured product name(s)
        const homePageFeaturedProductNames = await homePage.getHomePageFeaturedProductName();
        Logger.info("Home page featured product name(s): " + homePageFeaturedProductNames);
        //log home page featured product unit price(s)
        const homePageFeaturedProductUnitPrices = await homePage.getHomePageFeaturedProductUnitPrice();
        Logger.info("Home page featured product unit price(s): " + homePageFeaturedProductUnitPrices);
        //log home page featured product discounted price(s)
        const homePageFeaturedProductDiscountedPrices = await homePage.getHomePageFeaturedProductDiscountedPrice();
        Logger.info("Home page featured product discounted price(s): " + homePageFeaturedProductDiscountedPrices);
    }

    //home page new products data logger method
    async logHomePageNewProductData(){
        const homePage = new HomePage(this.driver);
        console.log("Displayed home page new product data: " + "\n");
        //log home page new product name(s)
        const homePageNewProductNames = await homePage.getHomePageNewProductName();
        Logger.info("Home page new product name(s): " + homePageNewProductNames);
        //log home page new product unit price(s)
        const homePageNewProductUnitPrices = await homePage.getHomePageNewProductUnitPrice();
        Logger.info("Home page new product unit price(s): " + homePageNewProductUnitPrices);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page featured articles data logger method
    async logHomePageFeaturedArticlesData(){
        const homePage = new HomePage(this.driver);
        console.log("Displayed home page featured article data: " + "\n");
        //log home page featured article title(s)
        const homePageFeaturedArticleTitles = await homePage.getHomePageFeaturedArticleTitle();
        Logger.info("Home page featured article title(s): " + homePageFeaturedArticleTitles);
        //log home page featured article author name(s)
        const homePageFeaturedArticleAuthorNames = await homePage.getHomePageFeaturedArticleAuthorName();
        Logger.info("Home page featured article author name(s): " + homePageFeaturedArticleAuthorNames);
        //log home page featured article timestamp(s)
        const homePageFeaturedArticleTimestamps = await homePage.getHomePageFeaturedArticleTimestamp();
        Logger.info("Home page featured article timestamp(s): " + homePageFeaturedArticleTimestamps);
        //log home page featured article text(s)
        const homePageFeaturedArticleTexts = await homePage.getHomePageFeaturedArticleText();
        Logger.info("Home page featured article text(s): " + homePageFeaturedArticleTexts);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = HomePageDataLoggers;