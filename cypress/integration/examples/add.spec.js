/// <reference types="cypress" />
import { placeholder } from '../../fixtures/placeholder.json';

describe('Retrospective board', () => {
  context('Add', () => {
    beforeEach(() => {
      cy.server(); // enable response stubbing
      cy.route('/placeholder', 'fixture:placeholder.json').as(
        'getPlaceholder',
      );
      cy.visit('/');
    });

    it('Went well card and insert text', () => {
      cy.get('button').first().click();
      cy.wait('@getPlaceholder');
      cy.focused().should('not.have.value', placeholder);
      cy.focused().clear().type('First thing went well');
    });

    it('like a card', () => {
      cy.get('button').first().click();
      cy.wait('@getPlaceholder');
      cy.get('textarea')
        .parent()
        .within(() => {
          cy.get('div > span').click();
        });
    });
  });
});
