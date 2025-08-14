const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Login/Register Dashboard Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(95000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("User Logout Test", () => {

        //Test 006 -> user logout test
        test("User Logout Test", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid add new user address test
            await testMethods.validAddNewUserAddressTest();
            //user logout test
            await testMethods.userLogoutTest();
        });

    });

    describe("Valid User Login Tests", () => {

        //Test 007 -> valid user login test
        test("Valid User Login Test", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid add new user address test
            await testMethods.validAddNewUserAddressTest();
            //user logout test
            await testMethods.userLogoutTest();
            //valid user login test
            await testMethods.validUserLoginTest();
        });

        //Test 007a -> valid user login with edited email test
        test("Valid User Login With Edited Email Test", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user (with login email) account test
            await testMethods.validEditAccountWithEmailTest();
            //user logout test
            await testMethods.userLogoutTest();
            //valid user login with edited email test
            await testMethods.validUserLoginEditedEmailTest();
        });

        //Test 007b -> valid user login with edited password test
        test("Valid User Login With Edited Password Test", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user (with login password) account test
            await testMethods.validEditAccountWithPasswordTest();
            //user logout test
            await testMethods.userLogoutTest();
            //valid user login with edited password test
            await testMethods.validUserLoginEditedPasswordTest();
        });

    });

    describe("Invalid User Login Tests - No Singular Input", () => {

        //Test 007c -> invalid user login test - no login email
        test("Invalid User Login Test - No Login Email", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid add new user address test
            await testMethods.validAddNewUserAddressTest();
            //user logout test
            await testMethods.userLogoutTest();
            //invalid user login test - no login email
            await testMethods.invalidUserLoginNoEmailTest();
        });

        //Test 007d -> invalid user login test - no login password
        test("Invalid User Login Test - No Login Password", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid add new user address test
            await testMethods.validAddNewUserAddressTest();
            //user logout test
            await testMethods.userLogoutTest();
            //invalid user login test - no login password
            await testMethods.invalidUserLoginNoPasswordTest();
        });

    });

    describe("Invalid User Login Tests - Invalid Singular Input", () => {

        //Test 007e -> invalid user login test - invalid login email
        test("Invalid User Login Test - Invalid Login Email", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid add new user address test
            await testMethods.validAddNewUserAddressTest();
            //user logout test
            await testMethods.userLogoutTest();
            //invalid user login test - invalid login email
            await testMethods.invalidUserLoginInvalidEmailTest();
        });

        //Test 007f -> invalid user login test - invalid login email format
        test("Invalid User Login Test - Invalid Login Email Format", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid add new user address test
            await testMethods.validAddNewUserAddressTest();
            //user logout test
            await testMethods.userLogoutTest();
            //invalid user login test - invalid login email format
            await testMethods.invalidUserLoginInvalidEmailFormatTest();
        });

        //Test 007g -> invalid user login test - invalid login password format
        test("Invalid User Login Test - Invalid Login Password Format", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid add new user address test
            await testMethods.validAddNewUserAddressTest();
            //user logout test
            await testMethods.userLogoutTest();
            //invalid user login test - invalid login password format
            await testMethods.invalidUserLoginInvalidPasswordTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});