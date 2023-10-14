/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import LoginPage from "../../../support/pageobjects/LoginPage";
import ProductPage from "../../../support/pageobjects/ProductPage";
import CartPage from "../../../support/pageobjects/CartPage";
import CheckoutInfoPage from "../../../support/pageobjects/CheckoutInfoPage";
import CheckoutOverviewPage from "../../../support/pageobjects/CheckoutOverviewPage";

describe("Place The Order in the Swag Labs Application", function () {
  before(function () {
    // runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Login Swag Labs, Add Items, Assert Price, Checkout and Finish the order", function () {
    const loginPage = new LoginPage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const checkoutInfoPage = new CheckoutInfoPage();
    const checkoutOverviewPage = new CheckoutOverviewPage();

    cy.visit(Cypress.env("url"));
    loginPage.enterUserName(this.data.username);
    loginPage.enterPassword(this.data.password);
    loginPage.clickLogin();

    //Assert Sauce Labs Bolt T-Shirt price and click add cart
    productPage.assertProductPrice(this.data.price);
    productPage.clickAddToCart();

    cartPage.clickCartIcon();
    cartPage.clickCheckoutButton();

    // //checkout information page
    checkoutInfoPage.enterFirstname(this.data.firstname);
    checkoutInfoPage.enterLastname(this.data.lastname);
    checkoutInfoPage.enterPostalCode(this.data.postal);
    checkoutInfoPage.clickContinue();

    //Checkout overview page
    checkoutOverviewPage.assertTheSubTotalValueWithActualPrice(this.data.price);
    checkoutOverviewPage.assertTheTotalPriceOfOrder();
    checkoutOverviewPage.finishTheOrder();
  });
});
