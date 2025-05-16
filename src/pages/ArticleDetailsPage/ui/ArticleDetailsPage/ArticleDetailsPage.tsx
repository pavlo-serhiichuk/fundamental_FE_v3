import {type FC} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {ArticleDetailsComments} from '@/features/ArticleDetailsComments'
import {Page} from '@/widgets/Page'
import {ArticleDetails} from '@/features/ArticleDetails'
import DynamicReducerLoader, {type ReducersList} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {
  ArticleDetailsRecommendations,
} from '@/features/ArticleDetailsRecommendations'
import {articleDetailsPageSlice} from '../../module/slice/articleDetailsPageSlice'
import * as s from './ArticleDetailsPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageSlice,
}

const ArticleDetailsPage: FC<ArticlesPageProps> = (props) => {
  const {className} = props

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page className={cls(s.ArticleDetailsPage, {}, [className])} data-testid="ArticleDetailsPage">
        <ArticleDetails />
        <ArticleDetailsRecommendations />
        <ArticleDetailsComments />
      </Page>
    </DynamicReducerLoader>
  )
}

export default ArticleDetailsPage
