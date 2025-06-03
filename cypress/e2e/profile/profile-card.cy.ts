let profileId: string
describe('Profile page is opened', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login().then((data) => {
      cy.visit(`profile/${data.id}`)
      if (data.id) {
        profileId = data.id
      }
    })
  })
  afterEach(() => {
    cy.resetProfile(profileId)
  })
  it('and exist', () => {
    cy.getByTestId('ProfileCardView').should('be.visible')
    cy.getByTestId('ProfileCardView.EditButton').should('be.visible')
    cy.getByTestId('ProfileCardView.Title').should('have.text', 'Test User')
  })
  it('and edited', () => {
    const newName = 'Firstname'
    const newLastname = 'Lastname'
    cy.updateProfile(newName, newLastname)
    cy.getByTestId('ProfileCardView.Title').should(
      'have.text',
      `${newName} ${newLastname}`,
    )
  })
})
