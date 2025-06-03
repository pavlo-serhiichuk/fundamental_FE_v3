import {
  type Action,
  EnhancedStore,
  type ReducersMapObject,
  type Reducer,
} from '@reduxjs/toolkit'
import { type NavigateOptions } from 'react-router/dist/lib/context'
import { type AxiosInstance } from 'axios'
import { type To } from '@remix-run/router'
import { UserSchema } from '@/entities/User'
import { CounterSchema } from '@/entities/Counter'
import { SignInSchema } from '@/features/SignIn'
import { ProfileSchema } from '@/entities/Profile'
import { ArticlesPageSchema } from '@/pages/ArticlesPage'
import { ListViewSchema } from '@/features/ChangeListView'
import { ScrollRecoverSchema } from '@/features/ScrollRecover'
import { FiltersSchema } from '@/entities/Filters'
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage'
import { AddCommentSchema } from '@/entities/Comment'
import { rtkApi } from '@/shared/api/rtkApi'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  listView: ListViewSchema
  scrollRecover: ScrollRecoverSchema
  filters: FiltersSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // async reducers
  signIn?: SignInSchema
  profile?: ProfileSchema
  addCommentForm?: AddCommentSchema
  articleDetailsPage?: ArticleDetailsPageSchema
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: Action) => DeepPartial<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithReducerManager
  extends EnhancedStore<StateSchema> {
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
