import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  retries: 0,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chrome',
      use: { ...{ channel: 'chrome' } },
    },
  ],
}); 