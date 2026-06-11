# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E\Auth\signin.spec.js >> Verify Sign In Functionality >> Signin with invalid credentials
- Location: tests\E2E\Auth\signin.spec.js:40:3

# Error details

```
Error: locator.pressSequentially: Target page, context or browser has been closed
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { BaseTest } = require('../../BaseTest');
  3  | const logger = require('../../../utils/logger');
  4  | const expectedData = require('../../../testData/ExpectedData');
  5  | const fs = require('fs');
  6  | 
  7  | class Signin extends BaseTest {
  8  |   constructor() {
  9  |     super({ autoSignIn: false });
  10 |   }
  11 | }
  12 | 
  13 | test.describe('Verify Sign In Functionality', () => {
  14 |   const spec = new Signin();
  15 | 
  16 |   test('Signin with valid credentials', async () => {
  17 |     try {
  18 |       let serverError = false;
  19 | 
  20 |       spec.page.on('response', response => {
  21 |         if (response.status() >= 500) {
  22 |           serverError = true;
  23 |         }
  24 |       });
  25 | 
  26 |       await spec.signIn();
  27 | 
  28 |       if (serverError) {
  29 |         test.skip(true, 'Skipped due to server error — retry later');
  30 |       }
  31 | 
  32 |       const title = await spec.page.title();
  33 |       expect(title, 'Login succeeded but did not navigate to Insurer Management page').toContain(expectedData.signin.Title);
  34 |     } catch (error) {
  35 |       logger.error(`Test "Signin with valid credentials" failed: ${error.message}`);
  36 |       throw error;
  37 |     }
  38 |   });
  39 | 
  40 |   test('Signin with invalid credentials', async () => {
  41 |     try {
  42 |       logger.info('Signing in with invalid credentials: username=test, password=pis');
> 43 |       await spec.signinPage.getUsername.pressSequentially('test');
     |                                         ^ Error: locator.pressSequentially: Target page, context or browser has been closed
  44 |       await spec.signinPage.getPassword.pressSequentially('pis');
  45 |       await spec.signinPage.getSigninButton.click();
  46 |       const invalidSigninMessage = (await spec.signinPage.getLoginFailedMessage.textContent()).trim();
  47 |       logger.info(`Error message received: "${invalidSigninMessage}"`);
  48 |       expect(invalidSigninMessage).toContain(expectedData.signin.invalidMessage);
  49 |     } catch (error) {
  50 |       logger.error(`Test "Signin with invalid credentials" failed: ${error.message}`);
  51 |       throw error;
  52 |     }
  53 |   });
  54 | 
  55 |   test.afterEach(async ({}, testInfo) => {
  56 |     if (testInfo.title === 'Signin with valid credentials') {
  57 |       fs.writeFileSync('signin-result.json', JSON.stringify({ passed: testInfo.status === 'passed' }));
  58 |     }
  59 |   });
  60 | 
  61 | });
  62 | 
```