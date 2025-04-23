import React, {Children, FC, ReactNode} from 'react'
import {Provider} from 'react-redux'
import {ReducersMapObject} from '@reduxjs/toolkit'
import {useNavigate} from 'react-router-dom'
import {createReduxStore} from '../config/store'
import {StateSchema} from '../config/StateSchema'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const {
    children,
    initialState,
    asyncReducers,
  } = props

  const store = createReduxStore(
      initialState as StateSchema,
      asyncReducers as ReducersMapObject<StateSchema>,
  )

  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      {Children.only(<>{children}</>)}
    </Provider>
  )
}
