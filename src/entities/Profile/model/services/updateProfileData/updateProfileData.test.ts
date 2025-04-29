import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThynk/TestAsyncThunk'
import {ValidationError} from 'entities/Profile'
import {updateProfileData} from './updateProfileData'
import {profileMockState, profileMockForm} from '../../slice/profileState'

describe('updateProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {profile: profileMockState})
    thunk.api.put.mockReturnValue(Promise.resolve({data: profileMockForm}))
    const result: any = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {profile: profileMockState})
    thunk.api.put.mockReturnValue(Promise.resolve({status: 403}))
    const result = await thunk.callThunk()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidationError.SERVER_ERROR,
    ])
  })

  test('validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {profile: {form: {...profileMockForm, firstname: ''}}})
    thunk.api.put.mockReturnValue(Promise.resolve({status: 403}))
    const result = await thunk.callThunk()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidationError.FIRSTNAME_ERROR,
    ])
  })
})
