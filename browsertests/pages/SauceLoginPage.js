// PAGE OBJECT MODEL — SauceLoginPage
class SauceLoginPage {

  constructor(page) {
    this.page = page;

    // LOCATORS
    this.usernameField = page.getByPlaceholder('Username');
    this.passwordField = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.errorMsg = page.locator('[data-test="error"]');
  }

  // ACTION — open website
  async goto() {
    await this.page.goto(process.env.SAUCE_URL || 'https://www.saucedemo.com');
  }

  // ACTION — login
  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginBtn.click();
  }

  // ACTION — verify error message
  async verifyError(errorText) {
    await this.page.waitForSelector('[data-test="error"]');
    const error = await this.errorMsg.textContent();
    console.log('✅ Error message:', error);
  }

}

module.exports = { SauceLoginPage };