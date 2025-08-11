"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const Logger = require("./utilities/logger");

class LoginRegisterDashboardPage extends BasePage{

    constructor(driver) {
        super(driver);

        //login/register dashboard page web elements
        //new customer (register) section
        this._newCustomerSectionTitle = By.xpath("//section[@id='create_account_block']/h3");
        this._newCustomerSectionSubtitle = By.xpath("//section[@id='create_account_block']//div[@class='p-b-1']");
        this._newCustomerSectionCreateAccountButton = By.xpath("//section[@id='create_account_block']//a");
        //returning customer (login) section
        this._loginSectionTitle = By.xpath("//section[@id='login_form_block']/h3");
        //input form
        this._loginSectionEmailSubtext = By.xpath("//section[@id='login_form_block']//div[@class='form-group form-group-small  st_form_item_email']/label");
        this._loginSectionEmailInputField = By.xpath("//section[@id='login_form_block']//input[@name='email']");
        this._loginSectionPasswordSubtext = By.xpath("//section[@id='login_form_block']//div[@class='form-group form-group-small  st_form_item_password']/label");
        this._loginSectionViewPasswordButton = By.xpath("//section[@id='login_form_block']//button[@class='btn show_password']");
        this._loginSectionPasswordInputField = By.xpath("//section[@id='login_form_block']//input[@name='password']");
        this._loginSectionForgotPasswordLink = By.xpath("//section[@id='login_form_block']//a[@class='forgot-password']");
        this._loginSectionSignInButton = By.xpath("//section[@id='login_form_block']//button[@id='SubmitLogin']");
        //singular input error message
        this._loginSectionSingularInputErrorMessage = By.xpath("//div[@class='help-block  alert alert-danger']");

    }

    //login/register dashboard page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isLoginRegisterDashPageWebElementDisplayed(){
        const elementsToCheck = [
            this._newCustomerSectionTitle,
            this._newCustomerSectionSubtitle,
            this._newCustomerSectionCreateAccountButton,
            this._loginSectionTitle,
            this._loginSectionEmailSubtext,
            this._loginSectionEmailInputField,
            this._loginSectionPasswordSubtext,
            this._loginSectionViewPasswordButton,
            this._loginSectionPasswordInputField,
            this._loginSectionForgotPasswordLink,
            this._loginSectionSignInButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { LoginRegisterDashboardPage };