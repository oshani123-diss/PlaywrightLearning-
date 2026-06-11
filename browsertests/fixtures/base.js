// ── FIXTURES ─────────────────────────────────────────────
// Reusable setup that can be used in any test file
const { test: base, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

// Create a custom fixture called loggedInPage
const test = base.extend({

  // This fixture automatically logs in before every test
  loggedInPage: async ({ page }, use) => {

    // SETUP — runs before the test
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('tutorial', 'tutorial');
    await page.waitForURL(/login/);
    console.log('✅ Auto login done');

    // USE — runs the actual test
    await use(page);

    // TEARDOWN — runs after the test
    console.log('✅ Test finished');
  }

});

module.exports = { test, expect };