const { test, expect } = require('@playwright/test');

test.describe('API Testing', () => {

  // TEST 1 — GET request — get list of users
  test('GET — fetch users list', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/users');

    // Verify status code is 200 (success)
    expect(response.status()).toBe(200);
    console.log('✅ Status code is 200');

    // Verify response has data
    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
    console.log('✅ Response has data');
    console.log('Total users:', body.length);

  });

  // TEST 2 — POST request — create a new post
  test('POST — create a new post', async ({ request }) => {

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'Oshani QA Test',
        body: 'This is a test post',
        userId: 1
      }
    });

    // Verify status code is 201 (created)
    expect(response.status()).toBe(201);
    console.log('✅ Post created successfully');

    // Verify response has correct title
    const body = await response.json();
    expect(body.title).toBe('Oshani QA Test');
    console.log('✅ Title verified:', body.title);

  });

});