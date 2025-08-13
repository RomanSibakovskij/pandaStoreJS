"use strict"

const BaseTest = require("./base.test");
const {join } = require("node:path");
const {writeFileSync, mkdirSync} = require("node:fs");

class ScreenshotClass extends BaseTest{

    constructor(driver) {
        super();
        this.driver = driver;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //screenshot utility
    static async captureScreenshot(driver, fileName) {
        try {
            await driver.sleep(1500); //wait for the screenshot to be taken
            const screenshot = await driver.takeScreenshot();
            const baseDir = join(__dirname, '../screenshots');
            mkdirSync(baseDir, {recursive: true});
            const filePath = join(baseDir, `${fileName.replace(/[^a-zA-Z0-9-_()]/g, ' ')}.png`);

            // Save the screenshot to the file
            writeFileSync(filePath, screenshot, 'base64');

            console.log(`Screenshot saved at: ${filePath}`);
        } catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
module.exports = ScreenshotClass;