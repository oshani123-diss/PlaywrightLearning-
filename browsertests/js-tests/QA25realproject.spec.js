const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });
const { test, expect } = require('@playwright/test');
const { SauceLoginPage } = require('../pages/SauceLoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

test.describe('SauceDemo — Real Project Tests', () => {

  // TEST 1 — successful login
  test('successful login', async ({ page }) => {
    const loginPage = new SauceLoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      process.env.SAUCE_USER || 'standard_user',
      process.env.SAUCE_PASS || 'secret_sauce'
    );
    await expect(page).toHaveURL(/inventory/);
    console.log('✅ Login successful');
  });

  // TEST 2 — failed login
  test('failed login', async ({ page }) => {
    const loginPage = new SauceLoginPage(page);
    await loginPage.goto();
    await loginPage.login('wrong_user', 'wrong_pass');
    await loginPage.verifyError('Epic sadface');
    console.log('✅ Failed login verified');
  });

  // TEST 3 — complete shopping flow
  test('complete shopping flow', async ({ page }) => {
    const loginPage = new SauceLoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login(
      process.env.SAUCE_USER || 'standard_user',
      process.env.SAUCE_PASS || 'secret_sauce'
    );
    console.log('✅ Login successful');

    // Add to cart
    await inventoryPage.addFirstProductToCart();
    await inventoryPage.goToCart();

    // Checkout
    await cartPage.completeCheckout('Oshani', 'Dissanayake', '12345');
    await cartPage.verifyOrderConfirmed();

    console.log('✅ Complete shopping flow passed!');
  });

});