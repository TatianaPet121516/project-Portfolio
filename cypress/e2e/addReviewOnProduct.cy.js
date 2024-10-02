describe('Test Case 21: Add review on product', () => {
  it('Should add a review on a product', () => {
    cy.visit('');
    // Click on 'Products' button
    cy.get('a[href="/products"]').click();

    // Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should('include', '/products');

    // Click on 'View Product' button and verify 'Write Your Review' is visible
    cy.get('a[href="/product_details/2"]').click();
    cy.contains('Write Your Review').should('be.visible');

    // Enter name, email, and review
    cy.get('#name').type('Test User');
    cy.get('#email').type('testuser@example.com');
    cy.get('#review').type('Great product!');

    // Click 'Submit' button
    cy.get('#button-review').click();

    // Verify success message 'Thank you for your review.'
    cy.contains('Thank you for your review.').should('be.visible');
  });
});