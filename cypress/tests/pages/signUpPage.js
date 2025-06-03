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

  createNewUser(firstName, lastName, userName, password, confirmPassword) {
    cy.get(this.selectorList().firstNameField).type(firstName);
    cy.get(this.selectorList().lastNameField).type(lastName);
    cy.get(this.selectorList().userNameField).type(userName);
    cy.get(this.selectorList().passwordField).type(password);
    cy.get(this.selectorList().confirmPasswordField).type(confirmPassword);
  }

  createWithoutFirstName(lastName, userName, password, confirmPassword) {
    cy.get(this.selectorList().firstNameField).click();
    cy.get(this.selectorList().lastNameField).type(lastName);
    cy.get(this.selectorList().userNameField).type(userName);
    cy.get(this.selectorList().passwordField).type(password);
    cy.get(this.selectorList().confirmPasswordField).type(confirmPassword);
    cy.contains("First Name is required").should("be.visible");
  }

  createWithoutLastName(firstName, userName, password, confirmPassword) {
    cy.get(this.selectorList().firstNameField).type(firstName);
    cy.get(this.selectorList().lastNameField).click();
    cy.get(this.selectorList().userNameField).type(userName);
    cy.get(this.selectorList().passwordField).type(password);
    cy.get(this.selectorList().confirmPasswordField).type(confirmPassword);
    cy.contains("Last Name is required").should("be.visible");
  }

  createWithoutPassword(firstName, lastName, userName, confirmPassword) {
    cy.get(this.selectorList().firstNameField).type(firstName);
    cy.get(this.selectorList().lastNameField).type(lastName);
    cy.get(this.selectorList().userNameField).type(userName);
    cy.get(this.selectorList().passwordField).click();
    cy.get(this.selectorList().confirmPasswordField).type(confirmPassword);
    cy.contains("Enter your password").should("be.visible");
  }
  clickButtonConfirm() {
    cy.get(this.selectorList().buttonSignUp).click();
  }
  checkPasswordMatch() {
    cy.get(this.selectorList().messagePasswordDoesNotMatch).should("be.visible");
  }
}

export default SignUpPage;
