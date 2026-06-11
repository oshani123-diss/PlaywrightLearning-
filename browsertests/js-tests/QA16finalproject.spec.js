// ── IMPORTS ─────────────────────────────────────────────
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { FlightsPage } = require('../pages/FlightsPage');
const { RegisterPage } = require('../pages/RegisterPage');

// ── DESCRIBE — Login Tests ───────────────────────────────
test.describe('Mercury Tours — Login Tests', () => {

  // HOOK — opens website before every test
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  // TEST 1 — successful login
  test('successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('tutorial', 'tutorial');
    await expect(page).toHaveURL(/login/);
    console.log('✅ Login test passed');
  });

  // TEST 2 — verify login page elements
  test('verify login page elements', async ({ page }) => {
    await expect(page.locator('input[name="userName"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.getByRole('link', { name: 'SIGN-ON' })).toBeVisible();
    console.log('✅ Login page elements verified');
  });

});

// ── DESCRIBE — Flight Tests ──────────────────────────────
test.describe('Mercury Tours — Flight Tests', () => {

  // HOOK — login before every flight test
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('tutorial', 'tutorial');
    await page.waitForURL(/login/);
  });

  // TEST 3 — search flight
  test('search for a flight', async ({ page }) => {
    const flightsPage = new FlightsPage(page);
    await flightsPage.goto();
    await flightsPage.searchFlight('New York', 'Seattle');
    await expect(page).toHaveURL(/reservation2/);
    console.log('✅ Flight search test passed');
  });

});

// ── DESCRIBE — Register Tests ────────────────────────────
test.describe('Mercury Tours — Register Tests', () => {

  // TEST 4 — open register page
  test('verify register page loads', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await expect(page.getByText('Register')).toBeVisible();
    console.log('✅ Register page loaded');
  });

});