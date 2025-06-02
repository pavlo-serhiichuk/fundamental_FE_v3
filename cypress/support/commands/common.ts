import {AUTH_USER_DATA} from '../../../src/shared/const/localStorage'
import {selectByTestId} from '../../helpers/selectByTestId'
import {User} from '../../../src/entities/User'

export const login = (username: string = 'testusername', password: string = '111') => {
  cy.request({
    method: 'POST',
    body: {username, password},
    url: 'http://localhost:8000/login',
  }).then(({body}) => {
    window.localStorage.setItem(AUTH_USER_DATA, JSON.stringify(body))
    return body
  })
}
export const getByTestId = (testId: string) => cy.get(selectByTestId(testId))

// @ts-ignore
declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<User>
      getByTestId(testId: string): ReturnType<typeof cy.get>
    }
  }
}
