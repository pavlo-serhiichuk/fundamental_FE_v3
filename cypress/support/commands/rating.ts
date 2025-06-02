export const rate = () => {
  cy.getByTestId('StarRating.5').click()
  cy.getByTestId('RatingCard.Input').type('feedback')
  cy.getByTestId('RatingCard.SendButton').click()
}

export const deleteRating = (ratingUrl: string) => {
  cy.request({
    method: 'GET',
    headers: {Authorization: 'asdf'},
    url: `http://localhost:8000/${ratingUrl}?userId=5`,
  })
    .then((res) => {
      console.log('res.body', res.body)
      const deletes = res.body.map((comment: any) =>
        cy.request({
          method: 'DELETE',
          headers: {Authorization: 'asdf'},
          url: `http://localhost:8000/${ratingUrl}/${comment.id}`,
        }))
      return Promise.all(deletes)
    })
}

// @ts-ignore
declare global {
  namespace Cypress {
    interface Chainable {
      rate(): Chainable<void>
      deleteRating(ratingUrl: string): Chainable<void>
    }
  }
}
