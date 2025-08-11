"use strict"

const Logger = require("../../pages/utilities/logger.js")

const BaseTest = require("../utilities/base.test");
const {GeneralPage} = require("../../pages/general.page");

class GeneralPageDataLoggers extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //general page product data logger method (specials)
    async logLowerFooterSpecialsProductData(){
        const generalPage = new GeneralPage()
        console.log("Displayed lower footer product data: " + "\n");
        //log lower footer special product name(s)
        const generalPageLowerFooterSpecialProductNames = await generalPage.getSpecialsSectionProductName();
        Logger.info("General page lower footer special product name(s): " + generalPageLowerFooterSpecialProductNames);
        //log lower footer special product unit price(s)
        const generalPageLowerFooterSpecialProductUnitPrices = await generalPage.getSpecialsSectionProductUnitPrice();
        Logger.info("General page lower footer special product unit price(s): " + generalPageLowerFooterSpecialProductUnitPrices);
        //log lower footer special product old price(s)
        const generalPageLowerFooterSpecialProductOldPrices = await generalPage.getSpecialsSectionProductOldPrice();
        Logger.info("General page lower footer special product old price(s): " + generalPageLowerFooterSpecialProductOldPrices);
        //log lower footer special product discount(s)
        const generalPageLowerFooterSpecialProductDiscounts = await generalPage.getSpecialsSectionProductDiscount();
        Logger.info("General page lower footer special product discount(s): " + generalPageLowerFooterSpecialProductDiscounts);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //general page recent articles data logger method
    async logLowerFooterRecentArticlesData(){
        const generalPage = new GeneralPage()
        //log lower footer recent article title link text(s)
        const generalPageLowerFooterRecentArticleTitles = await generalPage.getFooterRecentArticlesSectionTitleLinkText();
        Logger.info("General page lower footer recent article title link text(s): " + generalPageLowerFooterRecentArticleTitles);
        //log lower footer recent article timespan(s)
        const generalPageLowerFooterRecentArticleTimespans = await generalPage.getFooterRecentArticlesTimespan();
        Logger.info("General page lower footer recent article timespan(s): " + generalPageLowerFooterRecentArticleTimespans);
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = GeneralPageDataLoggers;