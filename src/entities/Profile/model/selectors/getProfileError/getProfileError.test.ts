import {type StateSchema} from '@/app/providers/StoreProvider'
import {getProfileError} from './getProfileError'
import {profileInitialState} from '../../slice/profileState'

describe('getProfileError.test', () => {
  test('return initial data', () => {
    const state = {profile: {...profileInitialState, error: '123'}}
    expect(getProfileError(state as StateSchema)).toBe('123')
  })
})
