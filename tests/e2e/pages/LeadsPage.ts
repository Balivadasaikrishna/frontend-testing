import { Page, Locator, expect } from '@playwright/test';

export class LeadsPage {
  readonly page: Page;
  readonly leadsLink: Locator;
  readonly leadsTable: Locator;
  readonly pageHeader: Locator;
  readonly firstLeadRow: Locator;
  readonly firstLeadLink: Locator;

  constructor(page: Page) {
    this.page = page;
   
    this.leadsLink = page.locator('a[href*="Lead"], a:has-text("Lead"), [data-name="Lead"]').first();
    this.leadsTable = page.locator('table, .list-container, .data-grid').first();
    this.pageHeader = page.locator('h1, .page-header');
    
    
    this.firstLeadRow = this.leadsTable.locator('tr').nth(1); 
    this.firstLeadLink = this.firstLeadRow.locator('a').first(); 
  }

  async navigateToLeads() {
    await this.leadsLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async waitForLeadsPage() {
    await expect(this.pageHeader).toContainText(/Lead/i);
    await expect(this.leadsTable).toBeVisible();
  }

  async waitForLeadsData() {
    await expect(this.leadsTable.locator('tr').nth(1)).toBeVisible(); 
  }

  async openFirstLeadDetails() {
    const firstLeadRow = this.leadsTable.locator('tr').nth(1); 
    const leadNameCell = firstLeadRow.locator('td').nth(1); 
    const leadLink = leadNameCell.locator('a').first(); 
    
  
    await expect(leadLink).toBeVisible();
    await leadLink.click();
    
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForURL(/.*\/view\/.*/);
  }

  async openLeadDetailsByText(leadName: string) {
    const leadLink = this.page.locator(`a:has-text("${leadName}")`).first();
    
    await expect(leadLink).toBeVisible();
    await leadLink.click();
    
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForURL(/.*\/view\/.*/);
  }

  async openFirstLeadDetailsReliable() {
    await expect(this.firstLeadLink).toBeVisible();
    await this.firstLeadLink.click();
    
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForURL(/.*\/view\/.*/);
  }
} 