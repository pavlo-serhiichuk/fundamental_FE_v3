import React, {Children, FC, ReactNode} from 'react'
import {Provider} from 'react-redux'
import {createReduxStore} from '../config/store'
import {StateSchema} from '../config/StateSchema'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const {
    children,
    initialState,
  } = props

  const store = createReduxStore(initialState as StateSchema)

  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      {Children.only(<>{children}</>)}
    </Provider>
  )
}
