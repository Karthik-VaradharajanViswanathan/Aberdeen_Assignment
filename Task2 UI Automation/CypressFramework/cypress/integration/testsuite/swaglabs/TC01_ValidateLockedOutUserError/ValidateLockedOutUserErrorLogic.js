/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import ShopPage from "../../../support/pageobjects/ShopPage";

let lockedUserErrorMessage = null;
// const shopPage = new ShopPage();

Given("I enter locked_out_user credentials", function () {
  cy.visit(Cypress.env("url"));
  cy.get("#user-name").type("locked_out_user");
  cy.get('[name="password"]').type("secret_sauce");
});

When("I try to login as locked_out_user", () => {
  cy.get("#login-button").click({ force: true });
});

Then("I find error message", function () {
  cy.get("div h3[data-test='error']").then(function (element) {
    lockedUserErrorMessage = element.text();
    cy.log("The actual text is : " + lockedUserErrorMessage);
  });
});

Then("I am able to assert the error message", function () {
  expect(
    lockedUserErrorMessage.includes(
      "Epic sadface: Sorry, this user has been locked out."
    )
  ).to.be.true;
});
