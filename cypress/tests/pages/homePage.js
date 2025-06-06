import { should } from "chai";
import tranferData from "../../fixtures/data-transactions.json";
import { be } from "date-fns/locale";
import userData from "../../fixtures/user-data.json";
import { User } from "@auth0/auth0-react";

class HomePage {
  selectorList() {
    const selectors = {
      nextButton: '[data-test="user-onboarding-next"]',
      inputBankName: "#bankaccount-bankName-input",
      inputRoutingNumber: "#bankaccount-routingNumber-input",
      inputAccountNumber: "#bankaccount-accountNumber-input",
      buttonSave: '[data-test="bankaccount-submit"]',
      buttonNewTransfer: '[data-test="nav-top-new-transaction"]',
      amountField: "#amount",
      noteField: "#transaction-create-description-input",
      payButton: '[data-test="transaction-create-submit-payment"]',
      modal: "[role='dialog']",
      contact: '[data-test="user-list-item-GjWovtg2hr"]',
      buttonMyTransactions: '[data-test="nav-personal-tab"]',
      buttonHome: "[data-test='sidenav-home']",
    };

    return selectors;
  }

  clickNextButton() {
    cy.get(this.selectorList().nextButton).click();
  }

  createBankAccount() {
    cy.contains("Account Balance");
    cy.get(this.selectorList().inputBankName).type("Nubank");
    cy.get(this.selectorList().inputRoutingNumber).type("1 234 44 ");
    cy.get(this.selectorList().inputAccountNumber).type("2199999999");
    cy.get(this.selectorList().buttonSave).click();
  }

  newTransaction(valor) {
    cy.get(this.selectorList().buttonNewTransfer).click();
    cy.contains("U:").eq(0).click({ force: true });
    cy.get(this.selectorList().amountField).click().type(valor);
    cy.get(this.selectorList().noteField).click().type("Transfer Test");
    cy.get(this.selectorList().payButton).click();
  }

  skipModal() {
    cy.wait(1000);
    cy.get("body").then(($body) => {
      if ($body.text().includes("Get Started with Real World App")) {
        this.clickNextButton();
        this.createBankAccount();
        this.clickNextButton();
      }
    });
  }

  checkBalance(value) {
    cy.get('[data-test="sidenav-user-balance"]')
      .invoke("text")
      .then((text) => {
        const balance = parseFloat(text.replace(/[^\d.-]/g, ""));
        if (balance < value) {
          this.newTransaction(value);
          cy.contains("Insufficient balance").should("be.visible");
        }
        if (balance >= value) {
          this.newTransaction(value);
          cy.contains("Transaction Submitted!").should("be.visible");
          cy.contains("Paid").should("be.visible");
        }
      });
  }

  verifySuccessfulTransactionInHistory() {
    cy.get(this.selectorList().buttonHome).click();
    cy.get(this.selectorList().buttonMyTransactions).click();
    cy.contains("Transfer Test").should("be.visible");
    cy.contains(`${userData.user.firstName} ${userData.user.lastName} paid`).should("be.visible");
  }

  verifyNoTransactionHistory() {
    cy.get(this.selectorList().buttonHome).click();
    cy.get(this.selectorList().buttonMyTransactions).click();
    cy.contains("No Transactions").should("be.visible");
  }
}

export default HomePage;
