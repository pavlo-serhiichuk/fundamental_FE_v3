import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {type Comment} from 'entities/Comment'
import {CommentCard} from 'entities/Comment/ui/CommentCard/CommentCard'
import {CommentCardSkeleton} from 'entities/Comment/ui/CommentCard/CommentCardSkeleton'
import {Text} from 'shared/ui/Text/Text'
import * as s from './CommentList.module.scss'

interface CommentListProps {
  className?: string
  comments: Comment[]
  isLoading?: boolean | undefined
}

export const CommentList = (props: CommentListProps) => {
  const {t} = useTranslation()
  const {className, comments, isLoading} = props

  if (isLoading || !comments) {
    return (
      <div className={cls(s.CommentList, {}, [className])}>
        {t('Comments')}
        :
        <CommentCardSkeleton />
        <CommentCardSkeleton />
      </div>
    )
  }

  if (!comments.length) {
    return <Text title={t('Article without comments')} />
  }

  return (
    <div className={cls(s.CommentList, {}, [className])}>
      {t('Comments')}
      :
      {comments.map((comment) => <CommentCard key={comment.id} comment={comment} />)}
    </div>
  )
}
