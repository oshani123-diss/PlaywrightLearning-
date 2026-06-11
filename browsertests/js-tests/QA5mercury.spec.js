const { test, expect } = require('@playwright/test');

test('mercury tours login', async ({ page }) => {

  await page.goto('https://demo.guru99.com/test/newtours/');
  console.log('✅ Website opened');

  await page.locator('input[name="userName"]').fill('tutorial');
  await page.locator('input[name="password"]').fill('tutorial');
  await page.getByRole('link', { name: 'SIGN-ON' }).click();
  console.log('✅ Login clicked');

  await expect(page).toHaveURL(/login/);
console.log('✅ Login successful');

});