import { type SignInSchema } from '../types/signInSchema'
import { signInActions, signInReducer } from './signInSlice'

describe('signInSlice.test', () => {
  test('set username', () => {
    const state: DeepPartial<SignInSchema> = { username: '222' }

    expect(
      signInReducer(
        state as SignInSchema,
        signInActions.setUsername('username12'),
      ),
    ).toEqual({ username: 'username12' })
  })

  test('set password', () => {
    const state: DeepPartial<SignInSchema> = { password: '1' }
    expect(
      signInReducer(state as SignInSchema, signInActions.setPassword('abc2')),
    ).toEqual({ password: 'abc2' })
  })
})
