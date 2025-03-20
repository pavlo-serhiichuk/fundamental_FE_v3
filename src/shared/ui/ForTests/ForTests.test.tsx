import {render, screen} from '@testing-library/react'
import ForTests from 'shared/ui/ForTests/ForTests'

describe('For tests', () => {
  test('works', () => {
    expect(10).toBe(10)
    render(<ForTests />)
    expect(screen.getByTestId('for-test')).toBeInTheDocument()
  })
})
