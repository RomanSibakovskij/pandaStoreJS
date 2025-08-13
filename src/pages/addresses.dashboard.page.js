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