import { test, expect } from '@playwright/test';
import { HomePage } from '../pageObjects/home-page';

test.describe('Dengro Test', () => {
  
  test.beforeEach(async ({page}) => {
    
    // Navigate to dengro site
    await page.goto('/');

  });

  test('should display home page', async ({page}) => {
    
  })
});