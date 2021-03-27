describe('products-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=productswrappercomponent--primary'));

  it('should render the component', () => {
    cy.get('uap-products-wrapper').should('exist');
  });
});
