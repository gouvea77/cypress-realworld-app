import userData from "../../fixtures/user-data.json";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

describe("Cenários de Login", () => {
  it("Login com Usuário e Senha Válidos", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.loginWithAnyUser(userData.user.username, userData.user.password);
    loginPage.clickButtonSignIn();
    cy.contains("Account Balance").should("be.visible");
  });

  it("Erro ao Logar com Usuário Não Registrado", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password);
    loginPage.clickButtonSignIn();
    loginPage.checkLoginInvalidCredentials();
  });

  it("Erro ao tentar logar com usuário cadastrado e senha inválida", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.loginWithAnyUser(userData.user.username, userData.userFail.password);
    loginPage.clickButtonSignIn();
    loginPage.checkLoginInvalidCredentials();
  });

  it("Erro ao tentar logar sem preencher usuário e senha", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.clickButtonSignIn();
    loginPage.checkUsernameRequiredError();
  });

  it("Acessar pagina de cadastro pelo login", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.clickButtonSignUp();
  });
});
