describe('products-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productitemcomponent--primary'));

  it('should render the component', () => {
    cy.get('uap-product-item').should('exist');
  });
});
