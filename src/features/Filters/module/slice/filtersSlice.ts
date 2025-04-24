import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type {FiltersSchema, OrderType} from '../types/FiltersSchema'
import {SortByParams} from '../types/FiltersSchema'

const initialState: FiltersSchema = {
  searchValue: '',
  order: 'asc',
  sortBy: SortByParams.DATE,
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setOrder: (state: FiltersSchema, action: PayloadAction<OrderType>) => {
      state.order = action.payload
    },
    setSearchValue: (state: FiltersSchema, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setSortField: (state: FiltersSchema, action: PayloadAction<SortByParams>) => {
      state.sortBy = action.payload
    },
  },
})

export const {actions: filtersActions} = filtersSlice
export const {reducer: filtersReducer} = filtersSlice
