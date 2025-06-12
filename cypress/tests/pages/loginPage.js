import { th } from "date-fns/locale";

class LoginPage {
  selectorList() {
    const selectors = {
      usernameField: "#username",
      passwordField: "#password",
      buttonSignUp: '[data-test="signup"]',
      buttonLogin: '[data-test="signin-submit"]',
      errorCredentialMessage: '[data-test="signin-error"]',
      titlePage: ".MuiTypography-h5",
    };

    return selectors;
  }

  clickButtonSignUp() {
    cy.get(this.selectorList().buttonSignUp).click();
  }

  loginWithAnyUser(username, password) {
    cy.get(this.selectorList().usernameField).type(username);

    if (password) {
      cy.get(this.selectorList().passwordField).type(password);
    }
  }

  clickButtonSignIn() {
    cy.get(this.selectorList().buttonLogin).click();
  }

  checkLoginInvalidCredentials() {
    cy.contains("Username or password is invalid").should("be.visible");
  }

  checkUsernameRequiredError() {
    cy.contains("Username is required").should("be.visible");
  }

  verifyPageSignUp() {
    cy.contains(this.selectorList().titlePage, "Sign Up").should("be.visible");
  }
}

export default LoginPage;
