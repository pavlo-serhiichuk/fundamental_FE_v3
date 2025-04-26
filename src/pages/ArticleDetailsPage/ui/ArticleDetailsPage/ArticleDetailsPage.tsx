import {type FC, useCallback} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {AddCommentForm} from 'features/AddCommentForm'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {ArticleDetailsComments, sendArticleComment} from 'features/ArticleDetailsComments'
import {Page} from 'widgets/Page/Page'
import {ArticleDetails} from 'features/ArticleDetails'
import * as s from './ArticleDetailsPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticlesPageProps> = (props) => {
  const {className} = props

  return (
    <Page className={cls(s.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails />
      <ArticleDetailsComments />
    </Page>
  )
}

export default ArticleDetailsPage
