import {screen} from '@testing-library/react'
import {renderWithTranslations} from 'shared/lib/tests/renderWithTranslations/renderWithTranslations'
import {CountrySelect} from './CountrySelect'

describe('', () => {
  test('', () => {
    renderWithTranslations(<CountrySelect value="Italy" />)
    expect(screen.getByTestId('CountrySelect')).toBeInTheDocument()
  })
})
