import {StateSchema} from 'app/providers/StoreProvider'

export const getFiltersState = (state: StateSchema) => state.filters
export const getFiltersOrder = (state: StateSchema) => state.filters.order
export const getFiltersSortBy = (state: StateSchema) => state.filters.sortBy
export const getFiltersSearchValue = (state: StateSchema) => state.filters.searchValue
