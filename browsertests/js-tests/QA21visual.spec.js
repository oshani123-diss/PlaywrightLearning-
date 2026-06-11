const { test, expect } = require('@playwright/test');

test.describe('Visual Testing', () => {

  test('login page visual check', async ({ page }) => {

    // Open website
    await page.goto('https://demo.guru99.com/test/newtours/');
    console.log('✅ Website opened');

    // Take screenshot and compare with baseline
    // Allow up to 10000 pixels difference
    await expect(page).toHaveScreenshot('login-page.png', {
      maxDiffPixels: 10000
    });
    console.log('✅ Visual check passed');

  });

});