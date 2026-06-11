const { test, expect } = require('@playwright/test');

test('search for a product', async ({ page }) => {

  // Step 1 - Open website
  await page.goto('https://automationexercise.com');
  console.log('✅ Website opened');

  // Step 2 - Enter search text
  await page.locator('input#search_product').fill('dress');
  console.log('✅ Search text entered');

  // Step 3 - Click search button
  await page.locator('button#submit_search').click();
  console.log('✅ Search submitted');

  // Step 4 - Verify results
  await expect(page.getByText('Searched Products')).toBeVisible();
  console.log('✅ Search results loaded');

});