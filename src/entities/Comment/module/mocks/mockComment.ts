import { Comment } from '../types/AddCommentSchema'
import { mockUser } from '@/entities/User'

export const mockComment: Comment = {
  id: '1',
  text: 'comment 1',
  user: mockUser,
}
