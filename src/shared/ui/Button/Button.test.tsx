import {render, screen} from '@testing-library/react'
import {Button} from './Button'

describe('Button', () => {
  test('render', () => {
    render(<Button>def</Button>)
    expect(screen.getByTestId('button')).toBeInTheDocument()
    screen.debug()
  })

  test('render theme=clear', () => {
    render(<Button theme="clear">clear</Button>)
    screen.debug()
    expect(screen.getByTestId('button')).toHaveClass('clear')
  })
})
