import {fireEvent, screen} from '@testing-library/react'
import {renderTestComponent} from 'shared/lib/tests/renderTestComponent/renderTestComponent'
import {Counter} from './Counter'

describe('Counter', () => {
  test('in the document', () => {
    renderTestComponent(<Counter />, {initialState: {counter: {value: 10}}})
    expect(screen.getByTestId('counter-value-title')).toBeInTheDocument()
    expect(screen.getByTestId('counter-value-title')).toHaveTextContent('10')
  })
  test('increment', () => {
    renderTestComponent(<Counter />, {initialState: {counter: {value: 10}}})
    fireEvent.click(screen.getByTestId('inc-btn'))
    expect(screen.getByTestId('counter-value-title')).toHaveTextContent('11')
  })
  test('decrement', () => {
    renderTestComponent(<Counter />, {initialState: {counter: {value: 10}}})
    fireEvent.click(screen.getByTestId('dec-btn'))
    expect(screen.getByTestId('counter-value-title')).toHaveTextContent('9')
  })
})
