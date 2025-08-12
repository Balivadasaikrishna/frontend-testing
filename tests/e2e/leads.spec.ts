import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { LeadsPage } from './pages/LeadsPage';
import { LeadDetailsPage } from './pages/LeadDetailsPage';

test.describe('EspoCRM Leads E2E', () => {
  test('Login, view Leads list, open a lead details', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const leadsPage = new LeadsPage(page);
    const leadDetailsPage = new LeadDetailsPage(page);

    
    await loginPage.goto();
    await loginPage.login();
    await loginPage.waitForLoginComplete();

    
    await leadsPage.navigateToLeads();
    await leadsPage.waitForLeadsPage();
    await leadsPage.waitForLeadsData();

    
    await leadsPage.openFirstLeadDetailsReliable();

    
    await leadDetailsPage.verifyDetailsPageLoaded();
  });
}); 