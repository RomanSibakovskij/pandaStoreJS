"use strict"

const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const {GeneralPage} = require("../../pages/general.page");

class GeneralPageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //general page text element assert (elements that all pages share and are static)
    async isGeneralPageTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //lower header navbar
        //assert the general page lower header navbar fashion dropdown link text is as expected
        const generalPageLowerNavFashionLinkText = await generalPage.getLowerHeaderNavFashionLinkText();
        assert.strictEqual(generalPageLowerNavFashionLinkText, "FASHION", "The general page lower header navbar fashion dropdown link text doesn't match expectations.");
        //assert the general page lower header navbar elements dropdown link text is as expected
        const generalPageLowerNavElementsLinkText = await generalPage.getLowerHeaderNavElementsLinkText();
        assert.strictEqual(generalPageLowerNavElementsLinkText, "ELEMENTS", "The general page lower header navbar elements dropdown link text doesn't match expectations.");
        //assert the general page lower header navbar product dropdown link text is as expected
        const generalPageLowerNavProductLinkText = await generalPage.getLowerHeaderNavProductLinkText();
        assert.strictEqual(generalPageLowerNavProductLinkText, "PRODUCT\n" + "Cool", "The general page lower header navbar product dropdown link text doesn't match expectations.");
        //assert the general page lower header navbar blog dropdown link text is as expected
        const generalPageLowerNavBlogLinkText = await generalPage.getLowerHeaderNavBlogLinkText();
        assert.strictEqual(generalPageLowerNavBlogLinkText, "BLOG", "The general page lower header navbar blog dropdown link text doesn't match expectations.");
        //assert the general page lower header navbar stores dropdown link text is as expected
        const generalPageLowerNavStoresLinkText = await generalPage.getLowerHeaderNavStoresLinkText();
        assert.strictEqual(generalPageLowerNavStoresLinkText, "STORES\n" + "20+", "The general page lower header navbar stores dropdown link text doesn't match expectations.");
        //assert the general page lower header navbar pages dropdown link text is as expected
        const generalPageLowerNavPagesLinkText = await generalPage.getLowerHeaderNavPagesLinkText();
        assert.strictEqual(generalPageLowerNavPagesLinkText, "PAGES", "The general page lower header navbar pages dropdown link text doesn't match expectations.");
        //assert the general page lower header navbar mixed dropdown link text is as expected
        const generalPageLowerNavMixedLinkText = await generalPage.getLowerHeaderNavMixedLinkText();
        assert.strictEqual(generalPageLowerNavMixedLinkText, "MIXED", "The general page lower header navbar mixed dropdown link text doesn't match expectations.");
        //assert the general page lower header navbar men dropdown link text is as expected
        const generalPageLowerNavMenLinkText = await generalPage.getLowerHeaderNavMenLinkText();
        assert.strictEqual(generalPageLowerNavMenLinkText, "MEN", "The general page lower header navbar men dropdown link text doesn't match expectations.");
        //assert the general page lower header navbar buy theme link text is as expected
        const generalPageLowerNavBuyThemeLinkText = await generalPage.getLowerHeaderNavBuyThemeLinkText();
        assert.strictEqual(generalPageLowerNavBuyThemeLinkText, "BUY THEME", "The general page lower header navbar buy theme link text doesn't match expectations.");
        //upper footer section
        //page
        //assert the general page upper footer page title is as expected
        const generalPageUpperFooterPageTitle = await generalPage.getFooterPageTitle();
        assert.strictEqual(generalPageUpperFooterPageTitle, "PANDA THEME", "The general page upper footer page title doesn't match expectations.");
        //assert the general page upper footer subtext one is as expected
        const generalPageUpperFooterSubtextOne = await generalPage.getFooterSubtextOne();
        assert.strictEqual(generalPageUpperFooterSubtextOne, "Panda theme is a modern, clean and professional Prestashop theme, it comes with a lot of useful features.", "The general page upper footer subtext one doesn't match expectations.");
        //assert the general page upper footer subtext two is as expected
        const generalPageUpperFooterSubtextTwo = await generalPage.getFooterSubtextTwo();
        assert.strictEqual(generalPageUpperFooterSubtextTwo, "This is a custom block edited from admin panel.You can insert any content here.", "The general page upper footer subtext two doesn't match expectations.");
        //assert the general page upper footer subtext three is as expected
        const generalPageUpperFooterSubtextThree = await generalPage.getFooterSubtextThree();
        assert.strictEqual(generalPageUpperFooterSubtextThree, "Any orders placed through this store will not be honored or fulfilled.", "The general page upper footer subtext three doesn't match expectations.");
        //assert the general page upper footer buy this theme link text is as expected
        const generalPageUpperFooterBuyThemeLink = await generalPage.getFooterBuyThisThemeLinkText();
        assert.strictEqual(generalPageUpperFooterBuyThemeLink, "BUY THIS THEME", "The general page upper footer buy this theme link text doesn't match expectations.");
        //specials(products) section
        //assert the general page upper footer specials section title link text is as expected
        const generalPageUpperFooterSpecialsTitleLink = await generalPage.getFooterSpecialsSectionTitleLinkText();
        assert.strictEqual(generalPageUpperFooterSpecialsTitleLink, "SPECIALS", "The general page upper footer specials section title link text doesn't match expectations.");
        //recent articles section
        //assert the general page upper footer recent articles section title is as expected
        const generalPageUpperFooterRecentArticlesTitle = await generalPage.getFooterRecentArticlesSectionTitle();
        assert.strictEqual(generalPageUpperFooterRecentArticlesTitle, "RECENT ARTICLES", "The general page upper footer recent articles section title doesn't match expectations.");
        //newsletter section
        //assert the general page upper footer newsletter section title is as expected
        const generalPageUpperFooterNewsletterSectionTitle = await generalPage.getFooterNewsletterSectionTitle();
        assert.strictEqual(generalPageUpperFooterNewsletterSectionTitle, "NEWSLETTER", "The general page upper footer newsletter section title doesn't match expectations.");
        //assert the general page upper footer newsletter section subtitle is as expected
        const generalPageUpperFooterNewsletterSectionSubtitle = await generalPage.getFooterNewsletterSectionSubtitle();
        assert.strictEqual(generalPageUpperFooterNewsletterSectionSubtitle, "Sign up today for free and be the first to get notified on our new updates, discounts and special Offers.", "The general page upper footer newsletter section subtitle doesn't match expectations.");
        //lower footer section
        //support
        //assert the general page lower footer support section title is as expected
        const generalPageLowerFooterSupportSectionTitle = await generalPage.getFooterSupportSectionTitle();
        assert.strictEqual(generalPageLowerFooterSupportSectionTitle, "SUPPORT", "The general page lower footer support section title doesn't match expectations.");
        //assert general page lower footer each support section link text(s) match expectations (as a list)
        const footerSupportSectionLinkTextElem = await generalPage.getFooterSupportSectionLinkText();
        const expectedSupportSectionLinkTextElem = ["Contact us", "Sitemap", "Our stores"];
        assert.deepStrictEqual(footerSupportSectionLinkTextElem, expectedSupportSectionLinkTextElem, "The general page lower footer support section link text(s) don't match expectations.");
        //catalog
        //assert the general page lower footer catalog section title is as expected
        const generalPageLowerFooterCatalogSectionTitle = await generalPage.getFooterCatalogSectionTitle();
        assert.strictEqual(generalPageLowerFooterCatalogSectionTitle, "CATALOG", "The general page lower footer catalog section title doesn't match expectations.");
        //assert general page lower footer each catalog section link text(s) match expectations (as a list)
        const footerCatalogSectionLinkTextElem = await generalPage.getFooterCatalogSectionLinkText();
        const expectedCatalogSectionLinkTextElem = ["Specials", "New products", "Top sellers"];
        assert.deepStrictEqual(footerCatalogSectionLinkTextElem, expectedCatalogSectionLinkTextElem, "The general page lower footer catalog section link text(s) don't match expectations.");
        //my account
        //assert the general page lower footer my account section title is as expected
        const generalPageLowerFooterMyAccountSectionTitle = await generalPage.getFooterMyAccountSectionTitle();
        assert.strictEqual(generalPageLowerFooterMyAccountSectionTitle, "MY ACCOUNT", "The general page lower footer my account section title doesn't match expectations.");
        //assert general page lower footer each my account section link text(s) match expectations (as a list)
        const footerMyAccountSectionLinkTextElem = await generalPage.getFooterMyAccountSectionLinkText();
        const expectedMyAccountSectionLinkTextElem = ["My account", "My orders", "My addresses"];
        assert.deepStrictEqual(footerMyAccountSectionLinkTextElem, expectedMyAccountSectionLinkTextElem, "The general page lower footer my account section link text(s) don't match expectations.");
        //popular tags
        //assert the general page lower footer popular tags section title is as expected
        const generalPageLowerFooterPopularTagsSectionTitle = await generalPage.getFooterPopularTagsSectionTitle();
        assert.strictEqual(generalPageLowerFooterPopularTagsSectionTitle, "POPULAR TAGS", "The general page lower footer popular tags section title doesn't match expectations.");
        //assert general page lower footer each popular tags section link text(s) match expectations (as a list)
        const footerPopularTagsSectionLinkTextElem = await generalPage.getFooterPopularTagsSectionLinkText();
        const expectedPopularTagsSectionLinkTextElem = ["Long Sleeve", "Casual", "Shirts", "Ribbed", "Sleeveless", "Short Sleeve"];
        assert.deepStrictEqual(footerPopularTagsSectionLinkTextElem, expectedPopularTagsSectionLinkTextElem, "The general page lower footer popular tags section link text(s) don't match expectations.");
        //contact us
        //assert the general page lower footer contact us section title is as expected
        const generalPageLowerFooterContactUsSectionTitle = await generalPage.getFooterContactUsSectionTitle();
        assert.strictEqual(generalPageLowerFooterContactUsSectionTitle, "CONTACT US", "The general page lower footer contact us section title doesn't match expectations.");
        //assert the general page lower footer contact us section address is as expected
        const generalPageLowerFooterContactUsAddress = await generalPage.getFooterContactUsAddress();
        assert.strictEqual(generalPageLowerFooterContactUsAddress, "PO Box 16122 Collins Street West Victoria 8007 Australia", "The general page lower footer contact us section address doesn't match expectations.");
        //assert the general page lower footer contact us section email is as expected
        const generalPageLowerFooterContactUsEmail = await generalPage.getFooterContactUsEmail();
        assert.strictEqual(generalPageLowerFooterContactUsEmail, "support@support.com", "The general page lower footer contact us section email doesn't match expectations.");
        //assert the general page lower footer contact us section phone is as expected
        const generalPageLowerFooterContactUsPhone = await generalPage.getFooterContactUsPhone();
        assert.strictEqual(generalPageLowerFooterContactUsPhone, "+61 3 1234 4567", "The general page lower footer contact us section phone doesn't match expectations.");
        //copyright
        //assert the general page lower footer copyright section text is as expected
        const generalPageLowerFooterCopyrightText = await generalPage.getFooterCopyrightText();
        assert.strictEqual(generalPageLowerFooterCopyrightText, "© 2017 Powered by Presta Shop™. All Rights Reserved", "The general page lower footer copyright section text doesn't match expectations.");
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



}
module.exports = GeneralPageTextElementAssert;