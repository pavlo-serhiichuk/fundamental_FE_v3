import React, {Children, ReactNode, useEffect} from 'react'
import {useStore} from 'react-redux'
import {ReduxStoreWithReducerManager} from 'app/providers/StoreProvider'
import {Reducer} from '@reduxjs/toolkit'
import {StateSchemaKey} from 'app/providers/StoreProvider/config/StateSchema'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicReducerLoaderProps {
    reducers: ReducersList
    children: ReactNode;
    removeAfterUnmount?: boolean
}

const DynamicReducerLoader = (props: DynamicReducerLoaderProps) => {
  const store = useStore() as ReduxStoreWithReducerManager
  const {
    reducers, children, removeAfterUnmount = true,
  } = props
  useEffect(() => {
    Object.entries(reducers).forEach(([reducerName, reducer]) => {
      store.reducerManager.add(reducerName as StateSchemaKey, reducer)
      store.dispatch({type: `@INIT ${reducerName}`})
    })
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerName]) => {
          store.reducerManager.remove(reducerName as StateSchemaKey)
          store.dispatch({type: `@DESTROY ${reducerName}`})
        })
      }
    }
  }, [reducers, removeAfterUnmount, store])
  return (
    <>
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      {Children.only(<>{children}</>)}
    </>
  )
}

export default DynamicReducerLoader
