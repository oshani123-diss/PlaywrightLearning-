const { test, expect } = require('@playwright/test');

test('failed login test', async ({ page }) => {

  // Step 1 - Open website
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  console.log('✅ Website opened');

  // Step 2 - Login with wrong password
  await page.locator('input[name="username"]').fill('student');
  await page.locator('input[name="password"]').fill('wrongpassword');
  await page.locator('button[id="submit"]').click();
  console.log('✅ Wrong login submitted');

  // Step 3 - Verify error message
 await expect(page.locator('#error')).toBeVisible();
  console.log('✅ Error message verified');

});