import {type FC, useCallback} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {AddCommentForm} from 'features/AddCommentForm'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {ArticleDetails, sendArticleComment} from 'entities/Article'
import {ArticleDetailsComments} from 'features/ArticleDetailsComments'
import * as s from './ArticleDetailsPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticlesPageProps> = (props) => {
  const {className} = props
  const dispatch = useAppDispatch()

  const onSendComment = useCallback(() => {
    dispatch(sendArticleComment())
  }, [dispatch])

  return (
    <div className={cls(s.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails />
      <AddCommentForm sendComment={onSendComment} />
      <ArticleDetailsComments />
    </div>
  )
}

export default ArticleDetailsPage
