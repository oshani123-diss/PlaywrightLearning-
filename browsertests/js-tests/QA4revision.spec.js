const { test, expect } = require('@playwright/test');

test('complete shopping flow', async ({ page }) => {

  // Step 1 - Open website
  await page.goto('https://www.saucedemo.com');

  // Step 2 - Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  console.log('✅ Login successful');

  // Step 3 - Verify products page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  console.log('✅ Products page loaded');

  // Step 4 - Click on product name
  await page.getByText('Sauce Labs Backpack').click();

  // Step 5 - Verify product page opened
  await expect(page).toHaveURL(/inventory-item/);
  console.log('✅ Product page loaded');

});