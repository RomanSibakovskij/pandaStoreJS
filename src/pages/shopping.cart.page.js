"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger");

class ShoppingCartPage extends BasePage{

    constructor(driver) {
        super(driver);

        //shopping cart page web elements
        this._shoppingCartPageTitle = By.xpath("//div[@class='card-header']");
        //shopping cart table
        //list elements
        this._shoppingCartTableProductImgElements = By.xpath("//ul[@class='cart-items base_list_line mb-3 m-t-1']/li//img");
        this._shoppingCartTableProductNameLinkElements = By.xpath("//ul[@class='cart-items base_list_line mb-3 m-t-1']/li//a[@class='label']");
        this._shoppingCartTableProductCurrentPriceElements = By.xpath("//ul[@class='cart-items base_list_line mb-3 m-t-1']/li//div[@class='current-price']");
        this._shoppingCartTableProductColorSubtextElements = By.xpath("//ul[@class='cart-items base_list_line mb-3 m-t-1']/li//span[contains(text(), 'Color')]");
        this._shoppingCartTableProductColorElements = By.xpath("//ul[@class='cart-items base_list_line mb-3 m-t-1']/li//div[@class='product-line-info'][2]/span[@class='value']");
        this._shoppingCartTableProductSizeSubtextElements = By.xpath("//ul[@class='cart-items base_list_line mb-3 m-t-1']/li//span[contains(text(), 'Size')]");
        this._shoppingCartTableProductSizeElements = By.xpath("//ul[@class='cart-items base_list_line mb-3 m-t-1']/li//div[@class='product-line-info'][3]/span[@class='value']");
        this._shoppingCartTableProductQtyDecreaseButtonElements = By.xpath("//ul[@class='cart-items base_list_line mb-3 m-t-1']/li//button[@class='btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-down']");
        this._shoppingCartTableProductQtyInputFieldElements = By.xpath("//ul[@class='cart-items base_list_line mb-3 m-t-1']/li//input[@name='product-quantity-spin']");
        this._shoppingCartTableProductQtyIncreaseButtonElements = By.xpath("//ul[@class='cart-items base_list_line mb-3 m-t-1']/li//button[@class='btn btn-touchspin js-touchspin js-decrease-product-quantity bootstrap-touchspin-up']");
        this._shoppingCartTableProductTotalPriceElements = By.xpath("//ul[@class='cart-items base_list_line mb-3 m-t-1']/li//span[@class='product-price price']");
        this._shoppingCartTableProductRemoveButtonElements = By.xpath("//ul[@class='cart-items base_list_line mb-3 m-t-1']/li//a[@class='remove-from-cart']");
        //product summary table
        this._shoppingCartSummaryTableProductCount = By.xpath("//div[@class='cart-detailed-totals']/div[1]//span[@class='label js-subtotal']");
        this._shoppingCartSummaryTableProductPrice = By.xpath("//div[@class='cart-detailed-totals']/div[1]//div[@id='cart-subtotal-products']/div[@class='value price']");
        this._shoppingCartSummaryTableProductShippingSubtext = By.xpath("//div[@class='cart-detailed-totals']/div[1]//div[@id='cart-subtotal-shipping']/span");
        this._shoppingCartSummaryTableProductShippingPrice = By.xpath("//div[@class='cart-detailed-totals']/div[1]//div[@id='cart-subtotal-shipping']/div");
        this._shoppingCartSummaryTablePromoCodeLink = By.xpath("//div[@class='cart-detailed-totals']/div[2]//div[@class='mar_b10']/a");
        this._shoppingCartSummaryTablePromoCodeInputField = By.xpath("//div[@class='cart-detailed-totals']/div[2]//div[@class='input-group mar_b10']/input");
        this._shoppingCartSummaryTableAddPromoCodeButton = By.xpath("//div[@class='cart-detailed-totals']/div[2]//div[@class='input-group mar_b10']//button");
        this._shoppingCartSummaryTableOfferSubtext = By.xpath("//div[@class='cart-detailed-totals']/div[2]//p[@class='block-promo promo-highlighted mar_b10']");
        this._shoppingCartSummaryTableOffer = By.xpath("//div[@class='cart-detailed-totals']/div[2]//span[@class='label']");
        this._shoppingCartSummaryTableTaxesSubtext = By.xpath("//div[@class='cart-detailed-totals']/div[3]/div[@class='cart-summary-line clearfix']/span[1]");
        this._shoppingCartSummaryTableTaxesAmount = By.xpath("//div[@class='cart-detailed-totals']/div[3]/div[@class='cart-summary-line clearfix']/span[2]");
        this._shoppingCartSummaryTableTotalPriceSubtext = By.xpath("//div[@class='cart-detailed-totals']/div[3]/div[@class='cart-summary-line clearfix cart-total']/span[1]");
        this._shoppingCartSummaryTableTotalPrice = By.xpath("//div[@class='cart-detailed-totals']/div[3]/div[@class='cart-summary-line clearfix cart-total']/span[2]");
        this._shoppingCartSummaryTableProceedToCheckoutButton = By.xpath("//div[@class='checkout cart-detailed-actions card-block']/a");
        this._shoppingCartContinueShoppingButton = By.xpath("//a[@class='btn btn-default']");
    }

    //shopping cart page product data getters
    async getShoppingCartTableProductName(){
        const elements = await this.driver.findElements(this._shoppingCartTableProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart page table product name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getShoppingCartTableProductCurrentPrice(){
        const elements = await this.driver.findElements(this._shoppingCartTableProductCurrentPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart page table product price(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getShoppingCartTableProductColor(){
        const elements = await this.driver.findElements(this._shoppingCartTableProductColorElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart page table product color(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getShoppingCartTableProductSize(){
        const elements = await this.driver.findElements(this._shoppingCartTableProductSizeElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart page table product size(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getShoppingCartTableProductQty(){
        const elements = await this.driver.findElements(this._shoppingCartTableProductQtyInputFieldElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart page table product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }
    async getShoppingCartTableProductTotalPrice(){
        const elements = await this.driver.findElements(this._shoppingCartTableProductTotalPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart page table product total price(s):', error.message);
                    return '';
                }
            })
        );
    }

    //product summary table
    async getShoppingCartSummaryProductCount(){
        const shoppingCartProductCount = await this.driver.findElement(this._shoppingCartSummaryTableProductCount);
        return await shoppingCartProductCount.getText();
    }
    async getShoppingCartSummaryProductPrice(){
        const shoppingCartSummaryProductPrice = await this.driver.findElement(this._shoppingCartSummaryTableProductPrice);
        return await shoppingCartSummaryProductPrice.getText();
    }
    async getShoppingCartSummaryProductShippingPrice(){
        const shoppingCartSummaryProductShippingPrice = await this.driver.findElement(this._shoppingCartSummaryTableProductShippingPrice);
        return await shoppingCartSummaryProductShippingPrice.getText();
    }
    async getShoppingCartSummaryOffer(){
        const shoppingCartSummaryOffer = await this.driver.findElement(this._shoppingCartSummaryTableOffer);
        return await shoppingCartSummaryOffer.getText();
    }
    async getShoppingCartSummaryTaxes(){
        const shoppingCartSummaryTaxes = await this.driver.findElement(this._shoppingCartSummaryTableTaxesAmount);
        return await shoppingCartSummaryTaxes.getText();
    }
    async getShoppingCartSummaryTotalPrice(){
        const shoppingCartSummaryTotalPrice = await this.driver.findElement(this._shoppingCartSummaryTableTotalPrice);
        return await shoppingCartSummaryTotalPrice.getText();
    }

    //shopping cart page text element getters
    async getShoppingCartPageTitle(){
        const shoppingCartPageTitle = await this.driver.findElement(this._shoppingCartPageTitle);
        return await shoppingCartPageTitle.getText();
    }

    //product table
    async getShoppingCartTableProductColorSubtext(){
        const elements = await this.driver.findElements(this._shoppingCartTableProductColorSubtextElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart page table product color subtext(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getShoppingCartTableProductSizeSubtext(){
        const elements = await this.driver.findElements(this._shoppingCartTableProductSizeSubtextElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get shopping cart page table product size subtext(s):', error.message);
                    return '';
                }
            })
        );
    }

    //product summary table
    async getShoppingCartSummaryTableProductShippingSubtext(){
        const shoppingCartSummaryTableProductShippingSubtext = await this.driver.findElement(this._shoppingCartSummaryTableProductShippingSubtext);
        return await shoppingCartSummaryTableProductShippingSubtext.getText();
    }
    async getShoppingCartSummaryTablePromoCodeLinkText(){
        const shoppingCartSummaryTablePromoCodeLinkText = await this.driver.findElement(this._shoppingCartSummaryTablePromoCodeLink);
        return await shoppingCartSummaryTablePromoCodeLinkText.getText();
    }
    async getShoppingCartSummaryTableOfferSubtext(){
        const shoppingCartSummaryTableOfferSubtext = await this.driver.findElement(this._shoppingCartSummaryTableOfferSubtext);
        return await shoppingCartSummaryTableOfferSubtext.getText();
    }
    async getShoppingCartSummaryTableTaxesSubtext(){
        const shoppingCartSummaryTableTaxesSubtext = await this.driver.findElement(this._shoppingCartSummaryTableTaxesSubtext);
        return await shoppingCartSummaryTableTaxesSubtext.getText();
    }
    async getShoppingCartSummaryTableTotalPriceSubtext(){
        const shoppingCartSummaryTableTotalPriceSubtext = await this.driver.findElement(this._shoppingCartSummaryTableTotalPriceSubtext);
        return await shoppingCartSummaryTableTotalPriceSubtext.getText();
    }

    //shopping cart page web element assert method (all pages have those elements)
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isShoppingCartPageWebElementDisplayed() {
        const elementsToCheck = [
            this._shoppingCartPageTitle,
            this._shoppingCartTableProductImgElements,
            this._shoppingCartTableProductNameLinkElements,
            this._shoppingCartTableProductCurrentPriceElements,
            this._shoppingCartTableProductColorSubtextElements,
            this._shoppingCartTableProductColorElements,
            this._shoppingCartTableProductSizeSubtextElements,
            this._shoppingCartTableProductSizeElements,
            this._shoppingCartTableProductQtyDecreaseButtonElements,
            this._shoppingCartTableProductQtyInputFieldElements,
            this._shoppingCartTableProductQtyIncreaseButtonElements,
            this._shoppingCartTableProductTotalPriceElements,
            this._shoppingCartTableProductRemoveButtonElements,
            this._shoppingCartSummaryTableProductCount,
            this._shoppingCartSummaryTableProductPrice,
            this._shoppingCartSummaryTableProductShippingSubtext,
            this._shoppingCartSummaryTableProductShippingPrice,
            this._shoppingCartSummaryTablePromoCodeLink,
            this._shoppingCartSummaryTablePromoCodeInputField,
            this._shoppingCartSummaryTableAddPromoCodeButton,
            this._shoppingCartSummaryTableOfferSubtext,
            this._shoppingCartSummaryTableOffer,
            this._shoppingCartSummaryTableTaxesSubtext,
            this._shoppingCartSummaryTableTaxesAmount,
            this._shoppingCartSummaryTableTotalPriceSubtext,
            this._shoppingCartSummaryTableTotalPrice,
            this._shoppingCartSummaryTableProceedToCheckoutButton,
            this._shoppingCartContinueShoppingButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

}
module.exports = { ShoppingCartPage };