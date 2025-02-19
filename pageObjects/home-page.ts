import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    page: Page;
    featuresBenefits: Locator;
    heading: Locator;
    joinForFree: Locator;
    signUpText: Locator;
    pricingLink: Locator;
    currency: Locator;
    gbpOption: Locator;
    eurOption: Locator;
    price234: Locator;

    constructor(page: Page) {
        this.page = page;
        this.featuresBenefits = page.getByText('Features & benefitsPricingIntegrationsWhy DenGroBlogPartnersLogin Get a demo');
        this.heading = page.getByRole('heading', { name: 'Practice growth never felt so' });
        this.joinForFree = page.getByRole('banner').getByRole('link', { name: 'Join for free' });
        this.signUpText = page.getByText('Sign-up takes just a few');
        this.pricingLink = page.getByLabel('Navigation').getByRole('link', { name: 'Pricing' });
        this.currency = page.getByText('Currency');
        this.gbpOption = page.getByText('GBP');
        this.eurOption = page.getByText('EUR');
        this.price234 = page.getByText('€234');
    }

    async verifyHeaderNavIsVisible() {
        await expect(this.featuresBenefits).toBeVisible();
    }
}