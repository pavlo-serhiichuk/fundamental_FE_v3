import {configureStore, type ReducersMapObject} from '@reduxjs/toolkit'
import {counterReducer} from 'entities/Counter'
import {userReducer} from 'entities/User'
import {signInReducer} from 'features/SignIn'
import {StateSchema} from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    signIn: signInReducer,
  }

  return configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    devTools: __IS_DEV__,
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
