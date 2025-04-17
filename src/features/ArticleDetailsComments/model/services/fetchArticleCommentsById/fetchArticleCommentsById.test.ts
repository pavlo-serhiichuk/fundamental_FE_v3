import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThynk/TestAsyncThunk'
import {type Comment} from 'entities/Comment'
import {
  fetchArticleCommentsById,
} from './fetchArticleCommentsById'

const comments = [{
  id: '1',
  text: 'comment text',
  user: {
    id: '1',
    name: 'name of the user',
    age: 28,
    role: 'ADMIN',
    avatar: 'https://cdn.sortiraparis.com/images/80/98390/1014564-avatar-le-dernier-maitre-de-l-air-la-serie-netflix-en-live-action-devoile-sa-bande-annonce-finale.jpg',
  },
}, {
  id: '2',
  text: 'comment text 2',
  user: {
    id: '1',
    name: 'name of the user 2',
    age: 28,
    role: 'USER',
    avatar: 'https://cdn.sortiraparis.com/images/80/98390/1014564-avatar-le-dernier-maitre-de-l-air-la-serie-netflix-en-live-action-devoile-sa-bande-annonce-finale.jpg',
  },
}] as Comment[]

describe('fetchArticleCommentsById.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleCommentsById)
    thunk.api.get.mockReturnValue(Promise.resolve({data: comments}))
    const response: any = await thunk.callThunk('1')
    expect(response.meta.requestStatus).toEqual('fulfilled')
    expect(response.payload).toEqual(comments)
  })

  test('rejected', async () => {
    const thunk = new TestAsyncThunk(fetchArticleCommentsById)
    // eslint-disable-next-line prefer-promise-reject-errors
    thunk.api.get.mockReturnValue(Promise.reject({status: 403}))
    const response: any = await thunk.callThunk('1')
    expect(response.meta.requestStatus).toEqual('rejected')
  })
})
