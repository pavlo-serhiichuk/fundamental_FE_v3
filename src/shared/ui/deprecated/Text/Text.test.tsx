import { screen } from '@testing-library/react'
import { renderTestComponent } from '@/shared/lib/tests/renderTestComponent/renderTestComponent'
import { Text } from './Text'

describe('Text', () => {
  test('exist title & text', () => {
    renderTestComponent(<Text text="text" title="title" />)
    expect(screen.getByTestId('Text.Title')).toBeInTheDocument()
    expect(screen.getByTestId('Text.Text')).toBeInTheDocument()
  })
})
