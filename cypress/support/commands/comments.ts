export const sendComment = () => {
  cy.getByTestId('AddCommentForm.Input').type('comment')
  cy.getByTestId('AddCommentForm.SendButton').click()
}

export const deleteComment = () => {
  cy.request({
    method: 'GET',
    headers: { Authorization: 'asdf' },
    url: 'http://localhost:8000/comments?userId=5',
  }).then((res) => {
    const deletes = res.body.map((comment: any) =>
      cy.request({
        method: 'DELETE',
        headers: { Authorization: 'asdf' },
        url: `http://localhost:8000/comments/${comment.id}`,
      }),
    )
    return Promise.all(deletes)
  })
}

// @ts-ignore
declare global {
  namespace Cypress {
    interface Chainable {
      sendComment(): Chainable<void>

      deleteComment(): Chainable<void>
    }
  }
}
