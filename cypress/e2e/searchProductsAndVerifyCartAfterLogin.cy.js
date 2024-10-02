describe('Test Case 20: Search Products and Verify Cart After Login', () => {
    it('Should search products and verify cart after login', () => {
    cy.visit('');
    cy.get('a[href="/products"]').click();

    // Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should('include', '/products');

    // Enter product name in search input and click search button
    cy.get('#search_product').type('Dress');
    cy.get('#submit_search').click();

    // Verify 'SEARCHED PRODUCTS' is visible
    cy.get('.title').should('contain', 'Searched Product');

    // Verify all the products related to search are visible
    cy.get('.features_items').should('be.visible');

    // Add those products to cart
    cy.contains('Add to cart').click();
   
    // Click 'Signup / Login' button and submit login details
    cy.get('a[href="/login"]').click();
    cy.get('input[data-qa="login-email"]').type('testuser@example.com');
    cy.get('input[data-qa="login-password"]').type('password');
    cy.get('button[data-qa="login-button"]').click();

    // Again, go to Cart page
    cy.get('a[href="/view_cart"]').click();

    // Verify that those products are visible in cart after login
    cy.get('.cart_info').should('be.visible');
  });
});