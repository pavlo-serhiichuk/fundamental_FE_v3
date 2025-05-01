import {renderTestComponent} from 'shared/lib/tests/renderTestComponent/renderTestComponent'
import {screen} from '@testing-library/react'
import {profileMockState} from 'entities/Profile/model/slice/profileState'
import {profileReducer} from 'entities/Profile'
import {userEvent} from '@testing-library/user-event'
import {EditProfileCard} from './EditProfileCard'

const options = {
  initialState: {profile: {...profileMockState, readonly: false}},
  asyncReducers: {profile: profileReducer},
}

describe('EditProfileCard', () => {
  test('renders', () => {
    renderTestComponent(<EditProfileCard />, options)
    expect(screen.getByTestId('Input.Avatar')).toBeInTheDocument()
    expect(screen.getByTestId('Input.Firstname')).toBeInTheDocument()
    expect(screen.getByTestId('Input.Lastname')).toBeInTheDocument()
    expect(screen.getByTestId('Input.Age')).toBeInTheDocument()
    expect(screen.getByTestId('EditProfileCard.CurrencySelect.ListBox')).toBeInTheDocument()
    expect(screen.getByTestId('EditProfileCard.CountrySelect.ListBox')).toBeInTheDocument()
    expect(screen.getByTestId('EditProfileCard.Cancel.Button')).toBeInTheDocument()
    expect(screen.getByTestId('EditProfileCard.Save.Button')).toBeInTheDocument()
  })
  test('change input values', async () => {
    renderTestComponent(<EditProfileCard />, options)
    await userEvent.clear(screen.getByTestId('Input.Firstname'))
    await userEvent.clear(screen.getByTestId('Input.Lastname'))
    await userEvent.clear(screen.getByTestId('Input.Age'))

    await userEvent.type(screen.getByTestId('Input.Firstname'), 'Firstname')
    await userEvent.type(screen.getByTestId('Input.Lastname'), 'Lastname')
    await userEvent.type(screen.getByTestId('Input.Age'), '30')

    expect(screen.getByTestId('Input.Firstname')).toHaveValue('Firstname')
    expect(screen.getByTestId('Input.Lastname')).toHaveValue('Lastname')
    expect(screen.getByTestId('Input.Age')).toHaveValue(30)
  })
})
