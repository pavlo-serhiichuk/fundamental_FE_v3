import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderTestComponent } from '@/shared/lib/tests/renderTestComponent/renderTestComponent'
import AddCommentForm from './AddCommentForm'

describe('AddCommentForm', () => {
  test('should render correctly', async () => {
    renderTestComponent(<AddCommentForm sendComment={() => {}} />)
    expect(screen.getByTestId('AddCommentForm.Card')).toBeInTheDocument()
    await userEvent.type(
      screen.getByTestId('AddCommentForm.Input'),
      'my comment',
    )
    expect(screen.getByTestId('AddCommentForm.Input')).toHaveValue('my comment')
  })
})
