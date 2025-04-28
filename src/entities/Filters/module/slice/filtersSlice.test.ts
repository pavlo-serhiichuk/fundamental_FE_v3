import {FiltersSchema, SortByType} from '../types/FiltersSchema'
import {filtersActions, filtersReducer} from './filtersSlice'

describe('filtersSlice', () => {
  test('set search value', () => {
    const state: FiltersSchema = {searchValue: 'test'}
    expect(
      filtersReducer(
        state,
        filtersActions.setSearchValue('value'),
      ),
    ).toEqual({searchValue: 'value'})
  })

  test('set order', () => {
    const state: FiltersSchema = {orderBy: 'asc'}
    expect(
      filtersReducer(
        state,
        filtersActions.setOrderBy('desc'),
      ),
    ).toEqual({orderBy: 'desc'})
  })

  test('set sort', () => {
    const state: FiltersSchema = {sortBy: SortByType.DATE}
    expect(
      filtersReducer(
        state,
        filtersActions.setSortBy(SortByType.NAME),
      ),
    ).toEqual({sortBy: SortByType.NAME})
  })
})
