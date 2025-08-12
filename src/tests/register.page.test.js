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

        //Test 002d -> invalid (male) user account creation test - no user email
        test("Invalid (Male) User Account Creation Test - No Email", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid (male) user account creation test - no user email
            await testMethods.invalidUserAccountCreationNoEmailTest();
        });

        //Test 002e -> invalid (male) user account creation test - no user password
        test("Invalid (Male) User Account Creation Test - No Password", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid (male) user account creation test - no user password
            await testMethods.invalidUserAccountCreationNoPasswordTest();
        });

    });

    describe("Invalid User Account Creation Tests - Too Short Singular Input", () => {

        //Test 002f -> invalid (male) user account creation test - too short user first name (1 char) (the user account was created, test has failed)
        test("Invalid (Male) User Account Creation Test - Too Short First Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid (male) user account creation test - too short user first name (1 char)
            await testMethods.invalidUserAccountCreationTooShortFirstNameTest();
        });

        //Test 002g -> invalid (male) user account creation test - too short user last name (1 char) (the user account was created, test has failed)
        test("Invalid (Male) User Account Creation Test - Too Short Last Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid (male) user account creation test - too short user last name (1 char)
            await testMethods.invalidUserAccountCreationTooShortLastNameTest();
        });

        //Test 002h -> invalid (male) user account creation test - too short user email (1 char -> name, domain) (the user account was created, test has failed)
        test("Invalid (Male) User Account Creation Test - Too Short Email", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid (male) user account creation test - too short user email (1 char -> name, domain)
            await testMethods.invalidUserAccountCreationTooShortEmailTest();
        });

        //Test 002i -> invalid (male) user account creation test - too short user password (7 chars)
        test("Invalid (Male) User Account Creation Test - Too Short Password", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid (male) user account creation test - too short user password (7 chars)
            await testMethods.invalidUserAccountCreationTooShortPasswordTest();
        });

    });

    describe("Invalid User Account Creation Tests - Too Long Singular Input", () => {

        //Test 002j -> invalid (male) user account creation test - too long user first name (100 chars) (the user account was created, test has failed)
        test("Invalid (Male) User Account Creation Test - Too Long First Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid (male) user account creation test - too long user first name (100 chars)
            await testMethods.invalidUserAccountCreationTooLongFirstNameTest();
        });

        //Test 002k -> invalid (male) user account creation test - too long user last name (100 chars) (the user account was created, test has failed)
        test("Invalid (Male) User Account Creation Test - Too Long Last Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid (male) user account creation test - too long user last name (100 chars)
            await testMethods.invalidUserAccountCreationTooLongLastNameTest();
        });

        //Test 002l -> invalid (male) user account creation test - too long user email (100 chars -> name, domain)
        test("Invalid (Male) User Account Creation Test - Too Long Email", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid (male) user account creation test - too long user email (100 chars -> name, domain)
            await testMethods.invalidUserAccountCreationTooLongEmailTest();
        });

        //Test 002m -> invalid (male) user account creation test - too long user password (75 chars)
        test("Invalid (Male) User Account Creation Test - Too Long Password", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //invalid (male) user account creation test - too long user password (75 chars)
            await testMethods.invalidUserAccountCreationTooLongPasswordTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});