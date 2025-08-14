"use strict"

const {By, until} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger.js");

class HomePage extends BasePage{

    constructor(driver) {
        super(driver);

        //home page web elements
        //carousel one section
        this._homePageCarouselOneImgElements = By.xpath("//div[@id='st_swiper_1']//img[@class='st_swiper_image swiper-lazy swiper-lazy-loaded']");
        this._homePageCarouselOneThisThemeButton = By.xpath("//div[@class='adveditor_content flex_center flex_middle text-2']//div[@class='style_buttons']/span[@class='btn style_button style_button_0 btn-white']");
        this._homePageCarouselOnePaginationButtonElements = By.xpath("//div[@class='swiper-pagination swiper-pagination-st-round swiper-pagination-clickable swiper-pagination-bullets']/span");
        //welcome section
        this._homePagePrestaThemeTitle = By.xpath("//div[@class='easy_brother_block text-2 text-md-0']/p");
        this._homePageWelcomeSectionTitle = By.xpath("//div[@class='easy_brother_block text-2 text-md-0']/div[1]");
        this._homePageWelcomeSectionSubtitle = By.xpath("//div[@class='easy_brother_block text-2 text-md-0']/div[3]");
        //list elements
        this._homePageWelcomeSectionSocialIconButtonElements = By.xpath("//ul[@class='clearfix stsocial_1_1 stsocial_list']/li/a");
        //featured products
        this._homePageFeaturedProductsSectionTitleLink = By.xpath("//div[@id='stfeaturedslider_container_7c29aa9f48']//a[@class='title_block_inner']");
        //list elements
        this._homePageFeaturedProductImgElements = By.xpath("//div[@id='stfeaturedslider_container_7c29aa9f48']//div[@class='swiper-wrapper']//picture[@class='front_image_pic']/img");
        this._homePageFeaturedProductNameLinkElements = By.xpath("//div[@id='stfeaturedslider_container_7c29aa9f48']//div[@class='swiper-wrapper']//h3/a");
        this._homePageFeaturedProductUnitPriceElements = By.xpath("//div[@id='stfeaturedslider_container_7c29aa9f48']//div[@class='swiper-wrapper']//span[@class='price ']");
        this._homePageFeaturedProductDiscountedPriceElements = By.xpath("//div[@id='stfeaturedslider_container_7c29aa9f48']//div[@class='swiper-wrapper']//span[@class='price  st_discounted_price ']");
        this._homePageFeaturedProductAddToCartButtonElements = By.xpath("//div[@id='stfeaturedslider_container_7c29aa9f48']//div[@class='swiper-wrapper']//a[@title='Add to cart']"); //appear only after hovering over the product card
        //carousel two section
        this._homePageCarouselTwoBackgroundImage= By.xpath("//div[@id='easycontent_container_2']");
        this._homePageCarouselTwoTestimonialsTitle = By.xpath("//div[@class='title_block flex_container title_align_1 title_style_0']//div[@class='title_block_inner']");
        this._homePageCarouselTwoPaginationButtonElements = By.xpath("//div[@id='easycontent_container_2']//span[@role='button']");
        //featured categories
        this._homePageFeaturedCategoriesSectionTitle = By.xpath("//div[@id='featured_categories_container_d40e96ddab']//div[@class='title_block_inner']");
        this._homePageFeaturedCategoriesPrevButton = By.xpath("//div[@id='featured_categories_container_d40e96ddab']//div[@class='swiper-button-tr ']/div[1]");
        this._homePageFeaturedCategoriesNextButton = By.xpath("//div[@id='featured_categories_container_d40e96ddab']//div[@class='swiper-button-tr ']/div[2]");
        //list elements
        this._homePageFeaturedCategoriesImgElements = By.xpath("//div[@id='featured_categories_container_d40e96ddab']//div[@class='swiper-wrapper']//picture");
        this._homePageFeaturedCategoriesNameLinkElements = By.xpath("//div[@id='featured_categories_container_d40e96ddab']//h3[@class='s_title_block']/a");
        //aside section
        //panda theme
        this._homePagePandaThemeResponsiveSectionTitle = By.xpath("//div[@id='easycontent_3']//div[@id='steasy_element_12']//div[@class='fs_lg color_444 easy_header']");
        this._homePagePandaThemeResponsiveSectionSubtext = By.xpath("//div[@id='easycontent_3']//div[@id='steasy_element_12']//div[@class='color_666 easy_text pad_b1']");
        this._homePagePandaThemeCustomSectionTitle = By.xpath("//div[@id='easycontent_3']//div[@id='steasy_element_14']//div[@class='fs_lg color_444 easy_header']");
        this._homePagePandaThemeCustomSectionSubtext = By.xpath("//div[@id='easycontent_3']//div[@id='steasy_element_14']//div[@class='color_666 easy_text pad_b1']");
        this._homePagePandaThemeColorsSectionTitle = By.xpath("//div[@id='easycontent_3']//div[@id='steasy_element_15']//div[@class='fs_lg color_444 easy_header']");
        this._homePagePandaThemeColorsSectionSubtext = By.xpath("//div[@id='easycontent_3']//div[@id='steasy_element_15']//div[@class='color_666 easy_text pad_b1']");
        //new products section
        this._homePageNewProductsSectionTitleLink = By.xpath("//div[@class='col-lg-9  display_as_simple  products_slider']//a[@class='title_block_inner']");
        //list elements
        this._homePageNewProductImgElements = By.xpath("//ul[@class='pro_itemlist row']/li//img");
        this._homePageNewProductNameLinkElements = By.xpath("//div[@id='sthomenew_container_d40e96ddab']//h3/a");
        this._homePageNewProductUnitPriceElements = By.xpath("//ul[@class='pro_itemlist row']/li//span[@class='price']");
        this._homePageNewProductAddToCartButtonElements = By.xpath("//ul[@class='pro_itemlist row']/li//a[@title='Add to cart']");
        this._homePageNewProductViewMoreButtonElements = By.xpath("//ul[@class='pro_itemlist row']/li//a[@title='View more']");
        //featured articles section
        this._homePageFeaturedArticlesSectionTitleLink = By.xpath("//div[@id='category_blogs_container_59']//a[@title='Featured articles']");
        this._homePageFeaturedArticlesPrevButton = By.xpath("//div[@id='category_blogs_container_59']//div[@class='swiper-button-tr ']/div[1]");
        this._homePageFeaturedArticlesNextButton = By.xpath("//div[@id='category_blogs_container_59']//div[@class='swiper-button-tr ']/div[2]");
        //list elements
        this._homePageFeaturedArticlesImgElements = By.xpath("//div[@id='category_blogs_container_59']//div[@class='swiper-wrapper']//div[@class='blog_image']//img");
        this._homePageFeaturedArticlesTitleLinkElements = By.xpath("//div[@id='category_blogs_container_59']//p[@class='s_title_block ']/a");
        this._homePageFeaturedArticlesAuthorNameElements = By.xpath("//div[@id='category_blogs_container_59']//span[@class='link_color']");
        this._homePageFeaturedArticlesTimestampElements = By.xpath("//div[@id='category_blogs_container_59']//span[@class='date-add']");
        this._homePageFeaturedArticlesLoveLinkElements = By.xpath("//div[@id='category_blogs_container_59']//a[@title='Love']");
        this._homePageFeaturedArticlesTextElements = By.xpath("//div[@id='category_blogs_container_59']//div[@class='blok_blog_short_content fs_md pad_b6']");
        this._homePageFeaturedArticlesReadMoreLinkElements = By.xpath("//div[@id='category_blogs_container_59']//a[@title='Read more']");
        //lower main section
        this._homePageShopNewArrivalsImage = By.xpath("//div[@id='banner_box_2']//div[@class='st_banner_image']");
        this._homePageShopNewArrivalsImageTitle = By.xpath("//div[@id='banner_box_2']//div[@class='style_header style_header_0 text-uppercase']");
        this._homePageShopNewArrivalsImageSubtitle = By.xpath("//div[@id='banner_box_2']//div[@class='style_header style_header_1 mb-1']");
        this._homePageShopNewArrivalsShopNowButton = By.xpath("//div[@id='banner_box_2']//span[@class='btn style_button style_button_0 adveditor_curr btn-white']");
        this._homePageMaternityEssentialsImage = By.xpath("//div[@id='banner_box_4']//div[@class='st_banner_image']");
        this._homePageMaternityEssentialsImageTitle = By.xpath("//div[@id='banner_box_4']//div[@class='style_header style_header_0 text-uppercase']");
        this._homePageMaternityEssentialsImageSubtitle = By.xpath("//div[@id='banner_box_4']//div[@class='style_header style_header_1 mb-1']");
        this._homePageCheckOutNewBrandsImage = By.xpath("//div[@id='banner_box_6']//div[@class='st_banner_image']");
        this._homePageCheckOutNewBrandsImageTitle = By.xpath("//div[@id='banner_box_6']//div[@class='style_header style_header_0 text-uppercase']");
        this._homePageCheckOutNewBrandsImageSubtitle = By.xpath("//div[@id='banner_box_6']//div[@class='style_header style_header_1 mb-1']");
        this._homePageChangingSeasonsImage = By.xpath("//div[@id='banner_box_7']//div[@class='st_banner_image']");
        this._homePageChangingSeasonsImageTitle = By.xpath("//div[@id='banner_box_7']//div[@class='style_header style_header_0 text-uppercase']");
        this._homePageChangingSeasonsImageSubtitle = By.xpath("//div[@id='banner_box_7']//div[@class='style_header style_header_1 mb-1']");
        //product brands section
        this._homePageProductBrandsTitleLink = By.xpath("//section[@id='brands_slider_d40e96ddab']//a[@class='title_block_inner']")
        //list elements
        this._homePageProductBrandsIconLinkElements = By.xpath("//section[@id='brands_slider_d40e96ddab']//div[@class='pro_outer_box']/a");
    }

    //hover over set featured product link method
    async hoverOverSetFeaturedProductLink(index){
        const featuredProductLink = await this.driver.findElements(this._homePageFeaturedProductNameLinkElements);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: featuredProductLink[index] }).perform();
    }

    //click set featured product "Add to Cart" button method
    async clickSetFeaturedProductAddToCartButton(index){
        const featuredProductAddToCartButton = await this.driver.findElements(this._homePageFeaturedProductAddToCartButtonElements);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: featuredProductAddToCartButton[index] }).click().perform();
    }

    //home page product data getters
    //featured products section
    async getHomePageFeaturedProductName() {
        const elements = await this.driver.findElements(this._homePageFeaturedProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page featured product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageFeaturedProductUnitPrice() {
        const elements = await this.driver.findElements(this._homePageFeaturedProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page featured product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageFeaturedProductDiscountedPrice() {
        const elements = await this.driver.findElements(this._homePageFeaturedProductDiscountedPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page featured product discount price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //featured categories section
    async getHomePageFeaturedCategoriesName() {
        const elements = await this.driver.findElements(this._homePageFeaturedCategoriesNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page featured category name(s):', error.message);
                    return '';
                }
            })
        );
    }

    //new products section
    async getHomePageNewProductName() {
        const elements = await this.driver.findElements(this._homePageNewProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page new product name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageNewProductUnitPrice() {
        const elements = await this.driver.findElements(this._homePageNewProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page new product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //featured articles section (the loggers log only first link elements, not all of them, innerText of each link has the actual text)
    async getHomePageFeaturedArticleTitle() {
        const elements = await this.driver.findElements(this._homePageFeaturedArticlesTitleLinkElements);

        return await Promise.all(
            elements.map(async (element, index) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn(`Failed to get home page featured articles title(s) at index ${index}: `, error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageFeaturedArticleAuthorName() {
        const elements = await this.driver.findElements(this._homePageFeaturedArticlesAuthorNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page featured articles author name(s):', error.message);
                    return '';
                }
            })
        );
    }

    async getHomePageFeaturedArticleTimestamp() {
        const elements = await this.driver.findElements(this._homePageFeaturedArticlesTimestampElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page featured articles timestamp(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getHomePageFeaturedArticleText() {
        const elements = await this.driver.findElements(this._homePageFeaturedArticlesTextElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get home page featured articles text(s):', error.message);
                    return '';
                }
            })
        );
    }

    //home page text element getters
    //welcome section
    async getHomePagePrestaThemeTitle(){
        const prestaThemeTitle = await this.driver.findElement(this._homePagePrestaThemeTitle);
        return await prestaThemeTitle.getText();
    }
    async getHomePageWelcomeSectionTitle(){
        const welcomeSectionTitle = await this.driver.findElement(this._homePageWelcomeSectionTitle);
        return await welcomeSectionTitle.getText();
    }
    async getHomePageWelcomeSectionSubtitle(){
        const welcomeSectionSubtitle = await this.driver.findElement(this._homePageWelcomeSectionSubtitle);
        return await welcomeSectionSubtitle.getText();
    }
    //featured products section
    async getHomePageFeaturedProductsSectionTitle(){
        const featuredProductsSectionTitle = await this.driver.findElement(this._homePageFeaturedProductsSectionTitleLink);
        return await featuredProductsSectionTitle.getText();
    }
    //carousel two section
    async getHomePageCarouselTwoTestimonialsTitle(){
        const carouselTwoTestimonialsTitle = await this.driver.findElement(this._homePageCarouselTwoTestimonialsTitle);
        return await carouselTwoTestimonialsTitle.getText();
    }
    //featured categories section
    async getHomePageFeaturedCategoriesSectionTitle(){
        const featuredCategoriesSectionTitle = await this.driver.findElement(this._homePageFeaturedCategoriesSectionTitle);
        return await featuredCategoriesSectionTitle.getText();
    }
    //aside section
    //panda theme
    async getHomePagePandaThemeResponsiveSectionTitle(){
        const pandaThemeResponsiveSectionTitle = await this.driver.findElement(this._homePagePandaThemeResponsiveSectionTitle);
        return await pandaThemeResponsiveSectionTitle.getText();
    }
    async getHomePagePandaThemeResponsiveSectionSubtext(){
        const pandaThemeResponsiveSectionSubtext = await this.driver.findElement(this._homePagePandaThemeResponsiveSectionSubtext);
        return await pandaThemeResponsiveSectionSubtext.getText();
    }
    async getHomePagePandaThemeCustomSectionTitle(){
        const pandaThemeCustomSectionTitle = await this.driver.findElement(this._homePagePandaThemeCustomSectionTitle);
        return await pandaThemeCustomSectionTitle.getText();
    }
    async getHomePagePandaThemeCustomSectionSubtext(){
        const pandaThemeCustomSectionSubtext = await this.driver.findElement(this._homePagePandaThemeCustomSectionSubtext);
        return await pandaThemeCustomSectionSubtext.getText();
    }
    async getHomePagePandaThemeColorsSectionTitle(){
        const pandaThemeColorsSectionTitle = await this.driver.findElement(this._homePagePandaThemeColorsSectionTitle);
        return await pandaThemeColorsSectionTitle.getText();
    }
    async getHomePagePandaThemeColorsSectionSubtext(){
        const pandaThemeColorsSectionSubtext = await this.driver.findElement(this._homePagePandaThemeColorsSectionSubtext);
        return await pandaThemeColorsSectionSubtext.getText();
    }
    //new products section
    async getHomePageNewProductsSectionTitleLinkText(){
        const newProductsSectionTitleLinkText = await this.driver.findElement(this._homePageNewProductsSectionTitleLink);
        return await newProductsSectionTitleLinkText.getText();
    }
    //featured articles section
    async getHomePageFeaturedArticlesSectionTitleLinkText(){
        const featuredArticlesSectionTitleLinkText = await this.driver.findElement(this._homePageFeaturedArticlesSectionTitleLink);
        return await featuredArticlesSectionTitleLinkText.getText();
    }
    //lower main section
    async getHomePageShopNewArrivalsImageTitle(){
        const shopNewArrivalsImageTitle = await this.driver.findElement(this._homePageShopNewArrivalsImageTitle);
        return await shopNewArrivalsImageTitle.getText();
    }
    async getHomePageShopNewArrivalsImageSubtitle(){
        const shopNewArrivalsImageSubtitle = await this.driver.findElement(this._homePageShopNewArrivalsImageSubtitle);
        return await shopNewArrivalsImageSubtitle.getText();
    }
    async getHomePageMaternityEssentialsImageTitle(){
        const maternityEssentialsImageTitle = await this.driver.findElement(this._homePageMaternityEssentialsImageTitle);
        return await maternityEssentialsImageTitle.getText();
    }
    async getHomePageMaternityEssentialsImageSubtitle(){
        const maternityEssentialsImageSubtitle = await this.driver.findElement(this._homePageMaternityEssentialsImageSubtitle);
        return await maternityEssentialsImageSubtitle.getText();
    }
    async getHomePageCheckOutNewBrandsImageTitle(){
        const checkOutNewBrandsImageTitle = await this.driver.findElement(this._homePageCheckOutNewBrandsImageTitle);
        return await checkOutNewBrandsImageTitle.getText();
    }
    async getHomePageCheckOutNewBrandsImageSubtitle(){
        const checkOutNewBrandsImageSubtitle = await this.driver.findElement(this._homePageCheckOutNewBrandsImageSubtitle);
        return await checkOutNewBrandsImageSubtitle.getText();
    }
    async getHomePageChangingSeasonsImageTitle(){
        const changingSeasonsImageTitle = await this.driver.findElement(this._homePageChangingSeasonsImageTitle);
        return await changingSeasonsImageTitle.getText();
    }
    async getHomePageChangingSeasonsImageSubtitle(){
        const changingSeasonsImageSubtitle = await this.driver.findElement(this._homePageChangingSeasonsImageSubtitle);
        return await changingSeasonsImageSubtitle.getText();
    }
    //product brands section
    async getHomePageProductBrandsTitleText(){
        const productBrandsTitleText = await this.driver.findElement(this._homePageProductBrandsTitleLink);
        return await productBrandsTitleText.getText();
    }

    //home page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isHomePageWebElementDisplayed(){
        const elementsToCheck = [
            //this._homePageCarouselOneImgElements,
            this._homePageCarouselOneThisThemeButton,
            this._homePageCarouselOnePaginationButtonElements,
            this._homePagePrestaThemeTitle,
            this._homePageWelcomeSectionTitle,
            this._homePageWelcomeSectionSubtitle,
            this._homePageWelcomeSectionSocialIconButtonElements,
            this._homePageFeaturedProductsSectionTitleLink,
            this._homePageFeaturedProductImgElements,
            this._homePageFeaturedProductNameLinkElements,
            this._homePageFeaturedProductNameLinkElements,
            this._homePageFeaturedProductUnitPriceElements,
            this._homePageFeaturedProductDiscountedPriceElements,
            this._homePageCarouselTwoBackgroundImage,
            this._homePageCarouselTwoTestimonialsTitle,
            this._homePageCarouselTwoPaginationButtonElements,
            this._homePageFeaturedCategoriesSectionTitle,
            this._homePageFeaturedCategoriesPrevButton,
            this._homePageFeaturedCategoriesNextButton,
            this._homePageFeaturedCategoriesImgElements,
            this._homePageFeaturedCategoriesNameLinkElements,
            this._homePagePandaThemeResponsiveSectionTitle,
            this._homePagePandaThemeResponsiveSectionSubtext,
            this._homePagePandaThemeCustomSectionTitle,
            this._homePagePandaThemeCustomSectionSubtext,
            this._homePagePandaThemeColorsSectionTitle,
            this._homePagePandaThemeColorsSectionSubtext,
            this._homePageNewProductsSectionTitleLink,
            this._homePageNewProductImgElements,
            this._homePageNewProductNameLinkElements,
            this._homePageNewProductUnitPriceElements,
            //this._homePageNewProductAddToCartButtonElements,
            //this._homePageNewProductViewMoreButtonElements,
            this._homePageFeaturedArticlesSectionTitleLink,
            this._homePageFeaturedArticlesPrevButton,
            this._homePageFeaturedArticlesNextButton,
            this._homePageFeaturedArticlesImgElements,
            this._homePageFeaturedArticlesTitleLinkElements,
            this._homePageFeaturedArticlesAuthorNameElements,
            this._homePageFeaturedArticlesTimestampElements,
            this._homePageFeaturedArticlesLoveLinkElements,
            this._homePageFeaturedArticlesTextElements,
            this._homePageFeaturedArticlesReadMoreLinkElements,
            this._homePageShopNewArrivalsImage,
            this._homePageShopNewArrivalsImageTitle,
            this._homePageShopNewArrivalsImageSubtitle,
            this._homePageShopNewArrivalsShopNowButton,
            this._homePageMaternityEssentialsImage,
            this._homePageMaternityEssentialsImageTitle,
            this._homePageMaternityEssentialsImageSubtitle,
            this._homePageCheckOutNewBrandsImage,
            this._homePageCheckOutNewBrandsImageTitle,
            this._homePageCheckOutNewBrandsImageSubtitle,
            this._homePageChangingSeasonsImage,
            this._homePageChangingSeasonsImageTitle,
            this._homePageChangingSeasonsImageSubtitle,
            this._homePageProductBrandsTitleLink,
            this._homePageProductBrandsIconLinkElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }


}
module.exports = { HomePage };