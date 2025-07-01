import { mockEditArticleState } from '../../mocks/mockEditArticleState'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThynk/TestAsyncThunk'
import { deleteArticleById } from './deleteArticleById'

describe('deleteArticleById', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(deleteArticleById, {
      editArticle: mockEditArticleState,
    })
    // @ts-ignore
    thunk.api.delete.mockReturnValue({ data: {} })
    const result = await thunk.callThunk()
    expect(result.meta.requestStatus).toEqual('fulfilled')
    expect(result.payload).toEqual({})
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(deleteArticleById, {
      editArticle: mockEditArticleState,
    })
    thunk.api.delete.mockReturnValue(Promise.reject({ status: 403 }))
    const result: any = await thunk.callThunk()
    expect(result.meta.requestStatus).toEqual('rejected')
  })
})
