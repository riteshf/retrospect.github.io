/// <reference types="cypress" />

context("Add", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Went well card and insert text", () => {
    cy.get('button').first().click();
    cy.focused().clear().type('First thing went well')
  });

  it("like a card", () => {
    cy.get('button').first().click();
    cy.get('textarea').parent().within(()=> {
      cy.get('div > span').click()

    })
  });
});
