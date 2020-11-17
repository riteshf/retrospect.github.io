/// <reference types="cypress" />

context("Start application", () => {
  it("visit url ", () => {
    cy.visit("/");
  });
});
