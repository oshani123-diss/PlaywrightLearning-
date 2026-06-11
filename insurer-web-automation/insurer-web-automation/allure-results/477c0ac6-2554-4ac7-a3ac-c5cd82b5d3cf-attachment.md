# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2E\Auth\signin.spec.js >> Verify Sign In Functionality >> Signin with valid credentials
- Location: tests\E2E\Auth\signin.spec.js:16:3

# Error details

```
Error: page.goto: net::ERR_CERT_AUTHORITY_INVALID at https://aetqa.ad.infomc.com/A/insurerweb
Call log:
  - navigating to "https://aetqa.ad.infomc.com/A/insurerweb", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const SigninPage   = require('../pages/SigninPage');
  3  | const InsurerPage  = require('../pages/CreateInsurerPage');
  4  | const config       = require('../config/insurer.config');
  5  | const sql          = require('mssql');
  6  | const fs           = require('fs');
  7  | 
  8  | const { PAGE_LOAD_TIMEOUT, NETWORK_IDLE_TIMEOUT, ELEMENT_TIMEOUT } = config.timeouts;
  9  | 
  10 | class BaseTest {
  11 | 
  12 |   constructor(options = {}) {
  13 |     this.autoSignIn = options.autoSignIn !== true;
  14 |     this.setUp();
  15 |     this.tearDown();
  16 |   }
  17 | 
  18 |   async signIn() {
  19 |     await this.signinPage.getUsername.pressSequentially(config.credentials.username);
  20 |     await this.signinPage.getPassword.pressSequentially(config.credentials.password);
  21 |     await this.signinPage.getSigninButton.click();
  22 |     await this.page.waitForLoadState('load', { timeout: NETWORK_IDLE_TIMEOUT });
  23 |     await this.page.waitForLoadState('networkidle', { timeout: ELEMENT_TIMEOUT }).catch(() => {});
  24 |   }
  25 | 
  26 |   setUp() {
  27 |     test.beforeAll(async () => {
  28 |       this.pool = await sql.connect(config.db);
  29 |     });
  30 | 
  31 |     test.beforeEach(async ({ browser }) => {
  32 |       test.setTimeout(PAGE_LOAD_TIMEOUT);
  33 | 
  34 |       if (this.autoSignIn) {
  35 |         try {
  36 |           const { passed } = JSON.parse(fs.readFileSync('signin-result.json', 'utf-8'));
  37 |           if (!passed) {
  38 |             test.info().annotations.push({ type: 'Skip Reason', description: 'Skipped: sign-in verification failed' });
  39 |             test.skip(true, 'Skipped: sign-in verification failed');
  40 |           }
  41 |         } catch {
  42 |           // signin-result.json not found — proceed normally
  43 |         }
  44 |       }
  45 | 
  46 |       this.context = await browser.newContext({ ignoreHTTPSErrors: false });
  47 |       this.page    = await this.context.newPage();
  48 |       this.signinPage  = new SigninPage(this.page);
  49 |       this.insurerPage = new InsurerPage(this.page);
> 50 |       await this.page.goto(config.baseURL, { waitUntil: 'domcontentloaded', timeout: NETWORK_IDLE_TIMEOUT });
     |                       ^ Error: page.goto: net::ERR_CERT_AUTHORITY_INVALID at https://aetqa.ad.infomc.com/A/insurerweb
  51 | 
  52 |       if (this.autoSignIn) {
  53 |         await this.signIn();
  54 |       }
  55 |     }
  56 |     );
  57 |   }
  58 | 
  59 |   tearDown() {
  60 |     test.afterEach(async () => {
  61 |       await this.context?.close();
  62 |     });
  63 | 
  64 |     test.afterAll(async () => {
  65 |       await this.pool?.close();
  66 |     });
  67 |   }
  68 | }
  69 | 
  70 | module.exports = { BaseTest };
  71 | 
```