import {type FC, useCallback} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {ArticleDetails} from 'entities/Article/ui/ArticleDetails/ArticleDetails'
import {ArticleDetailsComments} from 'features/ArticleDetailsComments/ui/ArticleDetailsComments/ArticleDetailsComments'
import {AddCommentForm} from 'features/AddCommentForm'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {sendArticleComment} from 'entities/Article/model/services/sendArticleComment/sendArticleComment'
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
