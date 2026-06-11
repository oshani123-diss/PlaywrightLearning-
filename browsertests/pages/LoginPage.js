// ── PAGE OBJECT MODEL — LoginPage ────────────────────────
// This class stores all locators and actions for the Login page
// So we don't repeat them in every test file
class LoginPage {

  // ── CONSTRUCTOR ────────────────────────────────────────
  // Runs automatically when we create a new LoginPage
  // Stores all locators in one place
  constructor(page) {
    this.page = page;

    // LOCATOR — finds the username input field by name attribute
    this.usernameField = page.locator('input[name="userName"]');

    // LOCATOR — finds the password input field by name attribute
    this.passwordField = page.locator('input[name="password"]');

    // LOCATOR — finds the Sign-On link by its text
    this.signOnLink = page.getByRole('link', { name: 'SIGN-ON' });
  }

  // ── ACTION — goto() ────────────────────────────────────
  // Opens the Mercury Tours website
  async goto() {
    await this.page.goto('https://demo.guru99.com/test/newtours/');
  }

  // ── ACTION — login() ───────────────────────────────────
  // Fills username and password then clicks Sign-On
  // username and password are passed in when called from test file
  async login(username, password) {
    await this.usernameField.fill(username);   // fills username field
    await this.passwordField.fill(password);   // fills password field
    await this.signOnLink.click();             // clicks Sign-On link
  }

}

// ── EXPORT ─────────────────────────────────────────────
// Makes LoginPage available to use in other files
module.exports = { LoginPage };