import { type StateSchema } from '@/app/providers/StoreProvider'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from './getArticleDetailsData'
import { mockArticleDetailsState } from '../mocks/mockArticleDetailsState'

describe('getArticleDetailsData.test', () => {
  test('get data', () => {
    const mockData = mockArticleDetailsState
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: { details: mockData },
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(mockData.data)
  })
  test('get isLoading', () => {
    const mockData = { ...mockArticleDetailsState, isLoading: true }
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: { details: mockData },
    }
    expect(getArticleDetailsLoading(state as StateSchema)).toBe(true)
  })
  test('get error', () => {
    const mockData = { ...mockArticleDetailsState, error: 'error' }
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: { details: mockData },
    }
    expect(getArticleDetailsError(state as StateSchema)).toBe('error')
  })
})
