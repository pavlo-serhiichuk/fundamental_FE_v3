import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {ArticleTopicType} from 'entities/Article'
import type {FiltersSchema, OrderByType} from '../types/FiltersSchema'
import {SortByType} from '../types/FiltersSchema'

const initialState: FiltersSchema = {
  searchValue: '',
  order: 'asc',
  sortBy: SortByType.DATE,
  topicType: 'ALL',
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setOrder: (state: FiltersSchema, action: PayloadAction<OrderByType>) => {
      state.order = action.payload
    },
    setSearchValue: (state: FiltersSchema, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setSortField: (state: FiltersSchema, action: PayloadAction<SortByType>) => {
      state.sortBy = action.payload
    },
    setTopicType: (state: FiltersSchema, action: PayloadAction<ArticleTopicType>) => {
      state.topicType = action.payload
    },
  },
})

export const {actions: filtersActions} = filtersSlice
export const {reducer: filtersReducer} = filtersSlice
