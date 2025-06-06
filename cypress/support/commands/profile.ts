export const updateProfile = (name: string, lastname: string) => {
  cy.getByTestId('ProfileCardView.EditButton').click()
  cy.getByTestId('Input.Firstname').clear().type(name)
  cy.getByTestId('Input.Lastname').clear().type(lastname)
  cy.getByTestId('ProfileCardEdit.SaveButton').click()
}
export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    body: {
      id: '5',
      firstname: 'Test',
      lastname: 'User',
      age: 27,
      country: 'Ukraine',
      currency: 'UAH',
      username: 'manager',
      city: 'Vinnytsia',
      avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858578.png',
    },
    headers: { Authorization: 'asdf' },
    url: `http://localhost:8000/profile/${profileId}`,
  })
}

// @ts-ignore
declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(name: string, lastname: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
