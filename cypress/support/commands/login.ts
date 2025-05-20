import {AUTH_USER_DATA} from '../../../src/shared/const/localStorage'

export const login = (username: string = 'admin', password: string = '111') => {
  cy.request({
    method: 'POST',
    body: {username, password},
    url: 'http://localhost:8000/login',
  }).then(({body}) => {
    window.localStorage.setItem(AUTH_USER_DATA, JSON.stringify(body))
  })
}
