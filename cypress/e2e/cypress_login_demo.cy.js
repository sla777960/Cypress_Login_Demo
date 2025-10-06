import { LoginPage } from "./login_class/login";

const loginPage = new LoginPage();

describe("All Login Tests", () => {
  beforeEach(() => {
    // Visit the home page before every Login Test
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });

  it("Login with valid username and password", () => {
    // Valid username
    loginPage.enterUsername("Admin");

    // Valid password
    loginPage.enterPassword("admin123");

    loginPage.clickLogin();

    //Assertions
    cy.url().should("include", "/web/index.php/dashboard/index");
  });

  it("Login with invalid username and valid password", () => {
    // Invalid username
    loginPage.enterUsername("Admin123");

    // Valid password
    loginPage.enterPassword("admin123");

    loginPage.clickLogin();

    //Assertions
    cy.get(".oxd-alert-content-text")
      .should("be.visible")
      .and("have.text", "Invalid credentials");
  });

  it("Login with valid username and invalid password", () => {
    // Valid username
    loginPage.enterUsername("Admin");

    // Invalid password
    loginPage.enterPassword("admin983");

    loginPage.clickLogin();

    //Assertions
    cy.get(".oxd-alert-content-text")
      .should("be.visible")
      .and("have.text", "Invalid credentials");
  });

  it("Login with invalid username and invalid password", () => {
    // Invalid username
    loginPage.enterUsername("Admin222");

    // Invalid password
    loginPage.enterPassword("admin111");

    loginPage.clickLogin();

    //Assertions
    cy.get(".oxd-alert-content-text")
      .should("be.visible")
      .and("have.text", "Invalid credentials");
  });
});