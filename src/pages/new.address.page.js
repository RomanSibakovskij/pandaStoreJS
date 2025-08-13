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
        this._newAddressAddFailureMessage = By.xpath("//section[@id='notifications']");
        this._newAddressSingularInputErrorMessage = By.xpath("//div[@class='help-block  alert alert-danger']");

        const testDataGenerator = new TestDataGenerator(this.driver);

        //valid new address input data
        this._newAddressAlias = testDataGenerator.getRandomNewAddressAlias();
        this._newAddress = testDataGenerator.generateRandomAddress(8);
        this._newAddressCity = testDataGenerator.getRandomCity();
        this._newAddressPostCode = testDataGenerator.getRandomPostalCode();
    }

    //valid user new address data input methods
    async inputNewAddressAliasIntoAddressAliasInputField(){
        const addressAliasInputField = await this.driver.findElement(this._newAddressPageAliasInputField);
        const newAddressAlias = this._newAddressAlias;
        Logger.info("Valid user new address alias: ", newAddressAlias);
        await addressAliasInputField.sendKeys(newAddressAlias);
    }
    async inputNewAddressIntoAddressOneInputField(){
        const addressAliasInputField = await this.driver.findElement(this._newAddressPageAddressOneInputField);
        const newAddress = this._newAddress;
        Logger.info("Valid user new address: ", newAddress);
        await addressAliasInputField.sendKeys(newAddress);
    }
    async inputNewAddressCityIntoAddressCityInputField(){
        const addressCityInputField = await this.driver.findElement(this._newAddressPageCityInputField);
        const newAddressCity = this._newAddressCity;
        Logger.info("Valid user new address city: ", newAddressCity);
        await addressCityInputField.sendKeys(newAddressCity);
    }
    async inputNewAddressPostCodeIntoAddressPostCodeInputField(){
        const addressPostCodeInputField = await this.driver.findElement(this._newAddressPagePostCodeInputField);
        const newAddressPostCode = this._newAddressPostCode;
        Logger.info("Valid user new address post code: ", newAddressPostCode);
        await addressPostCodeInputField.sendKeys(newAddressPostCode);
    }

    //click "State" dropdown menu method
    async clickStateDropdownMenu(){
        const stateDropdownMenu = this.driver.findElement(this._newAddressPageStateDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: stateDropdownMenu }).click().perform();
    }

    //select "Please choose" state option method
    async selectChooseStateOption(){
        const newAddressChooseStateOption = await this.driver.findElement(this._newAddressPageSelectStateOption);
        newAddressChooseStateOption.click();
    }

    //select "Illinois" state option method
    async selectIllinoisStateOption(){
        const newAddressIllinoisStateOption = await this.driver.findElement(this._newAddressPageIllinoisStateOption);
        newAddressIllinoisStateOption.click();
    }

    //click "Country" dropdown menu method
    async clickCountryDropdownMenu(){
        const countryDropdownMenu = this.driver.findElement(this._newAddressPageCountryDropdownMenu);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: countryDropdownMenu }).click().perform();
    }

    //select "Please choose" country option method
    async selectChooseCountryOption(){
        const newAddressChooseCountryOption = await this.driver.findElement(this._newAddressPageSelectCountryOption);
        await newAddressChooseCountryOption.sendKeys(Key.ENTER);
    }

    //click "Save" button method
    async clickNewAddressSaveButton(){
        const newAddressSaveButton = this.driver.findElement(this._newAddressPageSaveButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: newAddressSaveButton }).click().perform();
    }

    //new address page text element getters
    async getNewAddressPageTitle(){
        const newAddressPageTitle = await this.driver.findElement(this._newAddressPageTitle);
        return await newAddressPageTitle.getText();
    }
    //input form
    async getNewAddressPageAliasSubtext(){
        const newAddressPageAliasSubtext = await this.driver.findElement(this._newAddressPageAliasSubtext);
        return await newAddressPageAliasSubtext.getText();
    }
    async getNewAddressPageFirstNameSubtext(){
        const newAddressPageFirstNameSubtext = await this.driver.findElement(this._newAddressPageFirstNameSubtext);
        return await newAddressPageFirstNameSubtext.getText();
    }
    async getNewAddressPageLastNameSubtext(){
        const newAddressPageLastNameSubtext = await this.driver.findElement(this._newAddressPageLastNameSubtext);
        return await newAddressPageLastNameSubtext.getText();
    }
    async getNewAddressPageCompanySubtext(){
        const newAddressPageCompanySubtext = await this.driver.findElement(this._newAddressPageCompanySubtext);
        return await newAddressPageCompanySubtext.getText();
    }
    async getNewAddressPageAddressOneSubtext(){
        const newAddressPageAddressOneSubtext = await this.driver.findElement(this._newAddressPageAddressOneSubtext);
        return await newAddressPageAddressOneSubtext.getText();
    }
    async getNewAddressPageAddressTwoSubtext(){
        const newAddressPageAddressTwoSubtext = await this.driver.findElement(this._newAddressPageAddressTwoSubtext);
        return await newAddressPageAddressTwoSubtext.getText();
    }
    async getNewAddressPageCitySubtext(){
        const newAddressPageCitySubtext = await this.driver.findElement(this._newAddressPageCitySubtext);
        return await newAddressPageCitySubtext.getText();
    }
    async getNewAddressPageStateSubtext(){
        const newAddressPageStateSubtext = await this.driver.findElement(this._newAddressPageStateSubtext);
        return await newAddressPageStateSubtext.getText();
    }
    async getNewAddressPagePostCodeSubtext(){
        const newAddressPagePostCodeSubtext = await this.driver.findElement(this._newAddressPagePostCodeSubtext);
        return await newAddressPagePostCodeSubtext.getText();
    }
    async getNewAddressPageCountrySubtext(){
        const newAddressPageCountrySubtext = await this.driver.findElement(this._newAddressPageCountrySubtext);
        return await newAddressPageCountrySubtext.getText();
    }
    async getNewAddressPagePhoneSubtext(){
        const newAddressPagePhoneSubtext = await this.driver.findElement(this._newAddressPagePhoneSubtext);
        return await newAddressPagePhoneSubtext.getText();
    }

    //new address page addition failure message getter
    async getNewAddressInfoAddFailureMessage(){
        const newAddressAddFailureMessage = await this.driver.findElement(this._newAddressAddFailureMessage);
        return await newAddressAddFailureMessage.getText();
    }
    //personal info page singular input error message getter
    async getNewAddressSingularInputErrorMsg(){
        const newAddressSingularInputErrorMsg = await this.driver.findElement(this._newAddressSingularInputErrorMessage);
        return await newAddressSingularInputErrorMsg.getText();
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