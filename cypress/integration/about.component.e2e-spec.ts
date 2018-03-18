describe('About', () => {

  beforeEach(() => {
    cy.visit('/about');
  });

  it('should have correct feature heading', () => {
    cy.get('mat-card h2').should('have.text', 'Features');
  });

});
