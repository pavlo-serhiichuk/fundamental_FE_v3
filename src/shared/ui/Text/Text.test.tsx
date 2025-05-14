import {renderTestComponent} from '@/shared/lib/tests/renderTestComponent/renderTestComponent'
import {screen} from '@testing-library/react'
import {Text} from './Text'
// 'text-wrapper-el'
// 'title-el'
// 'text-el'
describe('Text', () => {
  test('exist title & text', () => {
    renderTestComponent(<Text text="text" title="title" />)
    expect(screen.getByTestId('testId.Title')).toBeInTheDocument()
    expect(screen.getByTestId('testId.Text')).toBeInTheDocument()
  })
})
