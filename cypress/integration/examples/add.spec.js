/// <reference types="cypress" />

import { WENT_WELL } from "../../../src/store/retrospective.constants";

context("Add", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Went well card and insert text", () => {
    cy.find("button").first().click();
  });
});
