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

        const testDataGenerator = new TestDataGenerator(this.driver);
        const registerPage = new RegisterPage(this.driver);

        //valid edited account input data
        const { editedFirstName, editedLastName } = testDataGenerator.getRandomEditedName();
        this._editedFirstName = editedFirstName;
        this._editedLastName =  editedLastName;
        this._editedEmail = testDataGenerator.generateRandomEditedEmailAddress(8);
        this._oldPassword = registerPage.getPassword();
        this._newPassword = "Kankterdsad@#";
    }

    //click "View Password" button method
    async clickViewPersonalInfoPasswordButton(){
        const personalInfoViewPasswordButton = this.driver.findElement(this._personalInfoPageViewPasswordButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: personalInfoViewPasswordButton }).click().perform();
    }

    //click "View New Password" button method
    async clickViewPersonalInfoNewPasswordButton(){
        const personalInfoViewNewPasswordButton = this.driver.findElement(this._personalInfoPageViewNewPasswordButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: personalInfoViewNewPasswordButton }).click().perform();
    }

    //click "Save" button method
    async clickSaveButton(){
        const personalInfoSaveButton = this.driver.findElement(this._personalInfoPageSaveButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: personalInfoSaveButton }).click().perform();
    }

    //valid user edited data input methods
    async inputEditedFirstNameIntoFirstNameInputField(){
        const editedFirstNameInputField = await this.driver.findElement(this._personalInfoPageFirstNameInputField);
        await editedFirstNameInputField.clear();
        const editedFirstName = this._editedFirstName;
        Logger.info("Valid edited user first name: ", editedFirstName);
        await editedFirstNameInputField.sendKeys(editedFirstName);
    }
    async inputEditedLastNameIntoLastNameInputField(){
        const editedLastNameInputField = await this.driver.findElement(this._personalInfoPageLastNameInputField);
        await editedLastNameInputField.clear();
        const editedLastName = this._editedLastName;
        Logger.info("Valid edited user last name: ", editedLastName);
        await editedLastNameInputField.sendKeys(editedLastName);
    }
    async inputEditedEmailIntoEmailInputField(){
        const editedEmailInputField = await this.driver.findElement(this._personalInfoPageEmailInputField);
        await editedEmailInputField.clear();
        const editedEmail = this._editedEmail;
        Logger.info("Valid edited user email: ", editedEmail);
        await editedEmailInputField.sendKeys(editedEmail);
    }
    async inputOldPasswordIntoOldPasswordInputField(){
        const editedOldPasswordInputField = await this.driver.findElement(this._personalInfoPagePasswordInputField);
        const oldPassword = await this._oldPassword;
        Logger.info("Valid user old password: ", oldPassword);
        await editedOldPasswordInputField.sendKeys(oldPassword);
    }
    async inputNewPasswordIntoNewPasswordInputField(){
        const editedNewPasswordInputField = await this.driver.findElement(this._personalInfoPageNewPasswordInputField);
        const newPassword = this._newPassword;
        Logger.info("Valid user new password: ", newPassword);
        await editedNewPasswordInputField.sendKeys(newPassword);
    }

    //personal info page information update success message getter
    async getPersonalInfoUpdateSuccessMessage(){
        const personalInfoUpdateSuccessMessage = await this.driver.findElement(this._personalInfoEditSuccessMessage);
        return await personalInfoUpdateSuccessMessage.getText();
    }

    //personal information page text element getters
    async getPersonalInfoPageTitle(){
        const personalInfoTitle = await this.driver.findElement(this._personalInfoPageTitle);
        return await personalInfoTitle.getText();
    }
    //input form
    async getPersonalInfoSocialSubtext(){
        const personalInfoSocialSubtext = await this.driver.findElement(this._personalInfoPageSocialSubtext);
        return await personalInfoSocialSubtext.getText();
    }
    async getPersonalInfoMrRadioSubtext(){
        const personalInfoMrRadioButtonSubtext = await this.driver.findElement(this._personalInfoPageMrRadioSubtext);
        return await personalInfoMrRadioButtonSubtext.getText();
    }
    async getPersonalInfoMrsRadioSubtext(){
        const personalInfoMrsRadioButtonSubtext = await this.driver.findElement(this._personalInfoPageMrsRadioSubtext);
        return await personalInfoMrsRadioButtonSubtext.getText();
    }
    async getPersonalInfoFirstNameSubtext(){
        const personalInfoFirstNameSubtext = await this.driver.findElement(this._personalInfoPageFirstNameSubtext);
        return await personalInfoFirstNameSubtext.getText();
    }
    async getPersonalInfoLastNameSubtext(){
        const personalInfoLastNameSubtext = await this.driver.findElement(this._personalInfoPageLastNameSubtext);
        return await personalInfoLastNameSubtext.getText();
    }
    async getPersonalInfoEmailSubtext(){
        const personalInfoEmailSubtext = await this.driver.findElement(this._personalInfoPageEmailSubtext);
        return await personalInfoEmailSubtext.getText();
    }
    async getPersonalInfoPasswordSubtext(){
        const personalInfoPasswordSubtext = await this.driver.findElement(this._personalInfoPagePasswordSubtext);
        return await personalInfoPasswordSubtext.getText();
    }
    async getPersonalInfoNewPasswordSubtext(){
        const personalInfoNewPasswordSubtext = await this.driver.findElement(this._personalInfoPageNewPasswordSubtext);
        return await personalInfoNewPasswordSubtext.getText();
    }
    async getPersonalInfoNewsletterSubtext(){
        const personalInfoNewsletterSubtext = await this.driver.findElement(this._personalInfoPageNewsletterSubtext);
        return await personalInfoNewsletterSubtext.getText();
    }

    //private data getters
    async getEditedEmail(){return this._editedEmail;}
    async getEditedPassword(){return this._newPassword;}

    //personal information page web element assert method
    async isElementDisplayed(locator) {
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isPersonalInformationPageWebElementDisplayed() {
        const elementsToCheck = [
            this._personalInfoPageTitle,
            this._personalInfoPageSocialSubtext,
            this._personalInfoPageMrRadioSubtext,
            //this._personalInfoPageMrRadioButton,
            this._personalInfoPageMrsRadioSubtext,
            //this._personalInfoPageMrsRadioButton,
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
            //this._personalInfoPageNewsletterCheckbox,
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
module.exports = { PersonalInfoPage };