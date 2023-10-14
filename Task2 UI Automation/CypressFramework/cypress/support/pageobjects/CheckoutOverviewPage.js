let subtotal = "";
let tax = "";

class CheckoutOverviewPage {
  //************** Locators **************
  getSubTotal() {
    return cy.get(".summary_subtotal_label");
  }

  getTaxSummary() {
    return cy.get(".summary_tax_label");
  }

  getTotalPrice() {
    return cy.xpath(
      "//div[@class='summary_tax_label']/following-sibling::div[1]"
    );
  }

  getFinishButton() {
    return cy.get("#finish");
  }

  //************** Step Definition **************

  assertTheSubTotalValueWithActualPrice(price) {
    this.getSubTotal()
      .invoke("text")
      .then(function (text) {
        cy.log(`Text from the subtotal element: ${text}`);
        subtotal = text;
        expect(text.includes(price)).to.be.true;
      });
  }

  assertTheTotalPriceOfOrder() {
    this.getTaxSummary()
      .invoke("text")
      .then((text) => {
        cy.log(`Text from the tax element: ${text}`);
        tax = text;
        cy.log(`subtotal element: ${subtotal}`);
        cy.log(`tax element: ${tax}`);
        this.getTotalPrice()
          .invoke("text")
          .then((text) => {
            cy.log(`Text from the final total element: ${text}`);
            const subtotalValue = parseFloat(subtotal.match(/\d+\.\d+/)[0]); //Regular expression to match numbers and .
            const taxValue = parseFloat(tax.match(/\d+\.\d+/)[0]);
            const total = subtotalValue + taxValue;

            const formattedTotal = `Total: $${total.toFixed(2)}`; // Format the result as "Total: $xx.xx"
            cy.log("The final total after sum is : " + formattedTotal);

            //assert the total price
            expect(text).to.include(formattedTotal);
          });
      });
  }

  finishTheOrder() {
    this.getFinishButton().click();
  }
}

export default CheckoutOverviewPage;
