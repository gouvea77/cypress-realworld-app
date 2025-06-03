import { th } from "date-fns/locale";

class LoginPage {
  selectorList() {
    const selectors = {
      usernameField: "#username",
      passwordField: "#password",
      buttonSignUp: '[data-test="signup"]',
      buttonLogin: '[data-test="signin-submit"]',
      errorCredentialMessage: '[data-test="signin-error"]',
    };

    return selectors;
  }

  clickButtonSignUp() {
    cy.get(this.selectorList().buttonSignUp).click();
  }

  loginWithAnyUser(username, password) {
    cy.get(this.selectorList().usernameField).type(username);
    cy.get(this.selectorList().passwordField).type(password);
    cy.get(this.selectorList().buttonLogin).click();
  }

  checkLoginInvalidCredentials() {
    cy.contains("Username or password is invalid").should("be.visible");
  }
}

export default LoginPage;
