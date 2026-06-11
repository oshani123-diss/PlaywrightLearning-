const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { FlightsPage } = require('../pages/FlightsPage');

test('login and search flight using POM', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const flightsPage = new FlightsPage(page);

  // Step 1 - Open and login
  await loginPage.goto();
  await loginPage.login('tutorial', 'tutorial');
  console.log('✅ Login successful');

  // Step 2 - Search flight
  await flightsPage.goto();
  await flightsPage.searchFlight('New York', 'Seattle');
  console.log('✅ Flight search submitted');

  // Step 3 - Verify results
  await expect(page).toHaveURL(/reservation2/);
  console.log('✅ Flight results loaded');

});
