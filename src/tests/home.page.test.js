const TestMethods = require('./utilities/test.methods.js');
const BaseTest = require('./utilities/base.test.js');

describe('Home Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(140000) //timer for the whole single test run, otherwise throws a timeout error
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Navigate to Register Page Test", () => {

        //Test 001 -> navigate user to register page test
        test("User Navigation to Register Page Test", async function () {
            await testMethods.navigateToRegisterPageTest();
        });

    });

    describe("Add Single Featured Product To Cart Tests", () => {

        //Test 008 -> add single featured product ("Women's Fashion Block Moto Jackets") to cart test (as a guest) (the webpage is bugged -> additional random product is being added to cart without test script)
        test("Add Single Featured Product To Cart Test (as a guest)", async function () {
            await testMethods.addSingleFeaturedProductToCartTest();
        });

        //Test 008a -> add single featured product ("Women's Fashion Block Moto Jackets") to cart test (as a registered user) (the webpage is bugged -> additional random product is being added to cart without test script)
        test("Add Single Featured Product To Cart Test (as a registered user)", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid add new user address test
            await testMethods.validAddNewUserAddressTest();
            //add single featured product ("Women's Fashion Block Moto Jackets") to cart test (as a registered user)
            await testMethods.addSingleFeaturedProductToCartRegUserTest();
        });

    });

    describe("Add Multiple Featured Product To Cart Tests", () => {

        //Test 008b -> add multiple featured product ("Women's Heathered Middle Sleeve Shirt") to cart test (as a guest) (the webpage is bugged -> sometimes, additional random product is being added to cart without test script)
        test("Add Multiple Featured Product To Cart Test (as a guest)", async function () {
            await testMethods.addMultipleFeaturedProductToCartTest();
        });

        //Test 008c -> add multiple featured product ("Women's Heathered Middle Sleeve Shirt") to cart test (as a registered user) (the webpage is bugged -> sometimes, additional random product is being added to cart without test script)
        test("Add Multiple Featured Product To Cart Test (as a registered user)", async function () {
            //user navigation to register page test
            await testMethods.navigateToRegisterPageTest();
            //valid (male) user account creation test
            await testMethods.validUserAccountCreationTest();
            //valid add new user address test
            await testMethods.validAddNewUserAddressTest();
            //add multiple featured product ("Women's Heathered Middle Sleeve Shirt") to cart test (as a registered user)
            await testMethods.addMultipleFeaturedProductToCartRegUserTest();
        });

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});
