import { test, expect } from '@playwright/test';

// Extend the Window interface to include alertMessage
declare global {
  interface Window {
    alertMessage: string;
  }
}

test('CreateUser component', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Mock the alert function
  await page.evaluate(() => {
    window.alert = (message) => { window.alertMessage = message; };
  });

  await page.fill('#name', 'Test User');
  await page.fill('#email', 'testuser@example.com');
  await page.click('button[type="submit"]');

  const alertMessage = await page.evaluate(() => window.alertMessage);
  expect(alertMessage).toBe('User created!');
});

test('ReadDeleteUsers component', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Mock the alert function
  await page.evaluate(() => {
    window.alert = (message) => { window.alertMessage = message; };
  });

  const users = await page.$$eval('.list-group-item', items => items.map(item => item.textContent));
  expect(users.length).toBeGreaterThan(0);
  await page.click('.btn-danger');

  const alertMessage = await page.evaluate(() => window.alertMessage);
  expect(alertMessage).toBe('Failed to delete user');
});

test('UpdateUser component', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Mock the alert function
  await page.evaluate(() => {
    window.alert = (message) => { window.alertMessage = message; };
  });

  await page.fill('#id', '1');
  await page.fill('#name', 'Updated User');
  await page.fill('#email', 'updateduser@example.com');
  await page.click('button[type="submit"]');

  const alertMessage = await page.evaluate(() => window.alertMessage);
  expect(alertMessage).toBe('User updated!');
});