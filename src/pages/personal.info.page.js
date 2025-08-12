"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const TestDataGenerator = require("./utilities/test.data.generator.js");
const { RegisterPage } = require("../pages/register.page.js");
const Logger = require("./utilities/logger");

class PersonalInfoPage extends BasePage{

    constructor(driver) {
        super(driver);

        //personal information page web elements
        this._personalInfoPageTitle = By.xpath("//section[@id='main']/h3[@class='page_heading']");
        //input form
        this._personalInfoPageSocialSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_id_gender']/label");
        this._personalInfoPageMrRadioSubtext = By.xpath("//span[contains(text(), 'Mr.')]");
        this._personalInfoPageMrRadioButton = By.xpath("//div[@class='form-group form-group-small  st_form_item_id_gender']//input[@value='1']");
        this._personalInfoPageMrsRadioSubtext = By.xpath("//span[contains(text(), 'Mrs.')]");
        this._personalInfoPageMrsRadioButton = By.xpath("//div[@class='form-group form-group-small  st_form_item_id_gender']//input[@value='2']");
        this._personalInfoPageFirstNameSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_firstname']/label");
        this._personalInfoPageFirstNameInputField = By.xpath("//input[@name='firstname']");
        this._personalInfoPageLastNameSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_lastname']/label");
        this._personalInfoPageLastNameInputField = By.xpath("//input[@name='lastname']");
        this._personalInfoPageEmailSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_email']/label");
        this._personalInfoPageEmailInputField = By.xpath("//input[@type='email']");
        this._personalInfoPagePasswordSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_password']/label");
        this._personalInfoPageViewPasswordButton = By.xpath("//div[@class='col-lg-6  first-item-of-large-line  first-item-of-desktop-line first-item-of-line ']//button[@class='btn show_password']");
        this._personalInfoPagePasswordInputField = By.xpath("//input[@name='password']");
        this._personalInfoPageNewPasswordSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_new_password']/label");
        this._personalInfoPageViewNewPasswordButton = By.xpath("//div[@class='form-group form-group-small  st_form_item_new_password']//button[@class='btn show_password']");
        this._personalInfoPageNewPasswordInputField = By.xpath("//input[@name='new_password']");
        this._personalInfoPageNewsletterCheckbox = By.xpath("//input[@name='newsletter']");
        this._personalInfoPageNewsletterSubtext = By.xpath("//span[@class='flex_child']");
        this._personalInfoPageSaveButton = By.xpath("//button[@class='btn btn-default']");
        //update success message box element
        this._personalInfoEditSuccessMessage = By.xpath("//article[@class='alert alert-success']");
        //input error message elements
        this._personalInfoEditFailureMessage = By.xpath("//aside[@id='notifications']");
        this._personalInfoSingularInputErrorMessage = By.xpath("//div[@class='help-block  alert alert-danger']");
    }

    //personal information page web element assert method (all pages have those elements)
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isPersonalInformationPageWebElementDisplayed() {
        const elementsToCheck = [
            this._personalInfoPageTitle,
            this._personalInfoPageSocialSubtext,
            this._personalInfoPageMrRadioSubtext,
            this._personalInfoPageMrRadioButton,
            this._personalInfoPageMrsRadioSubtext,
            this._personalInfoPageMrsRadioButton,
            this._personalInfoPageFirstNameSubtext,
            this._personalInfoPageFirstNameInputField,
            this._personalInfoPageLastNameSubtext,
            this._personalInfoPageLastNameInputField,
            this._personalInfoPageEmailSubtext,
            this._personalInfoPageEmailInputField,
            this._personalInfoPagePasswordSubtext,
            this._personalInfoPagePasswordInputField,
            this._personalInfoPageViewPasswordButton,
            this._personalInfoPageNewPasswordSubtext,
            this._personalInfoPageNewPasswordInputField,
            this._personalInfoPageViewNewPasswordButton,
            this._personalInfoPageNewsletterSubtext,
            this._personalInfoPageNewsletterCheckbox,
            this._personalInfoPageSaveButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }
    }

}
module.exports = PersonalInfoPage;