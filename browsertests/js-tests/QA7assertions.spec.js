const { test, expect } = require('@playwright/test');

test('assertions practice', async ({ page }) => {

  // Step 1 - Open website
  await page.goto('https://demo.guru99.com/test/newtours/');

  // Assertion 1 - Check page title
  await expect(page).toHaveTitle(/Mercury Tours/);
  console.log('✅ Title verified');

  // Assertion 2 - Check URL
  await expect(page).toHaveURL(/newtours/);
  console.log('✅ URL verified');

  // Assertion 3 - Check username field is visible
  await expect(page.locator('input[name="userName"]')).toBeVisible();
  console.log('✅ Username field is visible');

  // Assertion 4 - Check Sign-On link is visible
  await expect(page.getByRole('link', { name: 'SIGN-ON' })).toBeVisible();
  console.log('✅ Sign-On link is visible');

  // Assertion 5 - Login and check URL
  await page.locator('input[name="userName"]').fill('tutorial');
  await page.locator('input[name="password"]').fill('tutorial');
  await page.getByRole('link', { name: 'SIGN-ON' }).click();
  await expect(page).toHaveURL(/login/);
  console.log('✅ Login URL verified');

});