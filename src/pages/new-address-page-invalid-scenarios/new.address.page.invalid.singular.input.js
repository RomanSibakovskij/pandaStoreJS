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

        const testDataGenerator = new TestDataGenerator(this.driver);

        //invalid new address data input - no singular input
        this._noNewAddressFirstName = "";
        this._noNewAddressLastName = "";
        this._noNewAddress = "";
        this._noNewAddressCity = "";
        this._noNewAddressPostCode = "";

        //invalid new address data input - too short singular input
        this._tooShortNewAddressFirstName = "C"; //1 char
        this._tooShortNewAddressLastName = "S"; //1 char
        this._tooShortNewAddress = "3.D"; //3 chars
        this._tooShortNewAddressCity = "D"; //1 char
        this._tooShortNewAddressPostCode = 5643; //4 digits

        //invalid new address data input - too long singular input
        this._tooLongNewAddressFirstName = "Chfgdsgdtwetrtjdsfgrfdgjhkjmngbfdsfffhkjgsedhgtfgsdetgtujyfdsfgdfsdffdgfdhgdvcxvcfghfgjjfggfdfgddgfd"; //100 chars
        this._tooLongNewAddressLastName = "Shfgdsgdtwetrtjdsfgrfdgjhkjmngbfdsfffhkjgsedhgtfgsdetgtujyfdsfgdfsdffdgfdhgdvcxvcfghfgjjfggfdfgddgfd"; //100 chars
        this._tooLongNewAddress = testDataGenerator.generateRandomAddress(93); //3 chars
        this._tooLongNewAddressCity = "Dhfgdsgdtwetrtjdsfgrfdgjhkjmngbfdsfffhkjgsedhgtfgsdetgtujyfdsfgdfsdffdgfdhgdvcxvcfghfgjjfggfdfgddgfd"; //100 chars
        this._tooLongNewAddressPostCode = 567243; //6 digits

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
    async inputNoNewAddressIntoAddressOneInputField(){
        const addressAliasInputField = await this.driver.findElement(this._newAddressPageAddressOneInputField);
        const noNewAddress = this._noNewAddress;
        Logger.info("No user new address: ", noNewAddress);
        await addressAliasInputField.sendKeys(noNewAddress);
    }
    async inputNoNewAddressCityIntoAddressCityInputField(){
        const addressCityInputField = await this.driver.findElement(this._newAddressPageCityInputField);
        const noNewAddressCity = this._noNewAddressCity;
        Logger.info("No user new address city: ", noNewAddressCity);
        await addressCityInputField.sendKeys(noNewAddressCity);
    }
    async inputNoNewAddressPostCodeIntoAddressPostCodeInputField(){
        const addressPostCodeInputField = await this.driver.findElement(this._newAddressPagePostCodeInputField);
        const noNewAddressPostCode = this._noNewAddressPostCode;
        Logger.info("No user new address post code: ", noNewAddressPostCode);
        await addressPostCodeInputField.sendKeys(noNewAddressPostCode);
    }

    //invalid user new address data input methods - too short singular input
    async inputTooShortNewAddressFirstNameIntoAddressFirstNameInputField(){
        const addressFirstNameInputField = await this.driver.findElement(this._newAddressPageFirstNameInputField);
        await addressFirstNameInputField.clear();
        const tooShortNewAddressFirstName = this._tooShortNewAddressFirstName;
        Logger.info("Too short new address first name: ", tooShortNewAddressFirstName);
        await addressFirstNameInputField.sendKeys(tooShortNewAddressFirstName);
    }
    async inputTooShortNewAddressLastNameIntoAddressLastNameInputField(){
        const addressLastNameInputField = await this.driver.findElement(this._newAddressPageLastNameInputField);
        await addressLastNameInputField.clear();
        const tooShortNewAddressLastName = this._tooShortNewAddressLastName;
        Logger.info("Too short new address last name: ", tooShortNewAddressLastName);
        await addressLastNameInputField.sendKeys(tooShortNewAddressLastName);
    }
    async inputTooShortNewAddressIntoAddressOneInputField(){
        const addressAliasInputField = await this.driver.findElement(this._newAddressPageAddressOneInputField);
        const tooShortNewAddress = this._tooShortNewAddress;
        Logger.info("Too short new address: ", tooShortNewAddress);
        await addressAliasInputField.sendKeys(tooShortNewAddress);
    }
    async inputTooShortNewAddressCityIntoAddressCityInputField(){
        const addressCityInputField = await this.driver.findElement(this._newAddressPageCityInputField);
        const tooShortNewAddressCity = this._tooShortNewAddressCity;
        Logger.info("Too short new address city: ", tooShortNewAddressCity);
        await addressCityInputField.sendKeys(tooShortNewAddressCity);
    }
    async inputTooShortNewAddressPostCodeIntoAddressPostCodeInputField(){
        const addressPostCodeInputField = await this.driver.findElement(this._newAddressPagePostCodeInputField);
        const tooShortNewAddressPostCode = this._tooShortNewAddressPostCode;
        Logger.info("Too short new address post code: ", tooShortNewAddressPostCode);
        await addressPostCodeInputField.sendKeys(tooShortNewAddressPostCode);
    }

    //invalid user new address data input methods - too long singular input
    async inputTooLongNewAddressFirstNameIntoAddressFirstNameInputField(){
        const addressFirstNameInputField = await this.driver.findElement(this._newAddressPageFirstNameInputField);
        await addressFirstNameInputField.clear();
        const tooLongNewAddressFirstName = this._tooLongNewAddressFirstName;
        Logger.info("Too long new address first name: ", tooLongNewAddressFirstName);
        await addressFirstNameInputField.sendKeys(tooLongNewAddressFirstName);
    }
    async inputTooLongNewAddressLastNameIntoAddressLastNameInputField(){
        const addressLastNameInputField = await this.driver.findElement(this._newAddressPageLastNameInputField);
        await addressLastNameInputField.clear();
        const tooLongNewAddressLastName = this._tooLongNewAddressLastName;
        Logger.info("Too long new address last name: ", tooLongNewAddressLastName);
        await addressLastNameInputField.sendKeys(tooLongNewAddressLastName);
    }
    async inputTooLongNewAddressIntoAddressOneInputField(){
        const addressAliasInputField = await this.driver.findElement(this._newAddressPageAddressOneInputField);
        const tooLongNewAddress = this._tooLongNewAddress;
        Logger.info("Too long new address: ", tooLongNewAddress);
        await addressAliasInputField.sendKeys(tooLongNewAddress);
    }
    async inputTooLongNewAddressCityIntoAddressCityInputField(){
        const addressCityInputField = await this.driver.findElement(this._newAddressPageCityInputField);
        const tooLongNewAddressCity = this._tooLongNewAddressCity;
        Logger.info("Too long new address city: ", tooLongNewAddressCity);
        await addressCityInputField.sendKeys(tooLongNewAddressCity);
    }
    async inputTooLongNewAddressPostCodeIntoAddressPostCodeInputField(){
        const addressPostCodeInputField = await this.driver.findElement(this._newAddressPagePostCodeInputField);
        const tooLongNewAddressPostCode = this._tooLongNewAddressPostCode;
        Logger.info("Too long new address post code: ", tooLongNewAddressPostCode);
        await addressPostCodeInputField.sendKeys(tooLongNewAddressPostCode);
    }

}
module.exports = NewAddressPageInvalidSingularInput;