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

    describe("Invalid Add New User Address(es) Tests - Too Long Singular Input", () => {

        //Test 004m -> invalid add new user address test - too long first name (100 chars)(the new address addition doesn't get aborted, test has failed)
        test("Invalid Add New User Address Test - Too Long First Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - too long first name (100 chars)
            await testMethods.invalidAddNewUserAddressTooLongFirstNameTest();
        });

        //Test 004n -> invalid add new user address test - too long last name (100 chars)(the new address addition doesn't get aborted, test has failed)
        test("Invalid Add New User Address Test - Too Long Last Name", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - too long last name (100 chars)
            await testMethods.invalidAddNewUserAddressTooLongLastNameTest();
        });

        //Test 004o -> invalid add new user address test - too long address (100 chars)(the new address addition doesn't get aborted, test has failed)
        test("Invalid Add New User Address Test - Too Long Address", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - too long address (100 chars)
            await testMethods.invalidAddNewUserAddressTooLongAddressTest();
        });

        //Test 004p -> invalid add new user address test - too long city (100 chars)(the new address addition doesn't get aborted, test has failed)
        test("Invalid Add New User Address Test - Too Long City", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - too long city (100 chars)
            await testMethods.invalidAddNewUserAddressTooLongCityTest();
        });

        //Test 004q -> invalid add new user address test - too long post code (6 digits)
        test("Invalid Add New User Address Test - Too Long Post Code", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - too long post code (6 digits)
            await testMethods.invalidAddNewUserAddressTooLongPostCodeTest();
        });

    });

    describe("Invalid Add New User Address(es) Tests - Invalid Singular Input Format", () => {

        //Test 004r -> invalid add new user address test - invalid first name format (special symbols only)
        test("Invalid Add New User Address Test - Invalid First Name Format", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - invalid first name format (special symbols only)
            await testMethods.invalidAddNewUserAddressInvalidFirstNameFormatTest();
        });

        //Test 004s -> invalid add new user address test - invalid last name format (special symbols only)
        test("Invalid Add New User Address Test - Invalid Last Name Format", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - invalid last name format (special symbols only)
            await testMethods.invalidAddNewUserAddressInvalidLastNameFormatTest();
        });

        //Test 004t -> invalid add new user address test - invalid address format (special symbols only)(the new address addition doesn't get aborted, test has failed)
        test("Invalid Add New User Address Test - Invalid Address Format", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - invalid address format (special symbols only)
            await testMethods.invalidAddNewUserAddressInvalidAddressFormatTest();
        });

        //Test 004u -> invalid add new user address test - invalid city format (special symbols only)(the new address addition doesn't get aborted, test has failed)
        test("Invalid Add New User Address Test - Invalid City Format", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - invalid city format (special symbols only)
            await testMethods.invalidAddNewUserAddressInvalidCityFormatTest();
        });

        //Test 004v -> invalid add new user address test - invalid post code format (special symbols only)
        test("Invalid Add New User Address Test - Invalid Post Code Format", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //invalid add new user address test - invalid post code format (special symbols only)
            await testMethods.invalidAddNewUserAddressInvalidPostCodeFormatTest();
        });

    });

    describe("Remove New User Address Test", () => {

        //Test 005 -> remove new user address test
        test("Remove New User Address Test", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid add new user address test
            await testMethods.validAddNewUserAddressTest();
            //remove user address test
            await testMethods.removeUserAddressTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});