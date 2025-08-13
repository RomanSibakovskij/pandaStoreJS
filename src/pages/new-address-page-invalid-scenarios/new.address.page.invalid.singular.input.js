"use strict"

const {By} = require("selenium-webdriver");
const BasePage = require("../utilities/base.page.js");
const TestDataGenerator = require("../utilities/test.data.generator.js");
const Logger = require("../utilities/logger");

class NewAddressPageInvalidSingularInput extends BasePage{

    constructor(driver) {
        super(driver);

        //relevant web elements
        this._newAddressPageAliasInputField = By.xpath("//input[@name='alias']");
        this._newAddressPageFirstNameInputField = By.xpath("//input[@name='firstname']");
        this._newAddressPageLastNameInputField = By.xpath("//input[@name='lastname']");
        this._newAddressPageAddressOneInputField = By.xpath("//input[@name='address1']");
        this._newAddressPageCityInputField = By.xpath("//input[@name='city']");
        this._newAddressPagePostCodeInputField = By.xpath("//input[@name='postcode']");
        this._newAddressPagePhoneInputField = By.xpath("//input[@name='phone']");

        //invalid new address data input - no singular input
        this._noNewAddressFirstName = "";
        this._noNewAddressLastName = "";
    }

    //invalid user new address data input methods - no singular input
    async inputNoNewAddressFirstNameIntoAddressFirstNameInputField(){
        const addressFirstNameInputField = await this.driver.findElement(this._newAddressPageFirstNameInputField);
        await addressFirstNameInputField.clear();
        const noNewAddressFirstName = this._noNewAddressFirstName;
        Logger.info("No user new address first name: ", noNewAddressFirstName);
        await addressFirstNameInputField.sendKeys(noNewAddressFirstName);
    }
    async inputNoNewAddressLastNameIntoAddressLastNameInputField(){
        const addressLastNameInputField = await this.driver.findElement(this._newAddressPageLastNameInputField);
        await addressLastNameInputField.clear();
        const noNewAddressLastName = this._noNewAddressLastName;
        Logger.info("No user new address last name: ", noNewAddressLastName);
        await addressLastNameInputField.sendKeys(noNewAddressLastName);
    }

}
module.exports = NewAddressPageInvalidSingularInput;