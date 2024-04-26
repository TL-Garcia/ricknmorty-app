import { test, expect } from '@playwright/test';

const BASE_HOST = 'http://localhost:5173';

test('Main page shows the appropriate title', async ({ page }) => {
  await page.goto(`${BASE_HOST}`);

  await expect(page).toHaveTitle(/Rick and Morty/);
});

test('Navigates to the Episodes section', async ({ page }) => {
  await page.goto(`${BASE_HOST}`);

  await page.getByRole('link', { name: 'Episodes' }).click();

  await expect(page.getByRole('heading', { name: 'Episodes' })).toBeVisible();
});

test('Navigates to the Locations section', async ({ page }) => {
  await page.goto(`${BASE_HOST}`);

  await page.getByRole('link', { name: 'Locations' }).click();

  await expect(page.getByRole('heading', { name: 'Locations' })).toBeVisible();
});
