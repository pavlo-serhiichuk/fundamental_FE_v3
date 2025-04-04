import {fetchSignIn} from 'features/SignIn/module/thunks/fetchSignIn'
import {userActions} from 'entities/User'
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThynk/TestAsyncThunk'

describe('fetchSignIn', () => {
  test('success', async () => {
    const userData = {password: '1', username: 'user22'}

    const thunk = new TestAsyncThunk(fetchSignIn)
    thunk.api.post.mockReturnValue(Promise.resolve({data: userData}))
    const result: any = await thunk.callThunk({username: 'user22', password: '111'})

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('error', async () => {
    // eslint-disable-next-line prefer-promise-reject-errors

    const thunk = new TestAsyncThunk(fetchSignIn)
    // eslint-disable-next-line prefer-promise-reject-errors
    thunk.api.post.mockReturnValue(Promise.reject({status: 403}))
    const result: any = await thunk.callThunk({username: 'user22', password: '111'})

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
  })
  // -- by hands --
  // let dispatch: Dispatch | any
  // let getState: () => StateSchema
  //
  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })
  //
  // test('signIn success', async () => {
  //   const userData = { id: '14', username: 'user22' }
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))
  //   const action = fetchSignIn({ username: '123', password: '123' })
  //   const result = await action(dispatch, getState, undefined)
  //
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setUserAuthData(userData))
  //   expect(dispatch).toHaveBeenCalledTimes(3)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  //   // expect().toEqual()
  // })
  // test('signIn failed', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.reject({ status: 403 }))
  //   const action = fetchSignIn({ username: '123', password: '123' })
  //   const result = await action(dispatch, getState, undefined)
  //
  //   expect(dispatch).toHaveBeenCalledTimes(2)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('rejected')
  //   expect(result.payload).toBe('User is not found. Try latter')
  // })
  // -- by hands --
})
