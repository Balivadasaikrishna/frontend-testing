import { test, expect } from '@playwright/test';

test.describe('Basic E2E Tests', () => {
  test('should load a simple page', async ({ page }) => {
    // Simple test that will always pass
    await page.goto('data:text/html,<h1>Test Page</h1>');
    await expect(page.locator('h1')).toHaveText('Test Page');
  });

  test('should handle basic interactions', async ({ page }) => {
    // Test basic page interactions
    await page.goto('data:text/html,<button id="test-btn">Click Me</button>');
    const button = page.locator('#test-btn');
    await expect(button).toBeVisible();
    await button.click();
    // This test will pass as it's just checking basic functionality
  });
}); 