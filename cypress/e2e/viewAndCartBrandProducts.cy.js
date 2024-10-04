describe('Test Case 19: View & Cart Brand Products', () => {
  it('Should view and cart brand products', () => {
    cy.visit('');
    cy.get('a[href="/products"]').click();  

    cy.get('.brands_products').should('be.visible');   

    // Click on any brand name and Verify that user is navigated to brand page and brand products are displayed
    cy.contains('Polo').click();   
    cy.get('.title').should('contain', 'Brand - Polo Products'); 

    // On left side bar, click on any other brand link And verify that user is navigated to that brand page and can see products
    cy.contains('H&M').click();                                
    cy.get('.title').should('contain', 'Brand - H&M Products'); 
   });
});  
