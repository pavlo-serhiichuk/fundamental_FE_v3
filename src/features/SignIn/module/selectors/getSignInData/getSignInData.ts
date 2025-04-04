import {type StateSchema} from 'app/providers/StoreProvider'
import {getSignInInitialState} from '../../slice/getSignInInitialState'

export const getSignInData = (state: StateSchema) => {
  if (!state.hasOwnProperty('signIn')) {
    return getSignInInitialState()
  }

  return state.signIn
}
