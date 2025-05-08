import {TestAsyncThunk} from '@/shared/lib/tests/TestAsyncThynk/TestAsyncThunk'
import {getArticleDetailsMockState} from '@/features/ArticleDetails/model/slice/articleState'
import {ArticleDetailsSchema} from '@/features/ArticleDetails'
import {fetchArticlesList} from '../fetchArticlesList/fetchArticlesList'
import {fetchNextArticlesList} from './fetchNextArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlesList.test', () => {
  test('success', async () => {
    const mockData = getArticleDetailsMockState() as ArticleDetailsSchema
    const thunk = new TestAsyncThunk(
      fetchNextArticlesList,
      {
        articlesPage: {
          pageNumber: 2,
          ids: [],
          entities: {},
          limit: 5,
          isLoading: false,
          hasMore: true,
        },
      },
    )
    thunk.api.get.mockReturnValue(Promise.resolve({data: mockData}))
    const result: any = await thunk.callThunk()
    expect(thunk.dispatch).toBeCalledTimes(4)
  })

  test('stopped', async () => {
    const mockData = getArticleDetailsMockState() as ArticleDetailsSchema
    const thunk = new TestAsyncThunk(
      fetchNextArticlesList,
      {
        articlesPage: {
          pageNumber: 2,
          ids: [],
          entities: {},
          limit: 5,
          isLoading: false,
          hasMore: false,
        },
      },
    )
    thunk.api.get.mockReturnValue(Promise.resolve({data: mockData}))
    const result: any = await thunk.callThunk()
    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
