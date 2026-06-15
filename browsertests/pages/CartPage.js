// PAGE OBJECT MODEL — CartPage
class CartPage {

  constructor(page) {
    this.page = page;

    // LOCATORS
    this.checkoutBtn = page.getByRole('button', { name: 'Checkout' });
    this.firstNameField = page.getByPlaceholder('First Name');
    this.lastNameField = page.getByPlaceholder('Last Name');
    this.zipCodeField = page.getByPlaceholder('Zip/Postal Code');
    this.continueBtn = page.getByRole('button', { name: 'Continue' });
    this.finishBtn = page.getByRole('button', { name: 'Finish' });
    this.confirmationMsg = page.getByText('Thank you for your order!');
  }

  // ACTION — complete checkout
  async completeCheckout(firstName, lastName, zipCode) {
    await this.checkoutBtn.click();
    console.log('✅ Clicked checkout');

    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.zipCodeField.fill(zipCode);
    console.log('✅ Filled checkout form');

    await this.continueBtn.click();
    console.log('✅ Clicked continue');

    await this.finishBtn.click();
    console.log('✅ Clicked finish');
  }

  // ACTION — verify order confirmed
  async verifyOrderConfirmed() {
    await this.page.waitForSelector('text=Thank you for your order!');
    console.log('✅ Order confirmed!');
  }

}

module.exports = { CartPage };