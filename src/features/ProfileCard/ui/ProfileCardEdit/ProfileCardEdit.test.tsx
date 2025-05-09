import {screen} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import {renderTestComponent} from '@/shared/lib/tests/renderTestComponent/renderTestComponent'
import {profileMockState} from '@/entities/Profile/model/slice/profileState'
import {profileReducer} from '@/entities/Profile'
import {$api} from '@/shared/api/api'
import {ProfileCardEdit} from './ProfileCardEdit'

const options = {
  initialState: {profile: {...profileMockState, readonly: false}},
  asyncReducers: {profile: profileReducer},
}

describe('ProfileCardEdit', () => {
  test('renders', () => {
    renderTestComponent(<ProfileCardEdit />, options)
    expect(screen.getByTestId('Input.Avatar')).toBeInTheDocument()
    expect(screen.getByTestId('Input.Firstname')).toBeInTheDocument()
    expect(screen.getByTestId('Input.Lastname')).toBeInTheDocument()
    expect(screen.getByTestId('Input.Age')).toBeInTheDocument()
    expect(screen.getByTestId('CurrencySelect')).toBeInTheDocument()
    expect(screen.getByTestId('CountrySelect')).toBeInTheDocument()
    expect(screen.getByTestId('Cancel.Button')).toBeInTheDocument()
    expect(screen.getByTestId('Save.Button')).toBeInTheDocument()
  })
  test('change inputs values', async () => {
    renderTestComponent(<ProfileCardEdit />, options)
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

  test('error appears', async () => {
    renderTestComponent(<ProfileCardEdit />, options)
    await userEvent.clear(screen.getByTestId('Input.Firstname'))
    await userEvent.click(screen.getByTestId('Save.Button'))
    expect(screen.getByTestId('ProfileCardEdit.FIRSTNAME_ERROR.Text')).toBeInTheDocument()

    await userEvent.type(screen.getByTestId('Input.Firstname'), 'Firstname')
    await userEvent.clear(screen.getByTestId('Input.Lastname'))
    await userEvent.click(screen.getByTestId('Save.Button'))
    expect(screen.getByTestId('ProfileCardEdit.LASTNAME_ERROR.Text')).toBeInTheDocument()
  })

  test('update PUT request works with', async () => {
    const mockPutRequest = jest.spyOn($api, 'put')
    renderTestComponent(<ProfileCardEdit />, options)
    await userEvent.clear(screen.getByTestId('Input.Firstname'))
    await userEvent.type(screen.getByTestId('Input.Firstname'), 'Firstname')
    await userEvent.click(screen.getByTestId('Save.Button'))
    expect(mockPutRequest).toHaveBeenCalled()
  })
})
