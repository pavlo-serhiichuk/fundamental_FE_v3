import {type StateSchema} from 'app/providers/StoreProvider'
import {getProfileForm} from './getProfileForm'
import {profileInitialState, profileMockState} from '../../slice/profileState'

describe('getProfileForm.test', () => {
  test('return initial form', () => {
    const state = {profile: profileInitialState.form}
    expect(getProfileForm(state as StateSchema)).toBe(undefined)
  })

  test('return mock form', () => {
    const state = {profile: profileMockState}
    expect(getProfileForm(state as StateSchema)).toEqual(state.profile.form)
  })
})
