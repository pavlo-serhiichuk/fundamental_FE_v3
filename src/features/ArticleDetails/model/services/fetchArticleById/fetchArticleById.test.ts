import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThynk/TestAsyncThunk'
import {ArticleDetailsSchema} from '../../types/ArticleDetailsSchema'
import {getArticleDetailsMockState} from '../../slice/articleState'
import {fetchArticleById} from './fetchArticleById'

describe('fetchArticleById.test', () => {
  test('success', async () => {
    const mockData = getArticleDetailsMockState() as ArticleDetailsSchema
    const thunk = new TestAsyncThunk(fetchArticleById, {articleDetailsPage: {details: {}}})
    thunk.api.get.mockReturnValue(Promise.resolve({data: mockData}))
    const result: any = await thunk.callThunk('1')
    expect(result.payload).toEqual(mockData)
    expect(result.meta.requestStatus).toEqual('fulfilled')
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById, {articleDetailsPage: {details: {}}})
    // eslint-disable-next-line prefer-promise-reject-errors
    thunk.api.get.mockReturnValue(Promise.reject({status: 403}))
    const result: any = await thunk.callThunk('1')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
