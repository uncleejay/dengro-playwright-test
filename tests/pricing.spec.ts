import { test } from '@playwright/test';
import { PricingPage } from '../pageObjects/pricing-page';

test.describe('Pricing Page', () => {
    let pricingPage: PricingPage;
  
    test.beforeEach(async ({page}) => {
        pricingPage = new PricingPage(page);
      
      // Navigate to dengro site
      await page.goto('/pricing/');
  
    });
  
    test('should assert user can change currency in pricing page', async () => {
        await pricingPage.changeCurrency();
    });
  
  });