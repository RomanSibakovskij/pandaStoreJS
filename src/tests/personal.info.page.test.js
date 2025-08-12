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

        //Test 003b -> invalid edit user account test - no edited first name
        test("Invalid Edit User Account Test - No Edited First Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - no edited first name
            await testMethods.invalidEditAccountNoFirstNameTest();
        });

        //Test 003c -> invalid edit user account test - no edited last name
        test("Invalid Edit User Account Test - No Edited Last Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - no edited last name
            await testMethods.invalidEditAccountNoLastNameTest();
        });

        //Test 003d -> invalid edit user account test - no edited email
        test("Invalid Edit User Account Test - No Edited Email", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - no edited email
            await testMethods.invalidEditAccountNoEmailTest();
        });

        //Test 003e -> invalid edit user account test - no user password
        test("Invalid Edit User Account Test - No User Password", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - no user password
            await testMethods.invalidEditAccountNoPasswordTest();
        });

    });

    describe("Invalid Edit User Account Tests - Too Short Singular Input", () => {

        //Test 003f -> invalid edit user account test - too short edited first name (1 char) (the edit account process doesn't get aborted, test has failed)
        test("Invalid Edit User Account Test - Too Short Edited First Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - too short edited first name (1 char)
            await testMethods.invalidEditAccountTooShortFirstNameTest();
        });

        //Test 003g -> invalid edit user account test - too short edited last name (1 char) (the edit account process doesn't get aborted, test has failed)
        test("Invalid Edit User Account Test - Too Short Edited Last Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - too short edited last name (1 char)
            await testMethods.invalidEditAccountTooShortLastNameTest();
        });

        //Test 003h -> invalid edit user account test - too short edited email (1 char -> name, domain) (the edit account process doesn't get aborted, test has failed)
        test("Invalid Edit User Account Test - Too Short Edited Email", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - too short edited email (1 char -> name, domain)
            await testMethods.invalidEditAccountTooShortEmailTest();
        });

        //Test 003i -> invalid edit user account test - too short new password (7 chars)
        test("Invalid Edit User Account Test - Too Short New Password", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - too short new password (4 chars)
            await testMethods.invalidEditAccountTooShortNewPasswordTest();
        });

    });

    describe("Invalid Edit User Account Tests - Too Long Singular Input", () => {

        //Test 003j -> invalid edit user account test - too long edited first name (100 chars) (the edit account process doesn't get aborted, test has failed)
        test("Invalid Edit User Account Test - Too Long Edited First Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - too long edited first name (100 chars)
            await testMethods.invalidEditAccountTooLongFirstNameTest();
        });

        //Test 003k -> invalid edit user account test - too long edited last name (100 chars) (the edit account process doesn't get aborted, test has failed)
        test("Invalid Edit User Account Test - Too Long Edited Last Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - too long edited last name (100 chars)
            await testMethods.invalidEditAccountTooLongLastNameTest();
        });

        //Test 003l -> invalid edit user account test - too long edited email (100 chars -> name, domain)
        test("Invalid Edit User Account Test - Too Long Edited Email", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - too long edited email (100 chars -> name, domain)
            await testMethods.invalidEditAccountTooLongEmailTest();
        });

        //Test 003m -> invalid edit user account test - too long new password (73 chars) (the edit account process doesn't get aborted, test has failed)
        test("Invalid Edit User Account Test - Too Long New Password", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - too long new password (73 chars)
            await testMethods.invalidEditAccountTooLongNewPasswordTest();
        });

    });

    describe("Invalid Edit User Account Tests - Invalid Singular Input Format", () => {

        //Test 003n -> invalid edit user account test - invalid edited first name format (special symbols only)
        test("Invalid Edit User Account Test - Invalid Edited First Name Format", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - invalid edited first name format (special symbols only)
            await testMethods.invalidEditAccountInvalidFirstNameFormatTest();
        });

        //Test 003o -> invalid edit user account test - invalid edited last name format (special symbols only)
        test("Invalid Edit User Account Test - Invalid Edited Last Name Format", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user account test - invalid edited last name format (special symbols only)
            await testMethods.invalidEditAccountInvalidLastNameFormatTest();
        });

        //Test 003p -> invalid edit user (with login email) account test - invalid edited email format (missing '@')
        test("Invalid Edit User Account Test - Invalid Edited Email Format", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid edit user (with login email) account test - invalid edited email format (missing '@')
            await testMethods.invalidEditAccountInvalidEmailFormatTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});