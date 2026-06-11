const { test, expect } = require('@playwright/test');

test.describe('Parallel Execution Tests', () => {

  test('test 1 - open google', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
    console.log('✅ Test 1 passed — Google');
  });

  test('test 2 - open playwright', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);
    console.log('✅ Test 2 passed — Playwright');
  });

  test('test 3 - open mercury tours', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/newtours/');
    await expect(page).toHaveTitle(/Mercury Tours/);
    console.log('✅ Test 3 passed — Mercury Tours');
  });

  test('test 4 - open saucedemo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await expect(page).toHaveTitle(/Swag Labs/);
    console.log('✅ Test 4 passed — SauceDemo');
  });

});