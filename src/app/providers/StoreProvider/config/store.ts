import {configureStore, Reducer, type ReducersMapObject} from '@reduxjs/toolkit'
import {counterReducer} from 'entities/Counter'
import {userReducer} from 'entities/User'
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager'
import {$api} from 'shared/api/api'
import {CombinedState} from '@reduxjs/toolkit/query'
import {scrollRecoverReducer} from 'features/ScrollRecover'
import {changeListViewReducer} from 'features/ChangeListView'
import {filtersReducer} from 'features/Filters'
import {StateSchema, ThunkExtraArg} from './StateSchema'

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    listView: changeListViewReducer,
    scrollRecover: scrollRecoverReducer,
    filters: filtersReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArg: ThunkExtraArg = {
    api: $api,
  }

  const store = configureStore({
    // @ts-ignore
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
    devTools: __IS_DEV__,
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
