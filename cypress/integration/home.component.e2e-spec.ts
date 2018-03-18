describe('Home', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should have an input', () => {
    cy.get('sd-home form input');
  });

  it('should have a list of computer scientists', () => {
    const list = () => cy.get('sd-home mat-list').find('h3');
    list().should('have.length', 4);
    list().eq(0).should('have.text', 'Edsger Dijkstra');
    list().eq(1).should('have.text', 'Donald Knuth');
    list().eq(2).should('have.text', 'Alan Turing');
    list().eq(3).should('have.text', 'Grace Hopper');
  });

  it('should add a name to the list using the form', () => {
    cy.get('sd-home form input').type('Tim Berners-Lee');
    cy.get('sd-home form button').click();
    cy.get('sd-home mat-list').find('h3')
      .should('have.length', 5)
      .eq(4).should('have.text', 'Tim Berners-Lee');
  });

});
