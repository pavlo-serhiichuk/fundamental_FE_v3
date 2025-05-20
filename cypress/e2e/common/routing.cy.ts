import {selectByTestId} from '../../helpers/selectByTestId'

describe('template spec', () => {
  describe('User is not authenticated', () => {
    it('passes', () => {
      cy.visit('/')
      cy.get(selectByTestId('MainPage')).should('be.visible')
    })
    it('try to visit profile', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('MainPage')).should('be.visible')
    })
    it('enter not existing route', () => {
      cy.visit('/asdfsdfdsf')
      cy.get(selectByTestId('NotFoundPage')).should('be.visible')
    })
  })
  describe('User is authenticated', () => {
    beforeEach(() => {
      cy.login()
    })
    it('visit profile', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('be.visible')
    })
    it('visit articles page', () => {
      cy.login()
      cy.visit('/articles')
      cy.get(selectByTestId('ArticlesPage')).should('be.visible')
    })
  })
})
