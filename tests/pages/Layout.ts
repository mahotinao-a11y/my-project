import { expect } from '@playwright/test';

export class Layout {
  constructor(page) {
    this.page = page;
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.productLink = page.getByRole('link', { name: 'Products' });
    this.cartLink = page.getByRole('link', { name: 'Cart' });
    this.signupLink = page.getByRole('link', { name: 'Signup / Login' });
    this.testCasesLink = page.getByRole('link', { name: 'Test Cases' });
    this.apiTestingLink = page.getByRole('link', { name: 'API Testing' });
    this.contactUsLink = page.getByRole('link', { name: 'Contact us' });
    this.videoTutorialsLink = page.getByRole('link', { name: 'Video Tutorials' });
  }
  async navigationMenu() {
    await expect(this.homeLink).toBeVisible();
    await expect(this.productLink).toBeVisible();
    await expect(this.cartLink).toBeVisible();
    await expect(this.signupLink).toBeVisible();
    await expect(this.testCasesLink.first()).toBeVisible();
    await expect(this.contactUsLink).toBeVisible();
    await expect(this.contactUsLink).toBeVisible();
    await expect(this.videoTutorialsLink).toBeVisible();
    await expect(this.homeLink).toContainText('Home');
    await expect(this.productLink).toContainText('Products');
    await expect(this.cartLink).toContainText('Cart');
    await expect(this.signupLink).toContainText('Signup / Login');
    await expect(this.testCasesLink.first()).toContainText('Test Cases');
    await expect(this.apiTestingLink).toContainText('API Testing');
    await expect(this.contactUsLink).toContainText('Contact us');
    await expect(this.videoTutorialsLink).toContainText('Video Tutorials');
  }
}
