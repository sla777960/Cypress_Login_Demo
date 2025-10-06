export class LoginPage {
  enterUsername(name) {
    const field = cy.get('[name="username"]');
    field.type(name);
    return this;
  }
  enterPassword(password) {
    const field = cy.get('[name="password"]');
    field.type(password);
    return this;
  }
  clickLogin() {
    const button = cy.get(".oxd-button");
    button.click();
  }
}