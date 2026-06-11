const { test, expect } = require('@playwright/test');

test('login on saucedemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  console.log('Typed username');
  console.log('Typed password');
  console.log('Clicked login');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  console.log('Login successful - landed on inventory page');
});