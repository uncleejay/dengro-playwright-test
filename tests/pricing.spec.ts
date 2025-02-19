import { test, expect } from '@playwright/test';
import { PricingPage } from '../pageObjects/pricing-page';

test.describe('Pricing Page', () => {
    let pricingPage: PricingPage;
  
    test.beforeEach(async ({page}) => {
        pricingPage = new PricingPage(page);
      
      // Navigate to pricing page
      await page.goto('/pricing/');

      // Assert the URL is correct
      await expect(page).toHaveURL('/pricing/');
  
    });
  
    test('should assert user can change currency in pricing page', async () => {
        await pricingPage.changeCurrency();
    });
  
  });