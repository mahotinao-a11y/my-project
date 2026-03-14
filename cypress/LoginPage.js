export class LoginPage {
  constructor() {
    this.usernameSelector = '#user-name';
    this.passwordSelector = '#password';
    this.submitButtonSelector = 'input[type="submit"]';
  }
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  fillUsername(username) {
    cy.get(this.usernameSelector).type(username);
  }

  fillPassword(password) {
    cy.get(this.passwordSelector).type(password);
  }

  submit() {
    cy.get(this.submitButtonSelector).click();
  }
}
