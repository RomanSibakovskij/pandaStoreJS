const assert = require("node:assert");
const BaseTest = require("../utilities/base.test");
const {HomePage} = require("../../pages/home.page");

class HomePageTextElementAssert extends BaseTest {

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page text element assert test method
    async isHomePageTextElementAsExpected(){
        const homePage = new HomePage(this.driver);
        //welcome section
        //assert the home page presta theme title is as expected
        const homePagePrestaThemeTitle = await homePage.getHomePagePrestaThemeTitle();
        assert.strictEqual(homePagePrestaThemeTitle, "Premium Prestashop Theme", "The home page presta theme title doesn't match expectations.");
        //assert the home page welcome section title is as expected
        const homePageWelcomeSectionTitle = await homePage.getHomePageWelcomeSectionTitle();
        assert.strictEqual(homePageWelcomeSectionTitle, "WELCOME TO PANDA", "The home page welcome section title doesn't match expectations.");
        //assert the home page welcome section subtitle is as expected
        const homePageWelcomeSectionSubtitle = await homePage.getHomePageWelcomeSectionSubtitle();
        assert.strictEqual(homePageWelcomeSectionSubtitle, "Panda theme is a modern, clean and professional Prestashop theme, it comes with a lot of useful features. Panda theme is fully responsive, it looks stunning on all types of screens and devices.", "The home page welcome section subtitle doesn't match expectations.");
        //featured products section
        //assert the home page featured product section title is as expected
        const homePageFeaturedProductsSectionTitle = await homePage.getHomePageFeaturedProductsSectionTitle();
        assert.strictEqual(homePageFeaturedProductsSectionTitle, "FEATURED PRODUCTS", "The home page featured product section title doesn't match expectations.");
        //carousel two section
        //assert the home page carousel two section title is as expected
        const homePageCarouselTwoTestimonialsTitle = await homePage.getHomePageCarouselTwoTestimonialsTitle();
        assert.strictEqual(homePageCarouselTwoTestimonialsTitle, "TESTIMONIALS", "The home page carousel two section title doesn't match expectations.");
        //featured categories section
        //assert the home page featured categories section title is as expected
        const homePageFeaturedCategoriesSectionTitle = await homePage.getHomePageFeaturedCategoriesSectionTitle();
        assert.strictEqual(homePageFeaturedCategoriesSectionTitle, "FEATURED CATEGORIES", "The home page featured categories section title doesn't match expectations.");
        //assert home page each featured category link text(s) match expectations (as a list) (Selenium can't seem to find these elements with VALID selectors)
        //const homePageFeaturedCategoryLinkTextElem = await homePage.getHomePageFeaturedCategoriesName();
        //const expectedFeaturedCategoryLinkTextElem = ["Women's Clothing", "Tops", "Outerwears", "Botoms", "Lingerie"];
        //assert.deepStrictEqual(homePageFeaturedCategoryLinkTextElem, expectedFeaturedCategoryLinkTextElem, "The home page featured category link text(s) don't match expectations.");
        //aside section
        //panda theme
        //assert the home page panda theme responsive section title is as expected
        const pandaThemeResponsiveSectionTitle = await homePage.getHomePagePandaThemeResponsiveSectionTitle();
        assert.strictEqual(pandaThemeResponsiveSectionTitle, "FULLY RESPONSIVE", "The home page panda theme responsive section title doesn't match expectations.");
        //assert the home page panda theme responsive section subtext is as expected
        const pandaThemeResponsiveSectionSubtext = await homePage.getHomePagePandaThemeResponsiveSectionSubtext();
        assert.strictEqual(pandaThemeResponsiveSectionSubtext, "Panda theme is a premium pretashop theme with flexible theme options, it looks stunning on all types of screens and devices.", "The home page panda theme responsive section subtext doesn't match expectations.");
        //assert the home page panda theme custom section title is as expected
        const pandaThemeCustomSectionTitle = await homePage.getHomePagePandaThemeCustomSectionTitle();
        assert.strictEqual(pandaThemeCustomSectionTitle, "CUSTOMIZABLE", "The home page panda theme custom section title doesn't match expectations.");
        //assert the home page panda theme custom section subtext is as expected
        const pandaThemeCustomSectionSubtext = await homePage.getHomePagePandaThemeCustomSectionSubtext();
        assert.strictEqual(pandaThemeCustomSectionSubtext, "Panda theme is a premium pretashop theme with flexible theme options, it looks stunning on all types of screens and devices.", "The home page panda theme custom section subtext doesn't match expectations.");
        //assert the home page panda theme colors section title is as expected
        const pandaThemeColorsSectionTitle = await homePage.getHomePagePandaThemeColorsSectionTitle();
        assert.strictEqual(pandaThemeColorsSectionTitle, "UNLIMITED COLORS", "The home page panda theme colors section title doesn't match expectations.");
        //assert the home page panda theme colors section subtext is as expected
        const pandaThemeColorsSectionSubtext = await homePage.getHomePagePandaThemeColorsSectionSubtext();
        assert.strictEqual(pandaThemeColorsSectionSubtext, "Panda theme is a premium pretashop theme with flexible theme options, it looks stunning on all types of screens and devices.", "The home page panda theme colors section subtext doesn't match expectations.");
        //new products section
        //assert the home page new products section title is as expected
        const newProductsSectionTitleLink = await homePage.getHomePageNewProductsSectionTitleLinkText();
        assert.strictEqual(newProductsSectionTitleLink, "NEW PRODUCTS", "The home page new products section title doesn't match expectations.");
        //featured articles section
        //assert the home page featured articles section title is as expected
        const featuredArticlesSectionTitleLink = await homePage.getHomePageFeaturedArticlesSectionTitleLinkText();
        assert.strictEqual(featuredArticlesSectionTitleLink, "FEATURED ARTICLES", "The home page featured articles section title doesn't match expectations.");
        //lower main
        //assert the home page shop new arrivals image title is as expected
        const shopNewArrivalsImageTitle = await homePage.getHomePageShopNewArrivalsImageTitle();
        assert.strictEqual(shopNewArrivalsImageTitle, "SHOP NEW ARRIVALS", "The home page shop new arrivals image title doesn't match expectations.");
        //assert the home page shop new arrivals image subtitle is as expected
        const shopNewArrivalsImageSubtitle = await homePage.getHomePageShopNewArrivalsImageSubtitle();
        assert.strictEqual(shopNewArrivalsImageSubtitle, "Over 200 great styles to see", "The home page shop new arrivals image subtitle doesn't match expectations.");
        //assert the home page maternity essentials image title is as expected
        const shopMaternityEssentialsImageTitle = await homePage.getHomePageMaternityEssentialsImageTitle();
        assert.strictEqual(shopMaternityEssentialsImageTitle, "MATERNITY ESSENTIALS", "The home page maternity essentials image title doesn't match expectations.");
        //assert the home page maternity essentials image subtitle is as expected
        const maternityEssentialsImageSubtitle = await homePage.getHomePageMaternityEssentialsImageSubtitle();
        assert.strictEqual(maternityEssentialsImageSubtitle, "Shop the collection", "The home page maternity essentials image subtitle doesn't match expectations.");
        //assert the home page check out new brands image title is as expected
        const checkOutNewBrandsImageTitle = await homePage.getHomePageCheckOutNewBrandsImageTitle();
        assert.strictEqual(checkOutNewBrandsImageTitle, "CHECK OUT OUR", "The home page check out new brands image title doesn't match expectations.");
        //assert the home page check out new brands image subtitle is as expected
        const checkOutNewBrandsImageSubtitle = await homePage.getHomePageCheckOutNewBrandsImageSubtitle();
        assert.strictEqual(checkOutNewBrandsImageSubtitle, "New brands", "The home page check out new brands image subtitle doesn't match expectations.");
        //assert the home page changing seasons image title is as expected
        const changingSeasonsImageTitle = await homePage.getHomePageChangingSeasonsImageTitle();
        assert.strictEqual(changingSeasonsImageTitle, "CHANGING SEASONS", "The home page changing seasons image title doesn't match expectations.");
        //assert the home page changing seasons image subtitle is as expected
        const changingSeasonsImageSubtitle = await homePage.getHomePageChangingSeasonsImageSubtitle();
        assert.strictEqual(changingSeasonsImageSubtitle, "New colloection out now", "The home page changing seasons image subtitle doesn't match expectations.");
        //product brands section
        //assert the home page product brands section title link text is as expected
        const productBrandsTitleText = await homePage.getHomePageProductBrandsTitleText();
        assert.strictEqual(productBrandsTitleText, "PRODUCT BRANDS", "The home page product brands section title link text doesn't match expectations.");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = HomePageTextElementAssert;