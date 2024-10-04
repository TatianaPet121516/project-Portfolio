describe('Test Case 18: View Category Products', () => {
  it('Should view category products', () => {
    cy.visit('');
    cy.get('.left-sidebar').should('be.visible');
    cy.contains('Women').click();
    cy.contains('Dress').click();

    // Verify that category page is displayed and confirm text
    cy.get('.title.text-center').should('contain', 'Women - Dress Products');

    // On left side bar, click on any sub-category link of 'Men' category
    cy.contains('Men').click();
    cy.contains('Tshirts').click();

    // Verify that user is navigated to that category page
    cy.get('.title').should('contain', 'Men - Tshirts Products');
  });
});