import {login} from './commands/login'

Cypress.Commands.add('login', login)

// @ts-ignore
declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable
    }
  }
}
