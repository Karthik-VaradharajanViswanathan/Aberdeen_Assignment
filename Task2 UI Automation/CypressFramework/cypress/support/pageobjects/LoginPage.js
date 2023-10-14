class LoginPage {
  //************** Locators **************
  getUsername() {
    return cy.get("#user-name");
  }

  getPassword() {
    return cy.get('[name="password"]');
  }

  getLoginButton() {
    return cy.get("#login-button");
  }

  //************** Step Definition **************

  enterUserName(username) {
    this.getUsername().type(username);
  }

  enterPassword(password) {
    this.getPassword().type(password);
  }

  clickLogin() {
    this.getLoginButton().click();
  }
}

export default LoginPage;
