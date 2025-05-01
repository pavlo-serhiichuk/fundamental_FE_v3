import {type FC, useCallback} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {cls} from 'shared/lib/cls/cls'
import {AddCommentForm, CommentList} from 'entities/Comment'
import {
  getArticleDetailsComments,
  fetchArticleCommentsById,
  getArticleDetailsCommentsLoading, sendArticleComment,
} from 'features/ArticleDetailsComments'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import {getArticleDetailsError} from 'features/ArticleDetails'
import * as s from './ArticleDetailsComments.module.scss'

interface ArticleDetailsCommentsProps {
  className?: string
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = (props) => {
  const {className} = props
  const dispatch = useAppDispatch()
  const {id} = useParams<{ id: string }>()
  const commentsIsLoading = useSelector(getArticleDetailsCommentsLoading)
  const comments = useSelector(getArticleDetailsComments.selectAll)
  const articleError = useSelector(getArticleDetailsError)

  useInitialEffect(async () => {
    dispatch(fetchArticleCommentsById(id))
  })

  const onSendComment = useCallback(() => {
    dispatch(sendArticleComment())
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
