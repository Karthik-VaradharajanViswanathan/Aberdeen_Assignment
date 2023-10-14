class ProductPage {
  //************** Locators **************
  getSauceLabItem() {
    return cy.xpath(
      "//div[text()='Sauce Labs Bolt T-Shirt']/../../following-sibling::div/div"
    );
  }

  getAddToCartButton() {
    return cy.xpath(
      "//div[text()='Sauce Labs Bolt T-Shirt']/../../following-sibling::div/button"
    );
  }

  //************** Step Definition **************

  assertProductPrice(itemPrice) {
    this.getSauceLabItem().then(function (element) {
      const price = element.text();
      cy.log("The actual price is : " + price);
      expect(price).to.equal(itemPrice);
    });
  }

  clickAddToCart() {
    this.getAddToCartButton().click();
  }
}

export default ProductPage;
