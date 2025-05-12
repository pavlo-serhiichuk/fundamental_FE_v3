import {TestAsyncThunk} from '@/shared/lib/tests/TestAsyncThynk/TestAsyncThunk'
import {getArticleDetailsMockState, ArticleDetailsSchema} from '@/features/ArticleDetails'
import {fetchArticlesList} from './fetchArticlesList'

describe('fetchArticlesList.test', () => {
  test('success', async () => {
    const mockData = getArticleDetailsMockState() as ArticleDetailsSchema
    const thunk = new TestAsyncThunk(fetchArticlesList, {articlesPage: {}, filters: {}})
    thunk.api.get.mockReturnValue(Promise.resolve({data: mockData}))
    const result: any = await thunk.callThunk()
    expect(result.payload).toEqual(mockData)
    expect(result.meta.requestStatus).toEqual('fulfilled')
  })

  // test('error', async () => {
  //   const thunk = new TestAsyncThunk(fetchArticlesList, {articlesPage: {}})
  //   // eslint-disable-next-line prefer-promise-reject-errors
  //   thunk.api.get.mockReturnValue(Promise.reject({status: 403}))
  //   const result: any = await thunk.callThunk()
  //   expect(result.meta.requestStatus).toBe('rejected')
  // })
})
