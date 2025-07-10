import { screen } from '@testing-library/react'
import { renderTestComponent } from '@/shared/lib/tests/renderTestComponent/renderTestComponent'
import { CommentCard } from './CommentCard'

const comment = {
  id: '1',
  text: 'Comment text',
  user: { username: 'username', avatar: 'avatar' },
}

describe('CommentCard', () => {
  test('renders correctly', () => {
    renderTestComponent(<CommentCard comment={comment} />)
    expect(screen.getByTestId('Username.Text')).toHaveTextContent('username')
    expect(screen.getByTestId('Comment.Text')).toHaveTextContent('Comment text')
  })
})
