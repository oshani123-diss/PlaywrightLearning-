// PAGE OBJECT MODEL — RegisterPage
class RegisterPage {

  constructor(page) {
    this.page = page;

    // LOCATORS
    this.firstNameField = page.locator('input[name="firstName"]');
    this.lastNameField = page.locator('input[name="lastName"]');
    this.phoneField = page.locator('input[name="phone"]');
    this.emailField = page.locator('input[name="userName"]');
    this.passwordField = page.locator('input[name="password"]');
    this.confirmPasswordField = page.locator('input[name="confirmPassword"]');
    this.submitBtn = page.locator('input[name="submit"]');
  }

  // ACTION — open register page
  async goto() {
    await this.page.goto('https://demo.guru99.com/test/newtours/register.php');
  }

  // ACTION — fill and submit register form
  async register(firstName, lastName, phone, email, password) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.phoneField.fill(phone);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(password);
    await this.submitBtn.click();
  }

}

module.exports = { RegisterPage };