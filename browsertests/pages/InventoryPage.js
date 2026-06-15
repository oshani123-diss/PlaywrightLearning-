// PAGE OBJECT MODEL — InventoryPage
class InventoryPage {

  constructor(page) {
    this.page = page;

    // LOCATORS
    this.addToCartBtn = page.getByRole('button', { name: 'Add to cart' }).first();
    this.cartIcon = page.locator('.shopping_cart_link');
    this.productTitle = page.locator('.inventory_item_name').first();
  }

  // ACTION — add first product to cart
  async addFirstProductToCart() {
    await this.productTitle.click();
    await this.page.goBack();
    await this.addToCartBtn.click();
    console.log('✅ Product added to cart');
  }

  // ACTION — go to cart
  async goToCart() {
    await this.cartIcon.click();
    console.log('✅ Opened cart');
  }

}

module.exports = { InventoryPage };