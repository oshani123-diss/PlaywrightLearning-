const { test, expect } = require('@playwright/test');

test('assertions practice', async ({ page }) => {

    // Step 1 - Open website
    await page.goto('https://demo.guru99.com/test/newtours/');
    console.log('✅ Website opened');

    // Step 2 - Wait for username field to appear
    await page.waitForSelector('input[name="userName"]');
    console.log('✅ Username field appeared');

     // Step 3 - Login
     await page.locator('input[name="userName"]').fill('tutorial');
     await page.locator('input[name="password"]').fill('tutorial');
  await page.getByRole('link', { name: 'SIGN-ON' }).click();
  console.log('✅ Login clicked');

   // Step 4 - Wait for URL to change after login
   await page.waitForURL(/login/);
  console.log('✅ Login page loaded');

  // Step 5 - Click Flights
  await page.getByRole('link', { name: 'Flights' }).click();

  // Step 6 - Wait for Flight Details to appear
  await page.waitForSelector('text=Flight Details');
  console.log('✅ Flight details appeared');

});