describe('Test Cases 19-26', () => {
  beforeEach(() => {
    cy.visit('http://automationexercise.com');
  });

  describe('Test Case 19: View & Cart Brand Products', () => {
    it('Should view and cart brand products', () => {
      cy.get('a[href="/products"]').click();                      // Click on 'Products' button
      cy.get('.brands_products').should('be.visible');            // Verify that Brands are visible on left side bar
      cy.contains('Polo').click();                                // Click on any brand name
      cy.get('.title').should('contain', 'Brand - Polo Products'); // Verify that user is navigated to brand page and brand products are displayed
      cy.contains('H&M').click();                                 // On left side bar, click on any other brand link
      cy.get('.title').should('contain', 'Brand - H&M Products'); // Verify that user is navigated to that brand page and can see products
    });
  });

  


});