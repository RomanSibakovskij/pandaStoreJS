"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger.js");

class GeneralPage extends BasePage{

    constructor(driver) {
        super(driver);

        //general page web elements (elements that all pages share
        //cookies bar button element
        this._upperHeadGotItButton = By.xpath("//a[@title='Got it']");
        //upper header navbar
        this._upperHeadNavCurrencyDropdownMenu = By.xpath("//nav[@id='nav_left']//div[@id='currencies_block_top_mod']");
        this._upperHeadNavLanguageDropdownMenu = By.xpath("//nav[@id='nav_left']//div[@id='languages-block-top-mod']");
        this._upperHeadNavLoginLink = By.xpath("//nav[@id='nav_right']//a[@class='login top_bar_item header_icon_btn_1']");
        this._upperHeadNavAccountLink = By.xpath("//nav[@id='nav_right']//a[@class='dropdown_tri dropdown_tri_in header_item']");
        this._upperHeadNavHelpDropdownMenu = By.xpath("//nav[@id='nav_right']//div[@id='multilink_1']");
        //header elements
        this._headerHomeLogoLink = By.xpath("//div[@id='header_left']//a");
        this._headerSearchBarInputField = By.xpath("//div[@id='header_center']//input[@class='form-control search_widget_text js-child-focus']");
        this._headerSearchButton = By.xpath("//div[@id='header_center']//button");
        this._headerShopCartLink = By.xpath("//div[@id='header_right']//a");
        //lower header navbar
        this._lowerHeadNavHomePageIconLink = By.xpath("//ul[@class='st_mega_menu clearfix mu_level_0']/li[1]/a");
        this._lowerHeadNavFashionDropdownLink = By.xpath("//ul[@class='st_mega_menu clearfix mu_level_0']/li[2]/a");
        this._lowerHeadNavElementsDropdownLink = By.xpath("//ul[@class='st_mega_menu clearfix mu_level_0']/li[3]/a");
        this._lowerHeadNavProductDropdownLink = By.xpath("//ul[@class='st_mega_menu clearfix mu_level_0']/li[4]/a");
        this._lowerHeadNavBlogDropdownLink = By.xpath("//ul[@class='st_mega_menu clearfix mu_level_0']/li[5]/a");
        this._lowerHeadNavStoresDropdownLink = By.xpath("//ul[@class='st_mega_menu clearfix mu_level_0']/li[6]/a");
        this._lowerHeadNavPagesDropdownLink = By.xpath("//ul[@class='st_mega_menu clearfix mu_level_0']/li[7]/a");
        this._lowerHeadNavMixedDropdownLink = By.xpath("//ul[@class='st_mega_menu clearfix mu_level_0']/li[8]/a");
        this._lowerHeadNavMenDropdownLink = By.xpath("//ul[@class='st_mega_menu clearfix mu_level_0']/li[9]/a");
        this._lowerHeadNavBuyThemeLink = By.xpath("//ul[@class='st_mega_menu clearfix mu_level_0']/li[10]/a");
        //sidebar section
        this._sidebarCartIconButton = By.xpath("//div[@id='rightbar']/div[1]/a");
        this._sidebarWishlistIconButton = By.xpath("//div[@id='rightbar']/div[2]/a");
        this._sidebarScrollUpIconButton = By.xpath("//div[@id='rightbar']/div[3]/a");
        //upper footer elements
        //page section
        this._footerPageTitle = By.xpath("//div[@class='easy_brother_block text-1 text-md-0']/p[1]");
        this._footerSubtextOne = By.xpath("//div[@class='easy_brother_block text-1 text-md-0']/p[2]");
        this._footerSubtextTwo = By.xpath("//div[@class='easy_brother_block text-1 text-md-0']/p[3]");
        this._footerSubtextThree = By.xpath("//div[@class='easy_brother_block text-1 text-md-0']/p[4]");
        this._footerBuyThisThemeLink = By.xpath("//div[@class='easy_brother_block text-1 text-md-0']/p[5]/a");
        //specials (products) section
        this._footerSpecialsSectionTitleLink = By.xpath("//section[@id='stspecialslider_footer_8270625bcb']/div/a");
        //list elements
        this._footerSpecialProductImgElements = By.xpath("//div[@class='footer_block_content base_list_line line_free']//img");
        this._footerSpecialProductNameLinkElements = By.xpath("//div[@class='footer_block_content base_list_line line_free']//h3/a");
        this._footerSpecialProductUnitPriceElements = By.xpath("//div[@class='footer_block_content base_list_line line_free']//span[@class='price']");
        this._footerSpecialProductOldPriceElements = By.xpath("//div[@class='footer_block_content base_list_line line_free']//span[@class='regular-price']");
        this._footerSpecialProductDiscountElements = By.xpath("//div[@class='footer_block_content base_list_line line_free']//span[@class='discount discount-percentage']");
        //recent articles section
        this._footerRecentArticlesSectionTitle = By.xpath("//section[@id='blog_categories_footer_22']/div[1]");
        this._footerRecentArticlesImgElements = By.xpath("//div[@class='base_list_line line_free']//img");
        this._footerRecentArticlesTitleLinkElements = By.xpath("//div[@class='base_list_line line_free']//h3/a");
        this._footerRecentArticlesTimespanElements = By.xpath("//div[@class='base_list_line line_free']//span[@class='date-add']");
        //newsletter section
        this._footerNewsletterSectionTitle = By.xpath("//section[@id='st_news_letter_2']//div[@class='title_block_inner']");
        this._footerNewsletterSectionSubtitle = By.xpath("//section[@id='st_news_letter_2']//p[@class='m-b-1']");
        this._footerNewsletterEmailInputField = By.xpath("//section[@id='st_news_letter_2']//input[@name='email']");
        this._footerNewsletterSubscribeButton = By.xpath("//section[@id='st_news_letter_2']//button[@name='submitStNewsletter']");
        //lower footer elements
        //support section
        this._footerSupportSectionTitle = By.xpath("//section[@id='multilink_2']//div[@class='title_block_inner']");
        //list elements
        this._footerSupportSectionLinkElements = By.xpath("//section[@id='multilink_2']//ul[@class='footer_block_content bullet custom_links_list ']/li/a");
        //catalog section
        this._footerCatalogSectionTitle = By.xpath("//section[@id='multilink_3']//div[@class='title_block_inner']");
        //list elements
        this._footerCatalogSectionLinkElements = By.xpath("//section[@id='multilink_3']//ul[@class='footer_block_content bullet custom_links_list ']/li/a");
        //my account section
        this._footerMyAccountSectionTitle = By.xpath("//section[@id='multilink_4']//div[@class='title_block_inner']");
        //list elements
        this._footerMyAccountSectionLinkElements = By.xpath("//section[@id='multilink_4']//ul[@class='footer_block_content bullet custom_links_list ']/li/a");
        //popular tags section
        this._footerPopularTagsSectionTitle = By.xpath("//section[@class='block tags_block  col-lg-2-4 ']//div[@class='title_block_inner']");
        //list elements
        this._footerPopularTagsSectionLinkElements = By.xpath("//section[@class='block tags_block  col-lg-2-4 ']//a");
        //contact us section
        this._footerContactUsSectionTitle = By.xpath("//section[@id='easycontent_5']//div[@class='title_block_inner']");
        this._footerContactUsAddress = By.xpath("//section[@id='easycontent_5']//div[@id='steasy_element_16']//div[@class='easy_text  pad_b6']");
        this._footerContactUsEmail = By.xpath("//section[@id='easycontent_5']//div[@id='steasy_element_17']//div[@class='easy_text  pad_b6']");
        this._footerContactUsPhone = By.xpath("//section[@id='easycontent_5']//div[@id='steasy_element_18']//div[@class='easy_text  pad_b6']");
        //powered by section
        this._footerCopyrightText = By.xpath("//aside[@id='footer_bottom_left']/div");
        this._footerPaymentIconBlock = By.xpath("//aside[@id='footer_bottom_right']/img");
    }

    //click upper header 'Got it' cookies button method
    async clickGotItButton(){
        const gotItButton = await this.driver.findElement(this._upperHeadGotItButton );
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: gotItButton }).click().perform();
    }

    //general page web element assert method (all pages have those elements)
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isGeneralPageWebElementDisplayed(){
        const elementsToCheck = [
            this._upperHeadNavCurrencyDropdownMenu,
            this._upperHeadNavLanguageDropdownMenu,
            this._upperHeadNavHelpDropdownMenu,
            this._headerHomeLogoLink,
            this._headerSearchBarInputField,
            this._headerSearchButton,
            this._headerShopCartLink,
            this._lowerHeadNavHomePageIconLink,
            this._lowerHeadNavFashionDropdownLink,
            this._lowerHeadNavElementsDropdownLink,
            this._lowerHeadNavProductDropdownLink,
            this._lowerHeadNavBlogDropdownLink,
            this._lowerHeadNavStoresDropdownLink,
            this._lowerHeadNavPagesDropdownLink,
            this._lowerHeadNavMixedDropdownLink,
            this._lowerHeadNavMenDropdownLink,
            this._lowerHeadNavBuyThemeLink,
            this._sidebarCartIconButton,
            this._sidebarWishlistIconButton,
            this._sidebarScrollUpIconButton,
            this._footerPageTitle,
            this._footerSubtextOne,
            this._footerSubtextTwo,
            this._footerSubtextThree,
            this._footerBuyThisThemeLink,
            this._footerSpecialsSectionTitleLink,
            this._footerSpecialProductImgElements,
            this._footerSpecialProductNameLinkElements,
            this._footerSpecialProductUnitPriceElements,
            this._footerSpecialProductOldPriceElements,
            this._footerSpecialProductDiscountElements,
            this._footerRecentArticlesSectionTitle,
            this._footerRecentArticlesImgElements,
            this._footerRecentArticlesTitleLinkElements,
            this._footerRecentArticlesTimespanElements,
            this._footerNewsletterSectionTitle,
            this._footerNewsletterSectionSubtitle,
            this._footerNewsletterEmailInputField,
            this._footerNewsletterSubscribeButton,
            this._footerSupportSectionTitle,
            this._footerSupportSectionLinkElements,
            this._footerCatalogSectionTitle,
            this._footerCatalogSectionLinkElements,
            this._footerMyAccountSectionTitle,
            this._footerMyAccountSectionLinkElements,
            this._footerPopularTagsSectionTitle,
            this._footerPopularTagsSectionLinkElements,
            this._footerContactUsSectionTitle,
            this._footerContactUsAddress,
            this._footerContactUsEmail,
            this._footerContactUsPhone,
            this._footerCopyrightText,
            this._footerPaymentIconBlock
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }


}
module.exports = { GeneralPage };