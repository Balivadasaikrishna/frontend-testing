import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  retries: 1, // Add retry for CI stability
  timeout: 30000, // Increase timeout for CI
  use: {
    headless: true, // Required for CI
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    // Add CI-specific settings
    launchOptions: {
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...{ channel: 'chromium' },
        // CI-specific browser settings
        launchOptions: {
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
        }
      },
    },
  ],
  // CI-specific reporter
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }]
  ],
  // Output directory for test artifacts
  outputDir: 'test-results/',
}); 