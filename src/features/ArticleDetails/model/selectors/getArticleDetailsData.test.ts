import {type StateSchema} from '@/app/providers/StoreProvider'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from './getArticleDetailsData'
import {getArticleDetailsMockState} from '../slice/articleState'
import {ArticleDetailsSchema} from '../types/ArticleDetailsSchema'

describe('getArticleDetailsData.test', () => {
  test('get data', () => {
    const mockData = getArticleDetailsMockState() as ArticleDetailsSchema
    const state: DeepPartial<StateSchema> = {articleDetailsPage: {details: mockData}}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(mockData.data)
  })
  test('get isLoading', () => {
    const mockData = getArticleDetailsMockState(true) as ArticleDetailsSchema
    const state: DeepPartial<StateSchema> = {articleDetailsPage: {details: mockData}}
    expect(getArticleDetailsLoading(state as StateSchema)).toBe(true)
  })
  test('get error', () => {
    const mockData = getArticleDetailsMockState(false, 'error') as ArticleDetailsSchema
    const state: DeepPartial<StateSchema> = {articleDetailsPage: {details: mockData}}
    expect(getArticleDetailsError(state as StateSchema)).toBe('error')
  })
})
