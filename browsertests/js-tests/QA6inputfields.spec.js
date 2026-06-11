const { test, expect } = require('@playwright/test');

test('search for a flight', async ({ page }) => {

  // Step 1 - Open and login
  await page.goto('https://demo.guru99.com/test/newtours/');
  await page.locator('input[name="userName"]').fill('tutorial');
  await page.locator('input[name="password"]').fill('tutorial');
  await page.getByRole('link', { name: 'SIGN-ON' }).click();
  console.log('✅ Login successful');

  // Step 2 - Click Flights menu
  await page.getByRole('link', { name: 'Flights' }).click();
  console.log('✅ Flights page opened');

  // Step 3 - Verify flight search page
  await expect(page.getByText('Flight Details')).toBeVisible();
  console.log('✅ Flight search form loaded');

  // Step 4 - Select passengers
  await page.locator('select[name="passCount"]').selectOption('2');
  console.log('✅ Passengers selected');

  // Step 5 - Select departing city
  await page.locator('select[name="fromPort"]').selectOption('New York');
  console.log('✅ Departing city selected');

  // Step 6 - Select arriving city
  await page.locator('select[name="toPort"]').selectOption('Seattle');
  console.log('✅ Arriving city selected');

  // Step 7 - Click Submit
  await page.locator('input[name="findFlights"]').click();
  console.log('✅ Search submitted');

  // Step 8 - Verify results page
  await expect(page).toHaveURL(/reservation2/);
  console.log('✅ Flight results loaded');

});