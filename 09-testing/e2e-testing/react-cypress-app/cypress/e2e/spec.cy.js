describe('Sample Test', () => {
    it('Visits the app', () => {
      cy.visit('http://localhost:3000'); // Replace with your app's URL
      cy.contains('Learn React').click(); // Replace with your app-specific test
    });
  });
  