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

  // Step 4 - Add first product to cart
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  console.log('✅ Product added to cart');

  // Step 5 - Go to cart
  await page.locator('.shopping_cart_link').click();
  console.log('✅ Opened cart');

  // Step 6 - Verify cart page
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  console.log('✅ Cart page loaded');

  // Step 7 - Click checkout
  await page.getByRole('button', { name: 'Checkout' }).click();
  console.log('✅ Clicked checkout');

  // Step 8 - Fill checkout form
  await page.getByPlaceholder('First Name').fill('Oshani');
  await page.getByPlaceholder('Last Name').fill('Dissanayake');
  await page.getByPlaceholder('Zip/Postal Code').fill('12345');
  console.log('✅ Filled checkout form');

  // Step 9 - Continue
  await page.getByRole('button', { name: 'Continue' }).click();
  console.log('✅ Clicked continue');

  // Step 10 - Finish order
  await page.getByRole('button', { name: 'Finish' }).click();
  console.log('✅ Order finished');

  // Step 11 - Verify order complete
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
  console.log('✅ Order confirmed!');
});