describe('products-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productscomponent--primary'));

  it('should render the component', () => {
    cy.get('uap-products').should('exist');
  });
});
