import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThynk/TestAsyncThunk'
import {ValidationError} from '../../types/ProfileSchema'
import {fetchProfileData} from './fetchProfileData'
import {profileMockState, profileMockForm} from '../../slice/profileState'

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({data: profileMockForm}))
    const result: any = await thunk.callThunk('1')
    expect(result.payload).toEqual(profileMockForm)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('server error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData, {profile: profileMockState})
    // eslint-disable-next-line prefer-promise-reject-errors
    thunk.api.get.mockReturnValue(Promise.reject({status: 403}))
    const result = await thunk.callThunk('1')
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidationError.SERVER_ERROR,
    ])
  })
})
