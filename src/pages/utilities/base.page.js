"use strict";

class BasePage{
    constructor(driver){this.driver = driver;}

    //wait method (for elements to load)
    async waitForElementLoad(timeout) {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

}

module.exports = BasePage;