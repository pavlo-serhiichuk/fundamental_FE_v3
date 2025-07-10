import { fireEvent, screen } from '@testing-library/react'
import { renderTestComponent } from '@/shared/lib/tests/renderTestComponent/renderTestComponent'
import { ThemeSwitcher } from './ThemeSwitcher'

describe('ThemeSwitcher', () => {
  test('exist', () => {
    renderTestComponent(<ThemeSwitcher />)
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument()
  })
  test('switch', () => {
    renderTestComponent(<ThemeSwitcher />)
    expect(screen.getByTestId('theme-switcher')).toHaveClass('app_light_theme')
    fireEvent.click(screen.getByTestId('theme-switcher'))
    expect(screen.getByTestId('theme-switcher')).toHaveClass('app_green_theme')
    fireEvent.click(screen.getByTestId('theme-switcher'))
    expect(screen.getByTestId('theme-switcher')).toHaveClass('app_dark_theme')
  })
})
