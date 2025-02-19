import { test } from '@playwright/test';
import { HomePage } from '../pageObjects/home-page';

test.describe('Dengro Test', () => {
  let homePage: HomePage;

  test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    
    // Navigate to dengro site
    await page.goto('/');

  });

  test('should assert that the banner text appears on home page', async () => {
    await homePage.verifyHeaderNavIsVisible();
  });

  test('should assert clicking join button opens correct page', async () => { 
    await homePage.clickJoinForFreeBtn();
  })

  test('should assert clicking a link navigates correctly', async () => { 
    await homePage.verifyLinkFunctionality();
  })

  test('should capture screenshot of homepage', async () => {
    await homePage.captureScreenshot();
  })

});