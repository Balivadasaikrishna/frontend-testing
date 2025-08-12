import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  retries: 0,
  use: {
    headless: true, // Changed to true for CI
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...{ channel: 'chromium' } },
    },
    {
      name: 'firefox',
      use: { ...{ channel: 'firefox' } },
    },
    {
      name: 'webkit',
      use: { ...{ channel: 'webkit' } },
    },
  ],
}); 