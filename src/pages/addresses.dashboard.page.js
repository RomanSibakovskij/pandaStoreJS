"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger");

class AddressesDashboardPage extends BasePage{

    constructor(driver) {
        super(driver);

        //address dashboard page web elements
        this._addressDashPageTitle = By.xpath("//section[@id='main']/h3[@class='page_heading']");
        //addresses box elements
        this._addressDashPageAddressTitleElements = By.xpath("//div[@class='row com_grid_view']//article//p");
        this._addressDashPageAddressElements = By.xpath("//div[@class='row com_grid_view']//article//address");
        this._addressDashPageAddressUpdateLinkElements = By.xpath("//div[@class='address-footer card-footer']/a[1]");
        this._addressDashPageAddressDeleteLinkElements = By.xpath("//div[@class='address-footer card-footer']/a[2]");
        //address addition success message element
        this._addressDashPageAddressAddSuccessMessage = By.xpath("//article[@class='alert alert-success']");
        //create new address link element
        this._addressDashPageCreateNewAddressLink = By.xpath("//div[@class='addresses-footer mb-3']/a");
    }

    //click "Create new address" link method
    async clickAddressesDashboardCreateNewAddressLink(){
        const dashboardCreateNewAddressLink = await this.driver.findElement(this._addressDashPageCreateNewAddressLink);
        await new Promise(resolve => setTimeout(resolve, 900))
        dashboardCreateNewAddressLink.click();
    }

    //click set "Delete" address link method
    async clickAddressesDashSetDeleteAddressLinkMethod(index){
        const dashboardDeleteAddressLinkElements = await this.driver.findElements(this._addressDashPageAddressDeleteLinkElements);
        await dashboardDeleteAddressLinkElements[index].click();
    }

    //address dashboard page text element getters
    async getAddressesDashboardPageTitle(){
        const addressesDashPageTitle = await this.driver.findElement(this._addressDashPageTitle);
        return await addressesDashPageTitle.getText();
    }

    async getUpdateAddressLinkText() {
        const elements = await this.driver.findElements(this._addressDashPageAddressUpdateLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get user address update link(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getDeleteAddressLinkText() {
        const elements = await this.driver.findElements(this._addressDashPageAddressDeleteLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get user address delete link(s):', error.message);
                    return '';
                }
            })
        );
    }

    //addresses data getters
    async getDisplayedUserAddressTitle() {
        const elements = await this.driver.findElements(this._addressDashPageAddressTitleElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get user address title(s):', error.message);
                    return '';
                }
            })
        );
    }
    async getDisplayedUserAddress() {
        const elements = await this.driver.findElements(this._addressDashPageAddressElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get user address(es):', error.message);
                    return '';
                }
            })
        );
    }

    //address dashboard page address addition success message element getter
    async getAddressesDashboardPageAddressAddSuccessMessage(){
        const addAddressSuccessMessage = await this.driver.findElement(this._addressDashPageAddressAddSuccessMessage);
        return await addAddressSuccessMessage.getText();
    }

    //addresses dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAddressesDashboardPageWebElementDisplayed() {
        const elementsToCheck = [
            this._addressDashPageTitle,
            this._addressDashPageAddressTitleElements,
            this._addressDashPageAddressElements,
            this._addressDashPageAddressUpdateLinkElements,
            this._addressDashPageAddressDeleteLinkElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

}
module.exports = { AddressesDashboardPage };