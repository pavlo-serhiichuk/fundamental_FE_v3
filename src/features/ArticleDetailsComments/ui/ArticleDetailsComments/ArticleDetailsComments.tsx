import {type FC, useCallback} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {cls} from 'shared/lib/cls/cls'
import {CommentList} from 'entities/Comment'
import {
  articleDetailsCommentsReducer,
  getArticleComments,
  fetchArticleCommentsById,
  getArticleDetailsCommentsLoading, sendArticleComment,
} from 'features/ArticleDetailsComments'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import {getArticleDetailsError} from 'features/ArticleDetails'
import DynamicReducerLoader, {type ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {AddCommentForm} from 'features/AddCommentForm'
import * as s from './ArticleDetailsComments.module.scss'

interface ArticleDetailsCommentsProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = (props) => {
  const {className} = props
  const dispatch = useAppDispatch()
  const {id} = useParams<{ id: string }>()
  const commentsIsLoading = useSelector(getArticleDetailsCommentsLoading)
  const comments = useSelector(getArticleComments.selectAll)
  const articleError = useSelector(getArticleDetailsError)

  const onSendComment = useCallback(() => {
    dispatch(sendArticleComment())
  }, [dispatch])

  useInitialEffect(async () => {
    dispatch(fetchArticleCommentsById(id))
  })

  if (articleError) {
    return null
  }

  return (
    <DynamicReducerLoader reducers={reducers}>
      <div className={cls(s.ArticleDetailsComments, {}, [className])}>
        <AddCommentForm sendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicReducerLoader>
  )
}
