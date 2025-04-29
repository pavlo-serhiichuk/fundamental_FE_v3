import {type StateSchema} from 'app/providers/StoreProvider'
import {getSignInInitialState} from '../slice/getSignInInitialState'
import {
  getSignInData,
  getSignInUsername,
  getSignInPassword,
  getSignInIsLoading,
  getSignInError,
} from '../selectors/getSignInSelectors'

describe('getSignInData', () => {
  test('return value', () => {
    const initialState = getSignInInitialState(true)

    const state: DeepPartial<StateSchema> = {signIn: initialState}
    expect(getSignInData(state as StateSchema)).toBe(initialState)
  })
})

describe('getSignInUsername', () => {
  test('return value', () => {
    const initialState = getSignInInitialState(true)

    const state: DeepPartial<StateSchema> = {signIn: initialState}
    expect(getSignInUsername(state as StateSchema)).toBe('admin')
  })
})

describe('getSignInPassword', () => {
  test('return value', () => {
    const initialState = getSignInInitialState(true)

    const state: DeepPartial<StateSchema> = {signIn: initialState}
    expect(getSignInPassword(state as StateSchema)).toBe('111')
  })
})

describe('getSignInIsLoading', () => {
  test('return value', () => {
    const initialState = getSignInInitialState(true)

    const state: DeepPartial<StateSchema> = {signIn: initialState}
    expect(getSignInIsLoading(state as StateSchema)).toBe(false)
  })
})

describe('getSignInError', () => {
  test('return value', () => {
    const initialState = getSignInInitialState(true)

    const state: DeepPartial<StateSchema> = {signIn: initialState}
    expect(getSignInError(state as StateSchema)).toBe(undefined)
  })

  test('return error message', () => {
    const initialState = getSignInInitialState(true, true)

    const state: DeepPartial<StateSchema> = {signIn: initialState}
    expect(getSignInError(state as StateSchema)).toBe('Error is real. Try again')
  })
})
