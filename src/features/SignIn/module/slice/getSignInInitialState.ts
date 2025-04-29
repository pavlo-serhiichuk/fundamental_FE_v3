import {SignInSchema} from '../types/signInSchema'

export function getSignInInitialState(isWithValue: boolean = false, withError: boolean = false): SignInSchema {
  return {
    username: isWithValue ? 'admin' : '',
    password: isWithValue ? '111' : '',
    isLoading: false,
    error: withError ? 'Error is real. Try again' : undefined,
  }
}
