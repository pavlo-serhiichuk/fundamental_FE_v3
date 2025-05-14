import {StateSchema} from '@/app/providers/StoreProvider'
import {SortByType} from '../consts/consts'

export const getFiltersState = (state: StateSchema) => state.filters
export const getFiltersOrder = (state: StateSchema) => state.filters?.orderBy
export const getFiltersSortBy = (state: StateSchema) => state.filters?.sortBy || SortByType.DATE
export const getFiltersSearchValue = (state: StateSchema) => state.filters?.searchValue || ''
export const getFiltersTopicType = (state: StateSchema) => state.filters.topicType || 'ALL'
