export class CartPage {
  constructor(page) {
    this.page = page;
    this.allProducts = '#cart_info_table tbody tr';
  }
  async checkProductInCart(productId) {
    const rows = await this.page.locator(this.allProducts).all();

    for (const row of rows) {
      const productLink = await row.locator('td.cart_description h4 a').textContent();
      if (productLink && productLink.includes(productId)) {
        return true;
      }
    }

    return false;
  }
}
