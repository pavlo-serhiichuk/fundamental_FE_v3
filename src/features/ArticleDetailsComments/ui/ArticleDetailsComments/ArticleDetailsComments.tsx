import {type FC, useCallback} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {cls} from '@/shared/lib/cls/cls'
import {AddCommentForm, CommentList} from '@/entities/Comment'
import {useAppDispatch} from '@/shared/hooks/useAppDispatch'
import {useInitialEffect} from '@/shared/hooks/useInitialEffect'
import {getArticleDetailsError} from '@/features/ArticleDetails'
import {getArticleDetailsCommentsLoading} from '../../model/selectors/articleDetailsSelectors'
import {sendArticleComment} from '../../model/services/sendArticleComment/sendArticleComment'
import {fetchArticleCommentsById} from '../../model/services/fetchArticleCommentsById/fetchArticleCommentsById'
import {getArticleDetailsComments} from '../../model/slice/articleDetailsCommentsSlice'
import * as s from './ArticleDetailsComments.module.scss'

interface ArticleDetailsCommentsProps {
  className?: string
  articleId?: string | undefined
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = (props) => {
  const {className, articleId = '0'} = props
  const dispatch = useAppDispatch()
  const commentsIsLoading = useSelector(getArticleDetailsCommentsLoading)
  const comments = useSelector(getArticleDetailsComments.selectAll)
  const articleError = useSelector(getArticleDetailsError)

  useInitialEffect(async () => {
    dispatch(fetchArticleCommentsById(articleId))
  })

  const onSendComment = useCallback(() => {
    dispatch(sendArticleComment(articleId))
  }, [dispatch])

  if (articleError) {
    return null
  }

  return (
    <div className={cls(s.ArticleDetailsComments, {}, [className])}>
      <AddCommentForm sendComment={onSendComment} />
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </div>
  )
}
