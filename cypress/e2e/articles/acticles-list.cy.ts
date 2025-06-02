describe('User auths and open articles list and', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/articles')
  })
  it('articles are visible', () => {
    cy.getByTestId('ArticlesPage').should('be.visible')
    cy.getByTestId('ArticlesList').should('exist')
    cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3)
  })

  it('articles are visible on STUBS(fixtures)', () => {
    cy.intercept('GET', '**/articles?*', {fixture: 'articles.json'})
    cy.getByTestId('ArticlesPage').should('be.visible')
    cy.getByTestId('ArticlesList').should('exist')
    cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3)
  })

  it.skip('template of skipped test', () => {
    cy.getByTestId('NotRealId').should('be.visible')
  })
})
