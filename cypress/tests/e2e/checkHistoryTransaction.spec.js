import userData from "../../fixtures/user-data.json";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import SignUpPage from "../pages/signUpPage";

import tranferData from "../../fixtures/data-transactions.json";

const loginPage = new LoginPage();
const homePage = new HomePage();
const signUpPage = new SignUpPage();

describe("Tentar visualizar o histórico de transações sem transações anteriores", () => {
  it("Deve exibir uma mensagem indicando que o usuário não possui transações anteriores", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.clickButtonSignUp();
    signUpPage.createNewUser(
      userData.newUser.userFirstName,
      userData.newUser.userLastName,
      userData.newUser.username,
      userData.newUser.password,
      userData.newUser.password
    );
    signUpPage.clickButtonConfirm();
    loginPage.loginWithAnyUser(userData.newUser.username, userData.newUser.password);
    loginPage.clickButtonSignIn();
    cy.contains("Account Balance").should("be.visible");
    homePage.skipModal();
    homePage.verifyNoTransactionHistory();
  });
});

describe("Visualizar histórico de transações com sucesso", () => {
  it("Deve exibir o histórico de transações de um usuário corretamente", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.loginWithAnyUser(userData.user.username, userData.user.password);
    loginPage.clickButtonSignIn();
    cy.contains("Account Balance").should("be.visible");
    homePage.skipModal();
    homePage.checkBalance(tranferData.newTransfer.sufficientAmount);
    homePage.verifySuccessfulTransactionInHistory();
  });
});
