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

        //Test 004d -> invalid add new user address test - no first name
        test("Invalid Add New User Address Test - No First Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - no first name
            await testMethods.invalidAddNewUserAddressNoFirstNameTest();
        });

        //Test 004e -> invalid add new user address test - no last name
        test("Invalid Add New User Address Test - No Last Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - no last name
            await testMethods.invalidAddNewUserAddressNoLastNameTest();
        });

        //Test 004f -> invalid add new user address test - no address
        test("Invalid Add New User Address Test - No Address", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - no address
            await testMethods.invalidAddNewUserAddressNoAddressTest();
        });

        //Test 004g -> invalid add new user address test - no city
        test("Invalid Add New User Address Test - No City", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - no city
            await testMethods.invalidAddNewUserAddressNoCityTest();
        });

        //Test 004h -> invalid add new user address test - no post code
        test("Invalid Add New User Address Test - No Post Code", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - no post code
            await testMethods.invalidAddNewUserAddressNoPostCodeTest();
        });

    });

    describe("Invalid Add New User Address(es) Tests - Too Short Singular Input", () => {

        //Test 004i -> invalid add new user address test - too short first name (1 char)(the new address addition doesn't get aborted, test has failed)
        test("Invalid Add New User Address Test - Too Short First Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - too short first name (1 char)
            await testMethods.invalidAddNewUserAddressTooShortFirstNameTest();
        });

        //Test 004j -> invalid add new user address test - too short last name (1 char)(the new address addition doesn't get aborted, test has failed)
        test("Invalid Add New User Address Test - Too Short Last Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - too short last name (1 char)
            await testMethods.invalidAddNewUserAddressTooShortLastNameTest();
        });

        //Test 004k -> invalid add new user address test - too short address (3 chars)(the new address addition doesn't get aborted, test has failed)
        test("Invalid Add New User Address Test - Too Short Address", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - too short address (3 chars)
            await testMethods.invalidAddNewUserAddressTooShortAddressTest();
        });

        //Test 004k -> invalid add new user address test - too short city (1 char)(the new address addition doesn't get aborted, test has failed)
        test("Invalid Add New User Address Test - Too Short City", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - too short city (1 char)
            await testMethods.invalidAddNewUserAddressTooShortCityTest();
        });

        //Test 004l -> invalid add new user address test - too short post code (4 digits)
        test("Invalid Add New User Address Test - Too Short Post Code", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - too short post code (4 digits)
            await testMethods.invalidAddNewUserAddressTooShortPostCodeTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});