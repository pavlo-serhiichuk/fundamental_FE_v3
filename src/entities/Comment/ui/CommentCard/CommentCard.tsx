import {type FC} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {Avatar} from '@/shared/ui/Avatar'
import {AppLink} from '@/shared/ui/AppLink'
import {Comment} from '@/entities/Comment'
import * as s from './CommentCard.module.scss'

interface CommentCardProps {
  className?: string
  comment: Comment
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const {className, comment} = props

  return (
    <div className={cls(s.CommentCard, {}, [className])}>
      <AppLink to={`/profile/${comment.user?.id}`} className={s.header}>
        <Avatar size={30} src={comment.user?.avatar} alt="comment" />
        <span>{comment.user?.username}</span>
      </AppLink>
      {comment.text}
    </div>
  )
}
