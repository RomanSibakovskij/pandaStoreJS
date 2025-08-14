"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("../utilities/base.page.js");
const Logger = require("../utilities/logger");

class HeaderShoppingCartModal extends BasePage{

    constructor(driver) {
        super(driver);

        //header shopping cart modal web elements
        //list elements
        this._headerShopCartModalProductImgElements = By.xpath("//div[@class='dropdown_box']//ul/li//picture/img");
        this._headerShopCartModalProductNameLinkElements = By.xpath("//div[@class='dropdown_box']//ul/li//a[@class='product-name mar_r4 flex_child']");
        this._headerShopCartModalProductUnitPriceElements = By.xpath("//div[@class='dropdown_box']//ul/li//div[@class='price mar_r4']");
        this._headerShopCartModalProductRemoveIconButtonElements = By.xpath("//div[@class='dropdown_box']//ul/li//a[@class='ajax_remove_button']");
        this._headerShopCartModalProductQtyDecreaseBtnElements = By.xpath("//div[@class='dropdown_box']//ul/li//div[@class='qty_wrap mar_r4 ']//button[@class='btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-down']");
        this._headerShopCartModalProductQtyInputFieldElements = By.xpath("//div[@class='dropdown_box']//ul/li//div[@class='qty_wrap mar_r4 ']//input");
        this._headerShopCartModalProductQtyIncreaseBtnElements = By.xpath("//div[@class='dropdown_box']//ul/li//div[@class='qty_wrap mar_r4 ']//button[@class='btn btn-touchspin js-touchspin js-decrease-product-quantity bootstrap-touchspin-up']");
        this._headerShopCartModalProductColorElements = By.xpath("//div[@class='dropdown_box']//ul/li//div[@class='small_cart_attr_attr'][1]/span[@class='small_cart_attr_k']");
        this._headerShopCartModalProductSizeElements = By.xpath("//div[@class='dropdown_box']//ul/li//div[@class='small_cart_attr_attr'][2]/span[@class='small_cart_attr_k']");
        //total items section
        this._headerShopCartModalTotalItemSectionData = By.xpath("//div[@class='dropdown_list cart_body ']//div[@class='small_cart_sumary base_list_line']");
        this._headerShopCartModalShoppingCartButton = By.xpath("//div[@class='dropdown_list cart_body']//a[@title='Shopping cart']");
        this._headerShopCartModalCheckoutButton = By.xpath("//div[@class='dropdown_list cart_body ']//a[@title='Checkout']");
    }

    //click increase product quantity button method
    async clickHeaderModalShoppingCartIncreaseQtyBtn(index){
        const headerShoppingCartModalButton = await this.driver.findElements(this._headerShopCartModalProductQtyIncreaseBtnElements);
        const targetElement = headerShoppingCartModalButton[index];
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: targetElement }).click().perform();
    }

    //click "Shopping cart" button method
    async clickHeaderModalShoppingCartButton(){
        const headerShoppingCartModalButton = await this.driver.findElement(this._headerShopCartModalShoppingCartButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: headerShoppingCartModalButton }).click().perform();
    }

    //header shopping cart product data getters
    async getHeaderShoppingCartModalProductName(){
        const elements = await this.driver.findElements(this._headerShopCartModalProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get header shopping cart modal product name(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getHeaderShoppingCartModalProductUnitPrice(){
        const elements = await this.driver.findElements(this._headerShopCartModalProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get header shopping cart modal product unit price(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getHeaderShoppingCartModalProductQty(){
        const elements = await this.driver.findElements(this._headerShopCartModalProductQtyInputFieldElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getDomAttribute("value");
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get header shopping cart modal product quantity(ies):', error.message);
                    return '';
                }
            })
        );
    }
    async getHeaderShoppingCartModalProductColor(){
        const elements = await this.driver.findElements(this._headerShopCartModalProductColorElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get header shopping cart modal product color(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getHeaderShoppingCartModalProductSize(){
        const elements = await this.driver.findElements(this._headerShopCartModalProductSizeElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get header shopping cart modal product size(s):', error.message);
                    return '';
                }
            })
        );
    }

    //header shopping cart modal data total product price getter
    async getHeaderShoppingCartModalTotalProductPriceData(){
        const headerShoppingCartModalTotalProductPriceData = await this.driver.findElement(this._headerShopCartModalTotalItemSectionData);
        return await headerShoppingCartModalTotalProductPriceData.getText();
    }

    //header shopping cart modal web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isHeaderShopCartModalWebElementDisplayed(){
        const elementsToCheck = [
            //this._headerShopCartModalProductImgElements,
            this._headerShopCartModalProductNameLinkElements,
            //this._headerShopCartModalProductUnitPriceElements,
            this._headerShopCartModalProductRemoveIconButtonElements,
            this._headerShopCartModalProductQtyDecreaseBtnElements,
            this._headerShopCartModalProductQtyInputFieldElements,
            this._headerShopCartModalProductQtyIncreaseBtnElements,
            this._headerShopCartModalProductColorElements,
            this._headerShopCartModalProductSizeElements,
            //this._headerShopCartModalTotalItemSectionData,
            //this._headerShopCartModalShoppingCartButton,
            //this._headerShopCartModalCheckoutButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = HeaderShoppingCartModal;