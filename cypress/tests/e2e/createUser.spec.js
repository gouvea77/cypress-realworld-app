import userData from "../../fixtures/user-data.json";
import SignUpPage from "../pages/signUpPage";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();
const signUpPage = new SignUpPage();

describe("Testando a funcionalidade de criar novos usuários", () => {
  it("Deve exibir mensagens de erro ao tentar registrar um novo usuário sem o First Name", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.clickButtonSignUp();
    signUpPage.createWithoutFirstName(
      userData.newUser.userLastName,
      userData.newUser.password,
      "teste",
      "teste"
    );
  });

  it("Deve exibir mensagens de erro ao tentar registrar um novo usuário sem o Last Name", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.clickButtonSignUp();
    signUpPage.createWithoutLastName(
      userData.newUser.userFirstName,
      userData.newUser.password,
      "teste",
      "teste"
    );
  });

  it("Deve exibir mensagens de erro ao tentar registrar um novo usuário sem o Password", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.clickButtonSignUp();
    signUpPage.createWithoutPassword(
      userData.newUser.userFirstName,
      userData.newUser.userLastName,
      "teste",
      "teste"
    );
  });

  it("Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher a senha igual", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.clickButtonSignUp();
    signUpPage.createNewUser(
      userData.newUser.userFirstName,
      userData.newUser.userLastName,
      userData.newUser.password,
      "teste",
      "t"
    );
    signUpPage.checkPasswordMatch();
  });

  it.only("Deve registrar um novo usuário com informações válidas", () => {
    cy.visit("http://localhost:3000/signin");
    loginPage.clickButtonSignUp();
    signUpPage.createNewUser(
      userData.newUser.userFirstName,
      userData.newUser.userLastName,
      userData.userSuccess.username,
      userData.userSuccess.password,
      userData.newUser.password
    );
    signUpPage.clickButtonConfirm();
  });
});
