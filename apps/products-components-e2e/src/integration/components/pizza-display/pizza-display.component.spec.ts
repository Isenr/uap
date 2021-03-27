describe('products-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pizzadisplaycomponent--primary&knob-pizza'));

  it('should render the component', () => {
    cy.get('uap-pizza-display').should('exist');
  });
});
