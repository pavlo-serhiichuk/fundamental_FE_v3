import {userActions} from 'entities/User'
import axios from 'axios'
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThynk/TestAsyncThunk'
import {fetchSignIn} from './fetchSignIn'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

describe('fetchSignIn', () => {
  test('success', async () => {
    const userValue = {password: '111', username: 'test'}
    mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}))
    const thunk = new TestAsyncThunk(fetchSignIn)
    const result = await thunk.callThunk(userValue)
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
  })
  test('error', async () => {
    const userValue = {password: '111', username: 'test'}
    mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))
    const thunk = new TestAsyncThunk(fetchSignIn)
    const result = await thunk.callThunk(userValue)
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
  })
})

// by hands
// jest.mock('axios')
// const mockedAxios = jest.mocked(axios, true)
//
// describe('fetchSignIn', () => {
//   let dispatch: ThunkDispatch<StateSchema, any, any>
//   let getState: () => StateSchema
//   beforeEach(() => {
//     dispatch = jest.fn()
//     getState = jest.fn()
//   })
//   test('success', async () => {
//     // мокаємо респонс
//     const userValue = {password: '111', username: 'test'}
//     mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}))
//     const action = fetchSignIn(userValue)
//     const result = await action(dispatch, getState, undefined)
//     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
//     expect(dispatch).toHaveBeenCalledTimes(3)
//     expect(mockedAxios.post).toHaveBeenCalled()
//     expect(result.meta.requestStatus).toBe('fulfilled')
//   })
//
//   test('error', async () => {
//     // мокаємо респонс
//     const userValue = {password: '111', username: 'test'}
//     mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))
//     const action = fetchSignIn(userValue)
//     const result = await action(dispatch, getState, undefined)
//     // expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
//     expect(result.meta.requestStatus).toBe('rejected')
//   })
// })
