# pandaStoreJS

Selenium test suite on basic e-commerce web app functionality (various product addition to / quantity update / removal from shopping cart) The test suite captures screenshots at the end of test case run (for logging purposes). Due to bugged product(s) addition to cart, further testing is postponed until the issue will be fixed (same applies to wishlist/loved items testing)

#Tech Requirements:
 
 1.Node.js (20.x and above)

 2.Jest
 
 3.IntelliJ IDEA (or another IDE)

 4. Selenium 4.32 and above
    
 5. ESLint 9.x

#Setup

1. Clone this repository into IntelliJ(or other IDE) workspace folder (or wherever the project can be launched by IDE)
2. Open the IDE and open the project folder
3. Install Node.js
4. Make sure JavaScript/TypeScript plugins are enabled in the IDE.
5. Install and configure Jest (enter in IDE terminal: npm install --save-dev jest)
6. Install ESLint with cmd in IDE terminal: npm init @eslint/config@latest
7. Run the test suite on the IDE (to run ESLint input in the terminal: npm run lint)

## Test Case List

//Navigate to Register Page Test

1.	//Test 001 -> navigate user to register page test

//Valid User Account Creation Tests

1.	//Test 002 -> valid (male) user account creation test
2.	//Test 002a -> valid (female) user account creation test

//Invalid User Account Creation Tests - No Singular Input

1.	//Test 002b -> invalid (male) user account creation test - no user first name
2.	//Test 002c -> invalid (male) user account creation test - no user last name
3.	//Test 002d -> invalid (male) user account creation test - no user email
4.	//Test 002e -> invalid (male) user account creation test - no user password

//Invalid User Account Creation Tests - Too Short Singular Input

1.	//Test 002f -> invalid (male) user account creation test - too short user first name (1 char) (the user account was created, test has failed)
2.	//Test 002g -> invalid (male) user account creation test - too short user last name (1 char) (the user account was created, test has failed)
3.	//Test 002h -> invalid (male) user account creation test - too short user email (1 char -> name, domain) (the user account was created, test has failed)
4.	//Test 002i -> invalid (male) user account creation test - too short user password (7 chars)

//Invalid User Account Creation Tests - Too Long Singular Input

1.	//Test 002j -> invalid (male) user account creation test - too long user first name (100 chars) (the user account was created, test has failed)
2.	//Test 002k -> invalid (male) user account creation test - too long user last name (100 chars) (the user account was created, test has failed)
3.	//Test 002l -> invalid (male) user account creation test - too long user email (100 chars -> name, domain)
4.	//Test 002m -> invalid (male) user account creation test - too long user password (75 chars)

//Invalid User Account Creation Tests - Invalid Singular Input Format

1.	//Test 002n -> invalid (male) user account creation test - invalid user first name format (special symbols only)
2.	//Test 002o -> invalid (male) user account creation test - invalid user last name format (special symbols only)
3.	//Test 002p -> invalid (male) user account creation test - invalid user email format (missing '@')
4.	//Test 002q -> invalid (male) user account creation test - existing user email (used beforehand in manual testing)
5.	//Test 002q -> invalid (male) user account creation test - invalid user password format (similar lowercases only)

//Valid Edit User Account Tests

1.	//Test 003 -> valid edit user (with login email) account test
2.	//Test 003a -> valid edit user (with login password) account test

//Invalid Edit User Account Tests - No Singular Input

1.	//Test 003b -> invalid edit user account test - no edited first name
2.	//Test 003c -> invalid edit user account test - no edited last name
3.	//Test 003d -> invalid edit user account test - no edited email
4.	//Test 003e -> invalid edit user account test - no user password

//Invalid Edit User Account Tests - Too Short Singular Input

1.	//Test 003f -> invalid edit user account test - too short edited first name (1 char) (the edit account process doesn't get aborted, test has failed)
2.	//Test 003g -> invalid edit user account test - too short edited last name (1 char) (the edit account process doesn't get aborted, test has failed)
3.	//Test 003h -> invalid edit user account test - too short edited email (1 char -> name, domain) (the edit account process doesn't get aborted, test has failed)
4.	//Test 003i -> invalid edit user account test - too short new password (7 chars)

//Invalid Edit User Account Tests - Too Long Singular Input

1.	//Test 003j -> invalid edit user account test - too long edited first name (100 chars) (the edit account process doesn't get aborted, test has failed)
2.	//Test 003k -> invalid edit user account test - too long edited last name (100 chars) (the edit account process doesn't get aborted, test has failed)
3.	//Test 003l -> invalid edit user account test - too long edited email (100 chars -> name, domain)
4.	//Test 003m -> invalid edit user account test - too long new password (73 chars) (the edit account process doesn't get aborted, test has failed)

//Invalid Edit User Account Tests - Invalid Singular Input Format

1.	//Test 003n -> invalid edit user account test - invalid edited first name format (special symbols only)
2.	//Test 003o -> invalid edit user account test - invalid edited last name format (special symbols only)
3.	//Test 003p -> invalid edit user account test - invalid edited email format (missing '@')
4.	//Test 003q -> invalid edit user account test - existing email (used beforehand in manual testing) (the user account gets updated, test has failed)
5.	//Test 003r -> invalid edit user account test - invalid new password format (similar lowercases only)

//Valid Add New User Address(es) Tests

1.	//Test 004 -> valid add new user address test
2.	//Test 004a -> valid add additional new user address test

//Invalid Add New User Address(es) Tests - No Singular Input

1.	//Test 004b -> invalid add new user address test - no country (the element fails to be interacted with -> whether with click or sendKeys, test has failed)
2.	//Test 004c -> invalid add new user address test - no state
3.	//Test 004d -> invalid add new user address test - no first name
4.	//Test 004e -> invalid add new user address test - no last name
5.	//Test 004f -> invalid add new user address test - no address
6.	//Test 004g -> invalid add new user address test - no city
7.	//Test 004h -> invalid add new user address test - no post code

//Invalid Add New User Address(es) Tests - Too Short Singular Input

1.	//Test 004i -> invalid add new user address test - too short first name (1 char)(the new address addition doesn't get aborted, test has failed)
2.	//Test 004j -> invalid add new user address test - too short last name (1 char)(the new address addition doesn't get aborted, test has failed)
3.	//Test 004k -> invalid add new user address test - too short address (3 chars)(the new address addition doesn't get aborted, test has failed)
4.	//Test 004k -> invalid add new user address test - too short city (1 char)(the new address addition doesn't get aborted, test has failed)
5.	//Test 004l -> invalid add new user address test - too short post code (4 digits)

//Invalid Add New User Address(es) Tests - Too Long Singular Input

1.	//Test 004m -> invalid add new user address test - too long first name (100 chars)(the new address addition doesn't get aborted, test has failed)
2.	//Test 004n -> invalid add new user address test - too long last name (100 chars)(the new address addition doesn't get aborted, test has failed)
3.	//Test 004o -> invalid add new user address test - too long address (100 chars)(the new address addition doesn't get aborted, test has failed)
4.	//Test 004p -> invalid add new user address test - too long city (100 chars)(the new address addition doesn't get aborted, test has failed)
5.	//Test 004q -> invalid add new user address test - too long post code (6 digits)

//Invalid Add New User Address(es) Tests - Invalid Singular Input Format

1.	//Test 004r -> invalid add new user address test - invalid first name format (special symbols only)
2.	//Test 004s -> invalid add new user address test - invalid last name format (special symbols only)
3.	//Test 004t -> invalid add new user address test - invalid address format (special symbols only)
4.	//Test 004u -> invalid add new user address test - invalid city format (special symbols only)
5.	//Test 004v -> invalid add new user address test - invalid post code format (special symbols only)

//Remove New User Address Test

1.	//Test 005 -> remove new user address test

//User Logout Test

1.	//Test 006 -> user logout test

//Valid User Login Tests

1.	//Test 007 -> valid user login test
2.	//Test 007a -> valid user login with edited email test
3.	//Test 007b -> valid user login with edited password test

//Invalid User Login Tests - No Singular Input

1.	//Test 007c -> invalid user login test - no login email
2.	//Test 007d -> invalid user login test - no login password

//Invalid User Login Tests - Invalid Singular Input

1.	//Test 007e -> invalid user login test - invalid login email
2.	//Test 007f -> invalid user login test - invalid login email format
3.	//Test 007g -> invalid user login test - invalid login password format

//Add Single Featured Product To Cart Tests

1.	//Test 008 -> add single featured product ("Women's Fashion Block Moto Jackets") to cart test (as a guest) (the webpage is bugged -> additional random product is being added to cart without test script)
2.	//Test 008a -> add single featured product ("Women's Fashion Block Moto Jackets") to cart test (as a registered user) (the webpage is bugged -> additional random product is being added to cart without test script)

//Add Multiple Featured Product To Cart Tests

1.	//Test 008b -> add multiple featured product ("Women's Heathered Middle Sleeve Shirt") to cart test (as a guest) (the webpage is bugged -> additional random product is being added to cart without test script)
2.	//Test 008c -> add multiple featured product ("Women's Heathered Middle Sleeve Shirt") to cart test (as a registered user) (the webpage is bugged -> additional random product is being added to cart without test script)

//Add Single New Product To Cart Tests

1.	//Test 009 -> add single new product ("Daily Black Crew Neck Shirt") to cart test (as a guest) (the webpage is bugged -> additional random product is being added to cart without test script)
2.	//Test 009a -> add single new product ("Blue Long Denim Shirt") to cart test (as a registered user) (the webpage is bugged -> additional random product is being added to cart without test script)

//Add Multiple New Products To Cart Tests

1.	//Test 009b -> add multiple new products ("Daily Black Crew Neck Shirt") to cart test (as a guest) (the webpage is bugged -> additional random product is being added to cart without test script and the quantity doesn't change)
2.	//Test 009c -> add multiple new products ("Blue Long Denim Shirt") to cart test (as a registered user) (the webpage is bugged -> additional random product is being added to cart without test script)
