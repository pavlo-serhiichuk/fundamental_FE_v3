import {bindActionCreators, createSlice} from '@reduxjs/toolkit'
import {CreateSliceOptions, SliceCaseReducers, SliceSelectors} from '@reduxjs/toolkit/dist'
import {useDispatch} from 'react-redux'
import {useMemo} from 'react'

export function buildSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string,
  Selectors extends SliceSelectors<State>,
  ReducerPath extends string = Name
>(
  options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>,
) {
  const slice = createSlice(options)
  const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch])
  }
  return {...slice, useActions}
}
