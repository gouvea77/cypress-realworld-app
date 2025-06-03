class SignUpPage {
  selectorList() {
    const selectors = {
      firstNameField: "#firstName",
      lastNameField: "#lastName",
      userNameField: "#username",
      passwordField: "#password",
      confirmPasswordField: "#confirmPassword",
      buttonSignUp: '[data-test="signup-submit"]',
      messagePasswordDoesNotMatch: "#confirmPassword-helper-text",
    };

    return selectors;
  }

  createNewUser(firstName, lastName, userName, password, conrfirmPassword) {
    cy.get(this.selectorList().firstNameField).type(firstName);
    cy.get(this.selectorList().lastNameField).type(lastName);
    cy.get(this.selectorList().userNameField).type(userName);
    cy.get(this.selectorList().passwordField).type(password);
    cy.get(this.selectorList().confirmPasswordField).type(conrfirmPassword);
  }

  clickButtonConfirm() {
    cy.get(this.selectorList().buttonSignUp).click();
  }
  checkPasswordMatch() {
    cy.get(this.selectorList().messagePasswordDoesNotMatch).should("be.visible");
  }
}

export default SignUpPage;
