"use strict"

const {By, Key} = require("selenium-webdriver");
const BasePage = require("./utilities/base.page.js");
const TestDataGenerator = require("./utilities/test.data.generator.js");
const Logger = require("./utilities/logger");

class NewAddressPage extends BasePage {

    constructor(driver) {
        super(driver);

        //new address page web elements
        this._newAddressPageTitle = By.xpath("//section[@id='main']/h3");
        //input form
        this._newAddressPageAliasSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_alias']/label");
        this._newAddressPageAliasInputField = By.xpath("//input[@name='alias']");
        this._newAddressPageFirstNameSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_firstname']/label");
        this._newAddressPageFirstNameInputField = By.xpath("//input[@name='firstname']");
        this._newAddressPageLastNameSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_lastname']/label");
        this._newAddressPageLastNameInputField = By.xpath("//input[@name='lastname']");
        this._newAddressPageCompanySubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_company']/label");
        this._newAddressPageCompanyInputField = By.xpath("//input[@name='company']");
        this._newAddressPageAddressOneSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_address1']/label");
        this._newAddressPageAddressOneInputField = By.xpath("//input[@name='address1']");
        this._newAddressPageAddressTwoSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_address2']/label");
        this._newAddressPageAddressTwoInputField = By.xpath("//input[@name='address2']");
        this._newAddressPageCitySubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_city']/label");
        this._newAddressPageCityInputField = By.xpath("//input[@name='city']");
        this._newAddressPageStateSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_id_state']/label");
        this._newAddressPageStateDropdownMenu = By.xpath("//select[@name='id_state']");
        this._newAddressPageIllinoisStateOption = By.xpath("//select[@name='id_state']/option[@value='16']");
        this._newAddressPageSelectStateOption = By.xpath("//select[@name='id_state']/option[1]");
        this._newAddressPagePostCodeSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_postcode']/label");
        this._newAddressPagePostCodeInputField = By.xpath("//input[@name='postcode']");
        this._newAddressPageCountrySubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_id_country']/label");
        this._newAddressPageCountryDropdownMenu = By.xpath("//select[@name='id_country']");
        this._newAddressPageSelectCountryOption = By.xpath("//select[@name='id_country']/option[1]");
        this._newAddressPagePhoneSubtext = By.xpath("//div[@class='form-group form-group-small  st_form_item_phone']/label");
        this._newAddressPagePhoneInputField = By.xpath("//input[@name='phone']");
        this._newAddressPageSaveButton = By.xpath("//button[@class='btn btn-default form-control-submit']");
        //input error message elements
        this._newAddressAddFailureMessage = By.xpath("//aside[@id='notifications']");
        this._newAddressSingularInputErrorMessage = By.xpath("//div[@class='help-block  alert alert-danger']");
    }

    //new address page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isNewAddressPageWebElementDisplayed(){
        const elementsToCheck = [
            this._newAddressPageTitle,
            this._newAddressPageAliasSubtext,
            this._newAddressPageAliasInputField,
            this._newAddressPageFirstNameSubtext,
            this._newAddressPageFirstNameInputField,
            this._newAddressPageLastNameSubtext,
            this._newAddressPageLastNameInputField,
            this._newAddressPageCompanySubtext,
            this._newAddressPageCompanyInputField,
            this._newAddressPageAddressOneSubtext,
            this._newAddressPageAddressOneInputField,
            this._newAddressPageAddressTwoSubtext,
            this._newAddressPageAddressTwoInputField,
            this._newAddressPageCitySubtext,
            this._newAddressPageCityInputField,
            this._newAddressPageStateSubtext,
            this._newAddressPageStateDropdownMenu,
            this._newAddressPagePostCodeSubtext,
            this._newAddressPagePostCodeInputField,
            this._newAddressPageCountrySubtext,
            this._newAddressPageCountryDropdownMenu,
            this._newAddressPagePhoneSubtext,
            this._newAddressPagePhoneInputField,
            this._newAddressPageSaveButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { NewAddressPage };