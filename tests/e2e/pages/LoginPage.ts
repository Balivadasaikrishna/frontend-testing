import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userNameSelect: Locator;
  readonly languageSelect: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameSelect = page.locator('select#field-userName');
    this.languageSelect = page.locator('select#field-language');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('https://demo.us.espocrm.com/');
  }

  async login(username: string = 'admin', language: string = 'en_US') {
    await this.userNameSelect.selectOption(username);
    await this.languageSelect.selectOption(language);
    await this.loginButton.click();
  }

  async waitForLoginComplete() {
    await this.page.waitForLoadState('networkidle');
  }
} 