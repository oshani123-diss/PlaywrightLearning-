const { test, expect } = require('@playwright/test');

test('dropdowns practice', async ({ page }) => {

    // Step 1 - Open and login
    await page.goto('https://demo.guru99.com/test/newtours/');
    await page.locator('input[name="userName"]').fill('tutorial');
  await page.locator('input[name="password"]').fill('tutorial');
  await page.getByRole('link', {name: 'SIGN-ON'}).click();
  await page.waitForURL(/login/);
  console.log('✅ Login successful');

    // Step 2 - Go to Flights
    await page.getByRole('link', { name: 'Flights' }).click();
  await page.waitForSelector('text=Flight Details');
  console.log('✅ Flights page loaded');

  // Step 3 - Select passengers by text
  await page.locator('select[name="passCount"]').selectOption('3');
  console.log('✅ Passengers selected — 3');

  // Step 4 - Select departing city by text
  await page.locator('select[name="fromPort"]').selectOption('London');
  console.log('✅ Departing city selected — London');

  // Step 5 - Select arriving city by index
  await page.locator('select[name="toPort"]').selectOption({index: 5});
  console.log('✅ Arriving city selected by index');

  // Step 6 - Select service class
  await page.locator('input[value="Business"]').check();
  console.log('✅ Service class selected — Business');

  // Step 7 - Verify all selections
  await expect(page.locator('select[name="passCount"]')).toHaveValue('3');
  await expect(page.locator('select[name="fromPort"]')).toHaveValue('London');
  console.log('✅ Dropdown values verified');

});