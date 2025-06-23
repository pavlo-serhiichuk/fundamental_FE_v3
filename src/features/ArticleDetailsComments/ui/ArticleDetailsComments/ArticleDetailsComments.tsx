import { type FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { cls } from '@/shared/lib/cls/cls'
import {
  AddCommentForm,
  CommentList,
  AddCommentFormDeprecated,
  CommentListDeprecated,
} from '@/entities/Comment'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect'
import { getArticleDetailsError } from '@/features/ArticleDetails'
import { getArticleDetailsCommentsLoading } from '../../model/selectors/articleDetailsSelectors'
import { sendArticleComment } from '../../model/services/sendArticleComment/sendArticleComment'
import { fetchArticleCommentsById } from '../../model/services/fetchArticleCommentsById/fetchArticleCommentsById'
import { getArticleDetailsComments } from '../../model/slice/articleDetailsCommentsSlice'
import * as s from './ArticleDetailsComments.module.scss'
import { ToggleFeature } from '@/shared/lib/features'

interface ArticleDetailsCommentsProps {
  className?: string
  articleId: string
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = (
  props,
) => {
  const { className, articleId } = props
  const dispatch = useAppDispatch()
  const commentsIsLoading = useSelector(getArticleDetailsCommentsLoading)
  const comments = useSelector(getArticleDetailsComments.selectAll)
  const articleError = useSelector(getArticleDetailsError)

  useInitialEffect(async () => {
    dispatch(fetchArticleCommentsById(articleId))
  })

  const onSendComment = useCallback(() => {
    dispatch(sendArticleComment(articleId))
  }, [dispatch, articleId])

  if (articleError) {
    return null
  }

  return (
    <ToggleFeature
      feature="isV2"
      on={
        <div className={cls(s.ArticleDetailsComments, {}, [className])}>
          <AddCommentForm sendComment={onSendComment} />
          <CommentList comments={comments} isLoading={commentsIsLoading} />
        </div>
      }
      off={
        <div className={cls(s.ArticleDetailsComments, {}, [className])}>
          <AddCommentFormDeprecated sendComment={onSendComment} />
          <CommentListDeprecated
            comments={comments}
            isLoading={commentsIsLoading}
          />
        </div>
      }
    />
  )
}
