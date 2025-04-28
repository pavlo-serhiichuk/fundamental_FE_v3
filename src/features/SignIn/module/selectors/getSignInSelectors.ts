import {type StateSchema} from 'app/providers/StoreProvider'
import {getSignInInitialState} from '../slice/getSignInInitialState'

export const getSignInData = (state: StateSchema) => state.signIn || getSignInInitialState()
export const getSignInUsername = (state: StateSchema) => state?.signIn?.username || ''
export const getSignInPassword = (state: StateSchema) => state?.signIn?.password || ''
export const getSignInIsLoading = (state: StateSchema) => state?.signIn?.isLoading || false
export const getSignInError = (state: StateSchema) => state?.signIn?.error
