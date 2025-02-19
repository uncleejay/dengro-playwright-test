import { Page, Locator, expect } from '@playwright/test';

export class PricingPage {
    page: Page;
    pricingLink: Locator;
    currencyDropdown: Locator;
    gbpOption: Locator;
    eurOption: Locator;
    pricingCurrency: Locator;

    constructor(page: Page){
        this.page = page;
        this.pricingLink = page.getByLabel('Navigation').getByRole('link', { name: 'Pricing' });
        this.currencyDropdown = page.getByText('GBP EUR');
        this.gbpOption = page.getByText('GBP');
        this.eurOption = page.getByText('EUR');
        this.pricingCurrency = page.locator('p', {hasText: '€'}).first();
    }

    async changeCurrency() {
        // click the currency dropdown
        await this.currencyDropdown.click();

        // Select 'EUR' from the dropdown
        await this.eurOption.click();

        // Assert that the euro symbol is visible in the pricing page
        await expect(this.pricingCurrency).toBeVisible();
    }
}