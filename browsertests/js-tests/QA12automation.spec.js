const { test, expect } = require('@playwright/test');

test('login on automation exercise', async ({ page }) => {

  // Step 1 - Open website
  await page.goto('https://automationexercise.com/login');
  console.log('✅ Website opened');

  // Step 2 - Verify page loaded
  await expect(page.getByText('Login to your account')).toBeVisible();
  console.log('✅ Login page verified');

  // Step 3 - Fill login form
  await page.locator('input[data-qa="login-email"]').fill('oshanivinodya.98@gmail.com');
  await page.locator('input[data-qa="login-password"]').fill('Test1234');
  console.log('✅ Login form filled');

  // Step 4 - Click login button
  await page.locator('button[data-qa="login-button"]').click();
  console.log('✅ Login button clicked');

  // Step 5 - Verify login successful
 await expect(page).toHaveURL('https://automationexercise.com/');
console.log('✅ Login successful');

});