import {configureStore} from '@reduxjs/toolkit'
import {counterReducer} from 'entities/Counter'
import {StateSchema} from './StateSchema'

export function createReduxStore(initialState?: StateSchema) {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState,
    devTools: __IS_DEV__,
  })
}
