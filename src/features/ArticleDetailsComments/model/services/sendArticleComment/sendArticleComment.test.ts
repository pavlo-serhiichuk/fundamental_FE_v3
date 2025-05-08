import {TestAsyncThunk} from '@/shared/lib/tests/TestAsyncThynk/TestAsyncThunk'
import {StateSchema} from '@/app/providers/StoreProvider'
import {sendArticleComment} from './sendArticleComment'

const mockState: DeepPartial<StateSchema> = {addCommentForm: {text: 'comment'}, user: {authData: {id: '1'}}, articleDetailsPage: {details: {data: {id: '1'}}}}

describe('sendArticleComment.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(sendArticleComment, mockState)
    thunk.api.post.mockReturnValue(Promise.resolve({}))
    const result: any = await thunk.callThunk()
    expect(result.meta.requestStatus).toEqual('fulfilled')
  })
  //
  // test('error', async () => {
  //   const thunk = new TestAsyncThunk(sendArticleComment, mockState)
  //   // eslint-disable-next-line prefer-promise-reject-errors
  //   thunk.api.get.mockReturnValue(Promise.reject({status: 403}))
  //   const result: any = await thunk.callThunk()
  //   expect(result.meta.requestStatus).toBe('rejected')
  // })
})
