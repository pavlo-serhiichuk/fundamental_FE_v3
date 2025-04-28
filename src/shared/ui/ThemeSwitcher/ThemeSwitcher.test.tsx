import {renderTestComponent} from 'shared/lib/tests/renderTestComponent/renderTestComponent'
import {fireEvent, screen} from '@testing-library/react'
import {ThemeSwitcher} from './ThemeSwitcher'

describe('ThemeSwitcher', () => {
  test('exist', () => {
    renderTestComponent(<ThemeSwitcher />)
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument()
  })
  test('switch', () => {
    renderTestComponent(<ThemeSwitcher />)
    expect(screen.getByTestId('theme-switcher')).toHaveClass('light')
    fireEvent.click(screen.getByTestId('theme-switcher'))
    expect(screen.getByTestId('theme-switcher')).toHaveClass('green')
    fireEvent.click(screen.getByTestId('theme-switcher'))
    expect(screen.getByTestId('theme-switcher')).toHaveClass('dark')
  })
})
