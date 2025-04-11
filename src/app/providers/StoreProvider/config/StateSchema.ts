import {CounterSchema} from 'entities/Counter'
import {UserSchema} from 'entities/User'
import {
  type Action, EnhancedStore, type ReducersMapObject, type Reducer,
} from '@reduxjs/toolkit'
import {type NavigateOptions} from 'react-router/dist/lib/context'
import {type AxiosInstance} from 'axios'
import {type To} from '@remix-run/router'
import {SignInSchema} from 'features/SignIn'
import {ProfileSchema} from 'entities/Profile'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // async reducers
  signIn?: SignInSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: Action) => DeepPartial<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
