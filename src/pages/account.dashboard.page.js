"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger");

class AccountDashboardPage extends BasePage{

    constructor(driver) {
        super(driver);

        //account dashboard page web elements
        this._accountDashboardPageBreadcrumbElements = By.xpath("//nav[@class='breadcrumb_nav']/ul/li[@itemprop='itemListElement']");
        this._accountDashboardPageTitle = By.xpath("//h6[@class='page_heading']");
        this._accountDashboardPageSubtitle = By.xpath("//div[@id='easycontent_120']//p");
        //aside menu links (as a list)
        this._accountDashPageAsideLinkElements = By.xpath("//section[@id='content']//div[@class='list-group mb-3']/div//a");
        //main (link list elements)
        this._accountDashPageDashboardLinkElements = By.xpath("//div[@class='row myacount_dashbord_list']/div/a");
        //singular items
        this._accountDashPageBackToAccountLink = By.xpath("//div[@class='clearfix my_account_page_footer mt-3 mb-3']/a[1]");
        this._accountDashPageHomeLink = By.xpath("//div[@class='clearfix my_account_page_footer mt-3 mb-3']/a[2]");
    }

    //account dashboard page text element getters
    async getAccountDashboardPageTitle(){
        const accountDashPageTitle = await this.driver.findElement(this._accountDashboardPageTitle);
        const text = await accountDashPageTitle.getText();
        await new Promise(resolve => setTimeout(resolve, 1000))
        return text.trim().split(',')[0];
    }
    async getAccountDashboardPageSubtitle(){
        const accountDashPageSubtitle = await this.driver.findElement(this._accountDashboardPageSubtitle);
        return await accountDashPageSubtitle.getText();
    }

    //aside link list text getter
    async getAccountDashPageAsideLinkText() {
        const elements = await this.driver.findElements(this._accountDashPageAsideLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get account dashboard page aside link text(s):', error.message);
                    return '';
                }
            })
        );
    }

    //main link list text getter
    async getAccountDashPageDashboardLinkText() {
        const elements = await this.driver.findElements(this._accountDashPageDashboardLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get account dashboard page main dashboard link text(s):', error.message);
                    return '';
                }
            })
        );
    }

    //singular text getters
    async getAccountDashboardPageBackToAccountLinkText(){
        const accountDashPageBackToAccountLink = await this.driver.findElement(this._accountDashPageBackToAccountLink);
        return await accountDashPageBackToAccountLink.getText();
    }
    async getAccountDashboardPageHomeLinkText(){
        const accountDashPageHomeLink = await this.driver.findElement(this._accountDashPageHomeLink);
        return await accountDashPageHomeLink.getText();
    }

    //account dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isAccountDashboardPageWebElementDisplayed() {
        const elementsToCheck = [
            this._accountDashboardPageTitle,
            this._accountDashboardPageSubtitle,
            this._accountDashPageDashboardLinkElements,
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

    async isAccountDashboardPageAsideWebElementDisplayed() {
        const elementsToCheck = [
            this._accountDashPageAsideLinkElements,
            this._accountDashPageBackToAccountLink,
            this._accountDashPageHomeLink
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

    async isAccountDashboardPageBreadcrumbWebElementDisplayed() {
        const elementsToCheck = [
            this._accountDashboardPageBreadcrumbElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }


}
module.exports = AccountDashboardPage;