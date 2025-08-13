const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('New Address Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(95000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid Add New User Address(es) Tests", () => {

        //Test 004 -> valid add new user address test
        test("Valid Add New User Address Test", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid add new user address test
            await testMethods.validAddNewUserAddressTest();
        });

        //Test 004a -> valid add additional new user address test
        test("Valid Add Additional New User Address Test", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid add new user address test
            await testMethods.validAddNewUserAddressTest();
            //add additional user address test
            await testMethods.validAddAdditionalNewUserAddressTest();
        });

    });

    describe("Invalid Add New User Address(es) Tests - No Singular Input", () => {

        //Test 004b -> invalid add new user address test - no country (the element fails to be interacted with -> whether with click or sendKeys, test has failed)
        test("Invalid Add New User Address Test - No Country", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - no country
            await testMethods.invalidAddNewUserAddressNoCountryTest();
        });

        //Test 004c -> invalid add new user address test - no state
        test("Invalid Add New User Address Test - No State", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - no state
            await testMethods.invalidAddNewUserAddressNoStateTest();
        });

    });



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});