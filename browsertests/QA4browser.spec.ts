import { test, expect } from '@playwright/test';

test('open google', async ({ page }) => {
  await page.goto('https://www.google.com');
  console.log('Browser opened successfully');
  await expect(page).toHaveTitle(/Google/);
  console.log('Title verified successfully');
});

test('open saucedemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  console.log('Browser opened successfully');
  await expect(page).toHaveTitle(/Swag Labs/);
  console.log('Title verified successfully');
});