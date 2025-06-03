import userData from "../../fixtures/user-data.json";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

describe("Cenários de Login", () => {
  it("Erro ao logar com Usuário InVálido", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password);
    loginPage.checkLoginInvalidCredentials();
  });
  it.only("Login com Usuário Válido", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password);
    cy.contains("Account Balance").should("be.visible");
  });
});
