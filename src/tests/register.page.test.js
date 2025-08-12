const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Register Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(60000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid User Account Creation Tests", () => {

        //Test 002 -> valid (male) user account creation test
        test("Valid (Male) User Account Creation Test", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
        });

        //Test 002a -> valid (female) user account creation test
        test("Valid (Female) User Account Creation Test", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (female) user account creation test
            await testMethods.validFemaleUserAccountCreationTest();
        });

    });

    describe("Invalid User Account Creation Tests - No Singular Input", () => {

        //Test 002b -> invalid (male) user account creation test - no user first name
        test("Invalid (Male) User Account Creation Test - No First Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid (male) user account creation test - no first name
            await testMethods.invalidUserAccountCreationNoFirstNameTest();
        });

        //Test 002c -> invalid (male) user account creation test - no user last name
        test("Invalid (Male) User Account Creation Test - No Last Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid (male) user account creation test - no last name
            await testMethods.invalidUserAccountCreationNoLastNameTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});