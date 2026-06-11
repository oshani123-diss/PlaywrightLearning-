const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('take screenshots', async ({ page }) => {

  const loginPage = new LoginPage(page);

  // Step 1 - Open website
  await loginPage.goto();
  console.log('✅ Website opened');

  // Step 2 - Take screenshot before login
  await page.screenshot({ path: 'screenshots/before-login.png' });
  console.log('✅ Screenshot taken before login');

  // Step 3 - Login
  await loginPage.login('tutorial', 'tutorial');
  await page.waitForURL(/login/);
  console.log('✅ Login successful');

  // Step 4 - Take screenshot after login
  await page.screenshot({ path: 'screenshots/after-login.png' });
  console.log('✅ Screenshot taken after login');

});