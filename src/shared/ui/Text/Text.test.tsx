import {renderTestComponent} from 'shared/lib/tests/renderTestComponent/renderTestComponent'
import {fireEvent, screen} from '@testing-library/react'
import {Text} from './Text'
// 'text-wrapper-el'
// 'title-el'
// 'text-el'
describe('Text', () => {
  test('exist', () => {
    renderTestComponent(<Text text="text" title="title" />)
    expect(screen.getByTestId('title-el')).toBeInTheDocument()
    expect(screen.getByTestId('text-el')).toBeInTheDocument()
  })
  test('switch', () => {
    renderTestComponent(<Text />)
    expect(screen.getByTestId('theme-switcher')).toHaveClass('light')
    fireEvent.click(screen.getByTestId('theme-switcher'))
    expect(screen.getByTestId('theme-switcher')).toHaveClass('green')
    fireEvent.click(screen.getByTestId('theme-switcher'))
    expect(screen.getByTestId('theme-switcher')).toHaveClass('dark')
  })
})
