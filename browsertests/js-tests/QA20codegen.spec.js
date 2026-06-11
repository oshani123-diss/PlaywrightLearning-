const { test, expect } = require('@playwright/test');

test('codegen login test', async ({ page }) => {

  await page.goto('https://demo.guru99.com/test/newtours/');
  await page.locator('input[name="userName"]').fill('tutorial');
  await page.locator('input[name="password"]').fill('tutorial');
  await page.getByRole('link', { name: 'SIGN-ON' }).click();

  // Verify login
  await expect(page).toHaveURL(/login/);
  console.log('✅ Codegen test passed');

});