import {type StateSchema} from 'app/providers/StoreProvider'
import {
  ArticleDetailsSchema,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from 'features/ArticleDetails'
import {getArticleDetailsMockState} from '../slice/articleState'

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
