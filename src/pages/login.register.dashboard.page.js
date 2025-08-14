"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const { RegisterPage } = require("../pages/register.page.js");
const { PersonalInfoPage } = require("../pages/personal.info.page.js");
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

        const registerPage = new RegisterPage(this.driver);
        const personalInfoPage = new PersonalInfoPage(this.driver);

        //valid user login data
        this._validLoginEmail = registerPage.getEmail();
        this._validLoginPassword = registerPage.getPassword();

        //valid edited user login data
        this._validEditedLoginEmail = personalInfoPage.getEditedEmail();
        this._validEditedLoginPassword = personalInfoPage.getEditedPassword();

    }

    //valid login data input methods
    async inputValidLoginEmailIntoEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginSectionEmailInputField);
        const validLoginEmail = await this._validLoginEmail;
        Logger.info("Valid user login email: ", validLoginEmail);
        await loginEmailInputField.sendKeys(validLoginEmail);
    }
    async inputValidLoginPasswordIntoPasswordInputField(){
        const validPasswordInputField = await this.driver.findElement(this._loginSectionPasswordInputField);
        const validLoginPassword = await this._validLoginPassword;
        Logger.info("Valid user login password: ", validLoginPassword);
        await validPasswordInputField.sendKeys(validLoginPassword);
    }

    //valid edited login data input methods
    async inputValidEditedLoginEmailIntoEmailInputField(){
        const loginEmailInputField = await this.driver.findElement(this._loginSectionEmailInputField);
        const validEditedLoginEmail = await this._validEditedLoginEmail;
        Logger.info("Valid user edited login email: ", validEditedLoginEmail);
        await loginEmailInputField.sendKeys(validEditedLoginEmail);
    }
    async inputValidEditedLoginPasswordIntoPasswordInputField(){
        const validPasswordInputField = await this.driver.findElement(this._loginSectionPasswordInputField);
        const validEditedLoginPassword = await this._validEditedLoginPassword;
        Logger.info("Valid user edited login password: ", validPasswordInputField);
        await validPasswordInputField.sendKeys(validEditedLoginPassword);
    }

    //click "View Password" button method
    async clickViewLoginPasswordButton(){
        const loginViewPasswordButton = this.driver.findElement(this._loginSectionViewPasswordButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: loginViewPasswordButton }).click().perform();
    }

    //click "Sign in" button method
    async clickSignInButton(){
        const signInButton = this.driver.findElement(this._loginSectionSignInButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: signInButton }).click().perform();
    }

    //click "Create account" button method
    async clickCreateAccountButton(){
        const createAccountButton = this.driver.findElement(this._newCustomerSectionCreateAccountButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: createAccountButton }).click().perform();
    }

    //login/register dashboard page text getters
    //new customer (register) section
    async getNewCustomerSectionTitle(){
        const newCustomerSectionTitle = await this.driver.findElement(this._newCustomerSectionTitle);
        return await newCustomerSectionTitle.getText();
    }
    async getNewCustomerSectionSubtitle(){
        const newCustomerSectionSubtitle = await this.driver.findElement(this._newCustomerSectionSubtitle);
        return await newCustomerSectionSubtitle.getText();
    }

    //returning customer (login) section
    async getLoginSectionTitle(){
        const loginSectionTitle = await this.driver.findElement(this._loginSectionTitle);
        return await loginSectionTitle.getText();
    }
    //input form
    async getLoginSectionEmailSubtext(){
        const loginSectionEmailSubtext = await this.driver.findElement(this._loginSectionEmailSubtext);
        return await loginSectionEmailSubtext.getText();
    }
    async getLoginSectionPasswordSubtext(){
        const loginSectionPasswordSubtext = await this.driver.findElement(this._loginSectionPasswordSubtext);
        return await loginSectionPasswordSubtext.getText();
    }
    async getLoginSectionForgotPasswordLinkText(){
        const forgotPasswordLinkText = await this.driver.findElement(this._loginSectionForgotPasswordLink);
        return await forgotPasswordLinkText.getText();
    }

    //singular input error message getter
    async getLoginSectionSingularInputErrorMsg(){
        const loginSectionSingularInputErrorMsg = await this.driver.findElement(this._loginSectionSingularInputErrorMessage);
        return await loginSectionSingularInputErrorMsg.getText();
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