// ── IMPORT our custom fixture instead of @playwright/test ──
const { test, expect } = require('../fixtures/base');

test.describe('Mercury Tours — Using Fixtures', () => {

  // TEST 1 — no need to login! fixture does it automatically
  test('verify flights page', async ({ loggedInPage }) => {

    // Already logged in! Just go to flights
    await loggedInPage.getByRole('link', { name: 'Flights' }).click();
    await expect(loggedInPage.getByText('Flight Details')).toBeVisible();
    console.log('✅ Flights page verified');

  });

  // TEST 2 — no need to login! fixture does it automatically
  test('verify profile link visible', async ({ loggedInPage }) => {

    // Already logged in! Just check elements
    await expect(loggedInPage.getByRole('link', { name: 'SIGN-ON' })).toBeVisible();
    console.log('✅ Sign-Off link visible after login');

  });

});