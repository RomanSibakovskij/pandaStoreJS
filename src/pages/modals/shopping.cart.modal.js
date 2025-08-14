"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("../utilities/base.page.js");

class ShoppingCartModal extends BasePage{

    constructor(driver) {
        super(driver);

        //shopping cart modal web elements
        this._shopCartModalCloseButton = By.xpath("//div[@class='modal-content']/a");
        this._shopCartModalProductImage = By.xpath("//div[@class='modal-content']//picture/img");
        this._shopCartModalProductName = By.xpath("//div[@class='modal-content']//h1");
        this._shopCartModalProductColorSubtext = By.xpath("//ul[@class='list_detail_item m-b-1']/li[1]/span");
        this._shopCartModalProductColor = By.xpath("//ul[@class='list_detail_item m-b-1']/li[1]");
        this._shopCartModalProductSizeSubtext = By.xpath("//ul[@class='list_detail_item m-b-1']/li[2]/span");
        this._shopCartModalProductSize = By.xpath("//ul[@class='list_detail_item m-b-1']/li[2]");
        this._shopCartModalProductQuantitySubtext = By.xpath("//ul[@class='list_detail_item m-b-1']/li[3]/span");
        this._shopCartModalProductQuantity = By.xpath("//ul[@class='list_detail_item m-b-1']/li[3]");
        this._shopCartModalProductAdditionSuccessMessage = By.xpath("//div[@class='alert alert-success']");
        this._shopCartModalItemQuantity = By.xpath("//p[@class='cart-products-count']");
        this._shopCartModalTotalItemPriceSubtext = By.xpath("//ul[@class='list_detail_item']/li[1]/span");
        this._shopCartModalTotalItemPrice = By.xpath("//ul[@class='list_detail_item']/li[1]");
        this._shopCartModalTotalShippingPriceSubtext = By.xpath("//ul[@class='list_detail_item']/li[2]/span");
        this._shopCartModalTotalShippingPrice = By.xpath("//ul[@class='list_detail_item']/li[2]");
        this._shopCartModalTaxesSubtext = By.xpath("//ul[@class='list_detail_item']/li[3]/span");
        this._shopCartModalTaxes = By.xpath("//ul[@class='list_detail_item']/li[3]");
        this._shopCartModalTotalPriceNoTaxSubtext = By.xpath("//ul[@class='list_detail_item']/li[4]/span");
        this._shopCartModalTotalPriceNoTax = By.xpath("//ul[@class='list_detail_item']/li[4]");
        //button elements
        this._shopCartModalProceedToShoppingCartButton = By.xpath("//div[@class='cart-content-btn']//a[@title='Shopping cart']");
        this._shopCartModalProceedToCheckoutButton = By.xpath("//div[@class='cart-content-btn']//a[@title='Proceed to checkout']");
        this._shopCartModalContinueShoppingLink = By.xpath("//div[@class='cart-content-btn']//a[@class='inline_block mb-2']");
        //products you may like section
        this._shopCartModalProductsMayLikeSectionTitle = By.xpath("//section[@class='modal_products_container products_slider']//div[@class='title_block_inner']");
        this._shopCartModalProductsMayLikeScrollLeftButton = By.xpath("//section[@class='modal_products_container products_slider']//div[@class='swiper-button-tr']/div[1]");
        this._shopCartModalProductsMayLikeScrollRightButton = By.xpath("//section[@class='modal_products_container products_slider']//div[@class='swiper-button-tr']/div[2]");
        //list elements
        this._shopCartModalProductsMayLikeProductImgElements = By.xpath("//section[@class='modal_products_container products_slider']//div[@class='swiper-wrapper']//img");
        this._shopCartModalProductsMayLikeProductUnitPriceElements = By.xpath("//section[@class='modal_products_container products_slider']//div[@class='swiper-wrapper']//div[@class='price']");
    }

    //shopping cart modal product data getters
    async getShoppingCartModalProductName(){
        const shopCartModalProductName = await this.driver.findElement(this._shopCartModalProductName);
        const text = await shopCartModalProductName.getText();
        return text.split(":")[1].trim();
    }
    async getShoppingCartModalProductColor(){
        const shopCartModalProductColor = await this.driver.findElement(this._shopCartModalProductColor);
        const text = await shopCartModalProductColor.getText();
        return text.split(":")[1].trim();
    }
    async getShoppingCartModalProductSize(){
        const shopCartModalProductSize = await this.driver.findElement(this._shopCartModalProductSize);
        const text = await shopCartModalProductSize.getText();
        return text.split(":")[1].trim();
    }
    async getShoppingCartModalProductQuantity(){
        const shopCartModalProductQuantity = await this.driver.findElement(this._shopCartModalProductQuantity);
        const text = shopCartModalProductQuantity.getText();
        return text.split(":")[1].trim();
    }

    //total items section
    async getShoppingCartModalTotalItemPrice(){
        const shopCartModalTotalItemPrice = await this.driver.findElement(this._shopCartModalTotalItemPrice);
        const text = await shopCartModalTotalItemPrice.getText();
        return text.split(":")[1].trim();
    }
    async getShoppingCartModalTotalShippingPrice(){
        const shopCartModalTotalShippingPrice = await this.driver.findElement(this._shopCartModalTotalShippingPrice);
        const text = await shopCartModalTotalShippingPrice.getText();
        return text.split(":")[1].trim();
    }
    async getShoppingCartModalTaxes(){
        const shopCartModalTaxes = await this.driver.findElement(this._shopCartModalTaxes);
        const text = await shopCartModalTaxes.getText();
        return text.split(":")[1].trim();
    }
    async getShoppingCartModalTotalPriceNoTax(){
        const shopCartModalTotalPriceNoTax = await this.driver.findElement(this._shopCartModalTotalItemPrice);
        const text = await shopCartModalTotalPriceNoTax.getText();
        return text.split(":")[1].trim();
    }

    //product you may like section
    async getShoppingCartModalProductsMayLikeProductUnitPrice(){
        const shopCartModalProductsMayLikeProductUnitPrice = await this.driver.findElement(this._shopCartModalProductsMayLikeProductUnitPriceElements);
        return await shopCartModalProductsMayLikeProductUnitPrice.getText();
    }

    //shopping cart modal text element getters
    async getShoppingCartModalProductColorSubtext(){
        const shopCartModalProductColorSubtext = await this.driver.findElement(this._shopCartModalProductColorSubtext);
        return await shopCartModalProductColorSubtext.getText();
    }
    async getShoppingCartModalProductSizeSubtext(){
        const shopCartModalProductSizeSubtext = await this.driver.findElement(this._shopCartModalProductSizeSubtext);
        return await shopCartModalProductSizeSubtext.getText();
    }
    async getShoppingCartModalProductQtySubtext(){
        const shopCartModalProductQtySubtext = await this.driver.findElement(this._shopCartModalProductQuantitySubtext);
        return await shopCartModalProductQtySubtext.getText();
    }
    //total item section
    async getShoppingCartModalTotalShippingPriceSubtext(){
        const shopCartModalTotalShippingPriceSubtext = await this.driver.findElement(this._shopCartModalTotalShippingPriceSubtext);
        return await shopCartModalTotalShippingPriceSubtext.getText();
    }
    async getShoppingCartModalTaxesSubtext(){
        const shopCartModalTaxesSubtext = await this.driver.findElement(this._shopCartModalTaxesSubtext);
        return await shopCartModalTaxesSubtext.getText();
    }
    async getShoppingCartModalTotalPriceNoTaxSubtext(){
        const shopCartModalTotalPriceNoTaxSubtext = await this.driver.findElement(this._shopCartModalTotalPriceNoTaxSubtext);
        return await shopCartModalTotalPriceNoTaxSubtext.getText();
    }
    async getShoppingCartModalContinueShoppingLinkText(){
        const shopCartModalContinueShoppingLinkText = await this.driver.findElement(this._shopCartModalContinueShoppingLink);
        return await shopCartModalContinueShoppingLinkText.getText();
    }

    //shopping cart modal web element assert method (all pages have those elements)
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isShopCartModalWebElementDisplayed(){
        const elementsToCheck = [
            //this._shopCartModalCloseButton,
            //this._shopCartModalProductImage,
            this._shopCartModalProductName,
            this._shopCartModalProductColorSubtext,
            this._shopCartModalProductColor,
            this._shopCartModalProductSizeSubtext,
            this._shopCartModalProductSize,
            this._shopCartModalProductQuantitySubtext,
            this._shopCartModalProductQuantity,
            this._shopCartModalItemQuantity,
            this._shopCartModalTotalItemPriceSubtext,
            this._shopCartModalTotalItemPrice,
            this._shopCartModalTotalShippingPriceSubtext,
            this._shopCartModalTotalShippingPrice,
            this._shopCartModalTaxesSubtext,
            this._shopCartModalTaxes,
            this._shopCartModalTotalPriceNoTaxSubtext,
            this._shopCartModalTotalPriceNoTax,
            this._shopCartModalProceedToShoppingCartButton,
            this._shopCartModalProceedToCheckoutButton,
            //this._shopCartModalProductsMayLikeSectionTitle, //not all products have this element
            //this._shopCartModalProductsMayLikeScrollLeftButton, //not all products have this element
            //this._shopCartModalProductsMayLikeScrollRightButton, //not all products have this element
            //this._shopCartModalProductsMayLikeProductImgElements, //not all products have these elements
            //this._shopCartModalProductsMayLikeProductUnitPriceElements //not all products have these elements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = ShoppingCartModal;