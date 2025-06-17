import { type FC } from 'react'
import { VStack } from '@/shared/ui/stationary/Stack'
import { cls } from '@/shared/lib/cls/cls'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { Comment } from '@/entities/Comment'
import * as s from './CommentCard.module.scss'

interface CommentCardProps {
  className?: string
  comment: Comment
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const { className, comment } = props

  return (
    <VStack
      gap="10"
      className={cls(s.CommentCard, {}, [className])}
      data-testid="CommentCard"
    >
      <AppLink to={`/profile/${comment.user?.id}`} className={s.header}>
        <Avatar size={30} src={comment.user?.avatar} alt="comment" />
        <span>{comment.user?.username}</span>
      </AppLink>
      {comment.text}
    </VStack>
  )
}
