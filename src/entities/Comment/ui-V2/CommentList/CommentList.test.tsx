import { screen } from '@testing-library/react'
import { renderTestComponent } from '@/shared/lib/tests/renderTestComponent/renderTestComponent'
import { CommentList } from './CommentList'
import { mockComment } from '../../module/mocks/mockComment'

const comments = [
  mockComment,
  { ...mockComment, id: '2' },
  { ...mockComment, id: '3' },
]

describe('CommentList', () => {
  test('renders with comments', () => {
    renderTestComponent(<CommentList comments={comments} isLoading={false} />)
    expect(screen.getAllByTestId('CommentCard')).toHaveLength(3)
    expect(screen.getByTestId('CommentList')).toBeInTheDocument()
  })
  test('renders without comments', () => {
    renderTestComponent(<CommentList comments={[]} isLoading={false} />)
    expect(screen.getByTestId('NoComments.Title')).toBeInTheDocument()
  })
  test('is loading', () => {
    renderTestComponent(<CommentList isLoading />)
    expect(screen.getByTestId('CommentList.Loading')).toBeInTheDocument()
  })
})
