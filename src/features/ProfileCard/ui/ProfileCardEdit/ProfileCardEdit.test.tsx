import {screen} from '@testing-library/react'
import {act} from 'react'
import userEvent from '@testing-library/user-event'
import {renderTestComponent} from '@/shared/lib/tests/renderTestComponent/renderTestComponent'
import {profileReducer, profileMockState} from '@/entities/Profile'
import {ProfileCardEdit} from './ProfileCardEdit'
import {$api} from '@/shared/api/api'

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
    expect(screen.getByTestId('ProfileCardEdit.SaveButton')).toBeInTheDocument()
  })
  test('change inputs values', async () => {
    renderTestComponent(<ProfileCardEdit />, options)
    await act(async () => {
      await userEvent.clear(screen.getByTestId('Input.Firstname'))
      await userEvent.type(screen.getByTestId('Input.Firstname'), 'Firstname')
      await userEvent.clear(screen.getByTestId('Input.Lastname'))
      await userEvent.type(screen.getByTestId('Input.Lastname'), 'Lastname')
      await userEvent.clear(screen.getByTestId('Input.Age'))
      await userEvent.type(screen.getByTestId('Input.Age'), '30')

      await userEvent.click(screen.getByTestId('ProfileCardEdit.SaveButton'))
    })

    expect(screen.getByTestId('Input.Firstname')).toHaveValue('Firstname')
    expect(screen.getByTestId('Input.Lastname')).toHaveValue('Lastname')
    expect(screen.getByTestId('Input.Age')).toHaveValue(30)
  })

  test('error appears', async () => {
    renderTestComponent(<ProfileCardEdit />, options)
    await act(async () => {
      await userEvent.clear(screen.getByTestId('Input.Firstname'))
      await userEvent.click(screen.getByTestId('ProfileCardEdit.SaveButton'))
    })
    expect(screen.getByTestId('ProfileCardEdit.FIRSTNAME_ERROR.Text')).toBeInTheDocument()

    await act(async () => {
      await userEvent.type(screen.getByTestId('Input.Firstname'), 'Firstname')
      await userEvent.clear(screen.getByTestId('Input.Lastname'))
      await userEvent.click(screen.getByTestId('ProfileCardEdit.SaveButton'))
    })
    expect(screen.getByTestId('ProfileCardEdit.LASTNAME_ERROR.Text')).toBeInTheDocument()
  })

  test('update PUT request works with', async () => {
    const mockPutRequest = jest.spyOn($api, 'put')
    renderTestComponent(<ProfileCardEdit />, options)
    await act(async () => {
      await userEvent.clear(screen.getByTestId('Input.Firstname'))
      await userEvent.type(screen.getByTestId('Input.Firstname'), 'Firstname')
      await userEvent.click(screen.getByTestId('ProfileCardEdit.SaveButton'))
    })
    expect(mockPutRequest).toHaveBeenCalled()
  })
})
