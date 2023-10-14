class CheckoutInfoPage {
  //************** Locators **************
  getFirstName() {
    return cy.get("#first-name");
  }

  getLastName() {
    return cy.get("#last-name");
  }

  getPostalCode() {
    return cy.get("#postal-code");
  }

  getContinueButton() {
    return cy.get("#continue");
  }

  //************** Step Definition **************

  enterFirstname(firstname) {
    this.getFirstName().type(firstname);
  }

  enterLastname(lastname) {
    this.getLastName().type(lastname);
  }

  enterPostalCode(postal) {
    this.getPostalCode().type(postal);
  }

  clickContinue() {
    this.getContinueButton().click();
  }
}

export default CheckoutInfoPage;
