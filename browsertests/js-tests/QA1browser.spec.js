const { test, expect } = require('@playwright/test');

test('open google', async ({ page }) => {
  await page.goto('https://www.google.com');
  console.log('Browser opened successfully');
  await expect(page).toHaveTitle(/Google/);
  console.log('Title verified successfully');
});