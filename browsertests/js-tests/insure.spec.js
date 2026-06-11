const { test, expect } = require('@playwright/test');
 
test('Insurer login', async ({ page }) => {
 
    await page.goto('https://aetqa.ad.infomc.com/A/InsurerWeb');
    // await page.locator('input[name="Username"]').fill('chathurikam_aetqaa');
    // await page.locator('input[name="Password"]').fill('Welcome@12345678');
    // await page.getByRole('button', { id: 'SubmitButton' }).click();
    await page.locator('input[name="Username"]').fill('chathurikam_aetqaa');
await page.locator('input[name="Username"]').dispatchEvent('input');
await page.locator('input[name="Username"]').dispatchEvent('change');
 
await page.locator('input[name="Password"]').fill('Welcome@12345678');
await page.locator('input[name="Password"]').dispatchEvent('input');
await page.locator('input[name="Password"]').dispatchEvent('change');
 
await expect(page.locator('#SubmitButton')).toBeEnabled({ timeout: 10000 });
await page.locator('#SubmitButton').click();
    console.log('✅ Login successful');
});
 
 