import {TestProvider} from '../../src/shared/lib/tests/renderTestComponent/renderTestComponent'
import SignInForm from '../../src/features/SignIn/ui/SignInForm/SignInForm'

describe('SignInForm.cy.tsx', () => {
  it('playground', () => {
    // cy.intercept('GET', '**/profile/*', {fixture: 'profile.json'})
    cy.mount(
      <TestProvider>
        <SignInForm />
      </TestProvider>,
    )
    cy.getByTestId('Signin.Username.Input').type('Username')
    cy.getByTestId('Signin.Username.Input').should('have.value', 'Username')

    cy.getByTestId('Signin.Password.Input').type('Password')
    cy.getByTestId('Signin.Password.Input').should('have.value', 'Password')
  })
})
