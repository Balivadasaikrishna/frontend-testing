import { Page, Locator, expect } from '@playwright/test';

export class LeadDetailsPage {
  readonly page: Page;
  readonly detailsContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.detailsContainer = page.locator('.panel-body-form').first();
  }

  async waitForDetailsPage() {
    await expect(this.detailsContainer).toBeVisible();
  }

  async verifyDetailsPageLoaded() {
    await this.waitForDetailsPage();
  }

} 