import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {ArticleTopicType} from 'entities/Article'
import {SortByType} from '../consts/consts'
import type {FiltersSchema, OrderByType} from '../types/FiltersSchema'

const initialState: FiltersSchema = {
  searchValue: '',
  orderBy: 'asc',
  sortBy: SortByType.DATE,
  topicType: 'ALL',
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setOrderBy: (state: FiltersSchema, action: PayloadAction<OrderByType>) => {
      state.orderBy = action.payload
    },
    setSearchValue: (state: FiltersSchema, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setSortBy: (state: FiltersSchema, action: PayloadAction<SortByType>) => {
      state.sortBy = action.payload
    },
    setTopicType: (state: FiltersSchema, action: PayloadAction<ArticleTopicType>) => {
      state.topicType = action.payload
    },
  },
})

export const {actions: filtersActions} = filtersSlice
export const {reducer: filtersReducer} = filtersSlice
