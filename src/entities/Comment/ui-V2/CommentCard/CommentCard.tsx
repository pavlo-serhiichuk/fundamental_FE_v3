import { type FC } from 'react'
import { VStack } from '@/shared/ui/stationary/Stack'
import { Avatar } from '@/shared/ui/V2/Avatar'
import { AppLink } from '@/shared/ui/V2/AppLink'
import { Comment } from '@/entities/Comment'
import * as s from './CommentCard.module.scss'
import { Card } from '@/shared/ui/V2/Card'
import { Text } from '@/shared/ui/V2/Text'

interface CommentCardProps {
  className?: string
  comment: Comment
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const { className, comment } = props

  return (
    <Card padding="12">
      <VStack className={className} data-testid="CommentCard">
        <AppLink to={`/profile/${comment.user?.id}`} className={s.header}>
          <Avatar size={30} src={comment.user?.avatar} alt="comment" />
          <span>{comment.user?.username}</span>
        </AppLink>
        <Text text={comment.text} className={s.text} />
      </VStack>
    </Card>
  )
}
