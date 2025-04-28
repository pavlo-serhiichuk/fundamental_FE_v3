import {render, screen} from '@testing-library/react'
import {Input} from './Input'

describe('Input', () => {
  test('exist', () => {
    render(<Input />)
    expect(screen.getByTestId('input')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })
  test('has label', () => {
    render(<Input label="label" />)
    expect(screen.getByTestId('input-label')).toBeInTheDocument()
    expect(screen.getByTestId('input-label')).toHaveTextContent('label')
  })
  test('has label', () => {
    render(<Input label="label" />)
    expect(screen.getByTestId('input-label')).toBeInTheDocument()
    expect(screen.getByTestId('input-label')).toHaveTextContent('label')
  })
})
