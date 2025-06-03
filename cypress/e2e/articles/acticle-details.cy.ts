let articleId: string

describe('Article details is opened', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then((article) => {
      articleId = article.id || '0'
      cy.visit(`/articles/${article.id}`)
    })
  })
  afterEach(() => {
    cy.removeArticle(articleId)
  })
  it('and User sees article', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })
  it.skip('and User sees recommendations', () => {
    cy.getByTestId('ArticleDetailsRecommendations').should('exist')
  })

  it.skip('and User leaves comment', () => {
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.sendComment()
    cy.getByTestId('CommentCard').should('have.length', 1)
    cy.deleteComment()
  })

  it('and User rates article', () => {
    cy.getByTestId('ArticleRating').scrollIntoView()
    cy.rate()
    cy.get('[data-selected=true]').should('have.length', 5)
    cy.deleteRating('articles-ratings')
  })

  it('and User rates article with STUBS(fixtures)', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' })
    cy.getByTestId('ArticleRating').scrollIntoView()
    cy.rate()
    cy.get('[data-selected=true]').should('have.length', 5)
    cy.deleteRating('articles-ratings')
  })
})
