const { test, expect } = require('@playwright/test');

test('practice login test', async ({ page }) => {

  // Step 1 - Open website
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  console.log('✅ Website opened');

  // Step 2 - Verify page title
  await expect(page).toHaveTitle(/Practice/);
  console.log('✅ Title verified');

  // Step 3 - Login
  await page.locator('input[name="username"]').fill('student');
  await page.locator('input[name="password"]').fill('Password123');
  await page.locator('button[id="submit"]').click();
  console.log('✅ Login submitted');

  // Step 4 - Wait for page to load
  await page.waitForURL(/logged-in/);
  console.log('✅ Logged in successfully');

  // Step 5 - Verify success message
  await expect(page.getByText('Congratulations')).toBeVisible();
  console.log('✅ Success message verified');

});