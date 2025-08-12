const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Personal Info Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(80000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Valid Edit User Account Tests", () => {

        //Test 003 -> valid edit user (with login email) account test
        test("Valid Edit User (With Login Email) Account Test", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user (with login email) account test
            await testMethods.validEditAccountWithEmailTest();
        });

        //Test 003a -> valid edit user (with login password) account test
        test("Valid Edit User (With Login Password) Account Test", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid edit user (with login password) account test
            await testMethods.validEditAccountWithPasswordTest();
        });

    });

    describe("Invalid Edit User Account Tests - No Singular Input", () => {

        //Test 003b -> invalid edit user (with login email) account test - no edited first name
        test("Invalid Edit User Account Test - No Edited First Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user (with login email) account test - no edited first name
            await testMethods.invalidEditAccountNoFirstNameTest();
        });

        //Test 003c -> invalid edit user (with login email) account test - no edited last name
        test("Invalid Edit User Account Test - No Edited Last Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user (with login email) account test - no edited last name
            await testMethods.invalidEditAccountNoLastNameTest();
        });

        //Test 003d -> invalid edit user (with login email) account test - no edited email
        test("Invalid Edit User Account Test - No Edited Email", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user (with login email) account test - no edited email
            await testMethods.invalidEditAccountNoEmailTest();
        });

        //Test 003e -> invalid edit user (with login email) account test - no user password
        test("Invalid Edit User Account Test - No User Password", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user (with login email) account test - no user password
            await testMethods.invalidEditAccountNoPasswordTest();
        });

    });

    describe("Invalid Edit User Account Tests - Too Short Singular Input", () => {

        //Test 003f -> invalid edit user (with login email) account test - too short edited first name (1 char) (the edit account process doesn't get aborted, test has failed)
        test("Invalid Edit User Account Test - Too Short Edited First Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user (with login email) account test - too short edited first name (1 char)
            await testMethods.invalidEditAccountTooShortFirstNameTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});