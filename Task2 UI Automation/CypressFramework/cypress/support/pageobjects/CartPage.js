class CartPage {
  //************** Locators **************
  getCartIcon() {
    return cy.get(".shopping_cart_link");
  }

  getCheckout() {
    return cy.get("#checkout");
  }

  //************** Step Definition **************

  clickCartIcon() {
    this.getCartIcon().click();
  }

  clickCheckoutButton() {
    this.getCheckout().click();
  }
}

export default CartPage;
