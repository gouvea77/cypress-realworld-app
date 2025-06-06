import userData from "../../fixtures/user-data.json";
import tranferData from "../../fixtures/data-transactions.json";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

describe("Enviar dinheiro caso o saldo seja suficiente", () => {
  it("Deve enviar dinheiro com sucesso", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.loginWithAnyUser(userData.user.username, userData.user.password);
    loginPage.clickButtonSignIn();
    cy.contains("Account Balance").should("be.visible");
    homePage.skipModal();
    homePage.checkBalance(tranferData.newTransfer.sufficientAmount);
  });
});

describe("Enviar dinheiro com saldo insuficiente", () => {
  it("Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.loginWithAnyUser(
      userData.userWithoutBalance.username,
      userData.userWithoutBalance.password
    );
    loginPage.clickButtonSignIn();
    cy.contains("Account Balance").should("be.visible");
    homePage.skipModal();
    homePage.checkBalance(tranferData.newTransfer.insufficientAmount);
  });
});
