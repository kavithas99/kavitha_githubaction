import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.USE_NAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('My Actions')).toBeVisible();
  await page.locator('.oxd-userdropdown-name').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});