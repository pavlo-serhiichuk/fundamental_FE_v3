import {profileMockState} from 'entities/Profile/model/slice/profileState'
import {type Profile, ValidationError} from 'entities/Profile'
import {validateProfileForm} from './validateProfileForm'

describe('validateProfileForm.test', () => {
  test('with valid data', () => {
    const form: Profile = {...profileMockState.form}
    expect(validateProfileForm(form)).toEqual([])
  })
  test('with empty lastname', () => {
    const form: Profile = {...profileMockState.form, lastname: ''}
    expect(validateProfileForm(form)).toEqual([ValidationError.LASTNAME_ERROR])
  })
})
