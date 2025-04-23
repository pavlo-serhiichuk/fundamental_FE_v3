import {type FC, useCallback} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {AddCommentForm} from 'features/AddCommentForm'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {ArticleDetailsComments} from 'features/ArticleDetailsComments'
import {sendArticleComment} from 'pages/ArticleDetailsPage'
import {Page} from 'shared/ui/Page/Page'
import * as s from './ArticleDetailsPage.module.scss'
import {ArticleDetails} from '../ArticleDetails/ArticleDetails'

interface ArticlesPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticlesPageProps> = (props) => {
  const {className} = props
  const dispatch = useAppDispatch()

  const onSendComment = useCallback(() => {
    dispatch(sendArticleComment())
  }, [dispatch])
  const onScrollEnd = () => {
    console.log('end')
  }
  return (
    <Page onScrollEnd={onScrollEnd} className={cls(s.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails />
      <AddCommentForm sendComment={onSendComment} />
      <ArticleDetailsComments />
    </Page>
  )
}

export default ArticleDetailsPage
