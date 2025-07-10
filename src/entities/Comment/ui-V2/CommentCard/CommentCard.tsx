import { type FC } from 'react'
import { getVStackString } from '@/shared/ui/stationary/Stack'
import { Avatar } from '@/shared/ui/V2/Avatar'
import { AppLink } from '@/shared/ui/V2/AppLink'
import { Comment } from '@/entities/Comment'
import * as s from './CommentCard.module.scss'
import { Card } from '@/shared/ui/V2/Card'
import { Text } from '@/shared/ui/V2/Text'

interface CommentCardProps {
  comment: Comment
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const { comment } = props

  return (
    <Card padding="12" testId="CommentCard" className={getVStackString({})}>
      <AppLink
        data-testid="Profile.Link"
        to={`/profile/${comment.user?.id}`}
        className={s.header}
      >
        <Avatar size={30} src={comment.user?.avatar} alt="comment" />
        <Text text={comment.user?.username} testId="Username" />
      </AppLink>
      <Text text={comment.text} className={s.text} testId="Comment" />
    </Card>
  )
}
