const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('login using environment variables', async ({ page }) => {

  const baseUrl = process.env.BASE_URL || 'https://demo.guru99.com/test/newtours/';
  const username = process.env.LOGIN_USER || 'tutorial';
const password = process.env.LOGIN_PASS || 'tutorial';

  console.log('BASE_URL:', baseUrl);

  const loginPage = new LoginPage(page);

  await page.goto(baseUrl);
  console.log('✅ Opened:', baseUrl);

  await loginPage.login(username, password);
  console.log('✅ Logged in as:', username);

  await expect(page).toHaveURL(/login/);
  console.log('✅ Login successful');

});