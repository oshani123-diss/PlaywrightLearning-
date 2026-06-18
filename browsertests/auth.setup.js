const { chromium } = require('@playwright/test');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });

async function globalSetup() {

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Login once
  await page.goto(process.env.BASE_URL || 'https://demo.guru99.com/test/newtours/');
  await page.locator('input[name="userName"]').fill(process.env.LOGIN_USER || 'tutorial');
  await page.locator('input[name="password"]').fill(process.env.LOGIN_PASS || 'tutorial');
  await page.getByRole('link', { name: 'SIGN-ON' }).click();
  await page.waitForURL(/login/);

  // Save auth state to file
  await page.context().storageState({ path: 'auth.json' });
  console.log('✅ Auth state saved!');

  await browser.close();
}

module.exports = globalSetup;