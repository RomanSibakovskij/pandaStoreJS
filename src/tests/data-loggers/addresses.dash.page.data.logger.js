"use strict"

const Logger = require("../../pages/utilities/logger.js")
const BaseTest = require("../utilities/base.test");
const { AddressesDashboardPage } = require("../../pages/addresses.dashboard.page.js");

class AddressesDashPageDataLogger extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //addresses dashboard page data logger method
    async logAddressesDashPageData(){
        const addressesDashboardPage = new AddressesDashboardPage(this.driver);
        console.log("Displayed addresses dashboard page data: " + "\n")
        //log addresses dashboard page title(s)
        const addressesDashPageTitles = await addressesDashboardPage.getDisplayedUserAddressTitle();
        Logger.info("Addresses dashboard page address title(s): " + addressesDashPageTitles);
        //log addresses dashboard page address(es)
        const addressesDashPageAddresses = await addressesDashboardPage.getDisplayedUserAddress();
        Logger.info("Addresses dashboard page address address(es): " + addressesDashPageAddresses + "\n");
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = AddressesDashPageDataLogger;