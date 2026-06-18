const { test, expect } = require('@playwright/test');

// Use saved auth state — no need to login!
test.use({ storageState: 'auth.json' });

test('use saved auth state', async ({ page }) => {

  // Go directly to flights — already logged in!
  await page.goto('https://demo.guru99.com/test/newtours/');
  await page.getByRole('link', { name: 'Flights' }).click();

  // Verify flights page loaded
  await expect(page.getByText('Flight Details')).toBeVisible();
  console.log('✅ Flights page loaded without logging in!');

});