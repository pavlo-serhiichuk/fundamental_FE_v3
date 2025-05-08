import {type StateSchema} from '@/app/providers/StoreProvider'
import {ValidationError} from '../../consts/consts'
import {getProfileValidationErrors} from './getProfileValidationErrors'
import {profileInitialState, profileMockState} from '../../slice/profileState'

describe('getProfileValidationErrors.test', () => {
  test('return initial data', () => {
    const state = {profile: profileInitialState}
    expect(getProfileValidationErrors(state as StateSchema)).toEqual([])
  })

  test('return mock data', () => {
    const state = {profile: {...profileMockState, validationErrors: [ValidationError.FIRSTNAME_ERROR]}}
    expect(getProfileValidationErrors(state as StateSchema)).toEqual([ValidationError.FIRSTNAME_ERROR])
  })
})
