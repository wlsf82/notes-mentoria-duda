describe('Login', () => {
  beforeEach(() => cy.visit('/login'));

  it('login com sucesso', () => {
    cy.login();

    cy.contains('Logout').should('exist');
  });

  it('login com senha inválida', () => {
    cy.login(Cypress.env('user'), 'invalid-password');

    cy.url().should('contain', 'login');
  });
});
