// IMPORT 
// Bringing in Playwright test tools
const { test, expect } = require('@playwright/test');
// Bringing in LoginPage from Page Object Model
const { LoginPage } = require('../pages/LoginPage');

// DESCRIBE (Test Grouping) 
// Groups all login tests under one name
test.describe('Mercury Tours Login Tests', () => {

  // HOOK — beforeAll
  // Runs once before all tests start
  test.beforeAll(async () => {
    console.log('🚀 Starting all login tests');
  });

  // HOOK — beforeEach 
  // Runs automatically before every test
  // Opens website so we don't repeat it in each test
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(); // POM — calling goto() from LoginPage
    console.log('✅ Website opened before each test');
  });

  //  TEST 1 
  test('successful login', async ({ page }) => {

    // POM — using LoginPage class to login
    const loginPage = new LoginPage(page);
    await loginPage.login('tutorial', 'tutorial');

    // ASSERTION — verifying URL after login
    await expect(page).toHaveURL(/login/);
    console.log('✅ Successful login test passed');
  });

  // TEST 2 
  test('verify login page elements', async ({ page }) => {

    // LOCATOR + ASSERTION — finding fields and checking visible
    await expect(page.locator('input[name="userName"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    console.log('✅ Login page elements verified');
  });

  // HOOK — afterEach 
  // Runs automatically after every test finishes
  test.afterEach(async () => {
    console.log('🔄 Test finished');
  });

  // HOOK — afterAll
  // Runs once after all tests complete
  test.afterAll(async () => {
    console.log('🏁 All login tests completed');
  });

});