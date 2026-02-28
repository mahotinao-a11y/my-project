export class MyPage {
  constructor(page) {
    this.page = page;
    this.womenCategory = 'a[href="#Women"]';
    this.womenDress = 'a[href="/category_products/1"]';
    this.addToCart = '[data-product-id="4"]';
    this.cart = 'a[href="/view_cart"]';
  }
  async addProductToCart(ItemName) {
    await this.page.locator(this.womenCategory).click();
    await this.page.locator(this.womenDress).click();
    await this.page.on('dialog', async (dialog) => {
      if (dialog.message().includes('Added!')) await dialog.accept();
    });
    await this.page.locator(this.addToCart).first().click();
  }

  async gotoCart() {
    await this.page.locator(this.cart).first().click();
  }
}
