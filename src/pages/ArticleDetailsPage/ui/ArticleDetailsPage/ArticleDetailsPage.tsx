import {type FC} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {ArticleDetailsComments} from 'features/ArticleDetailsComments'
import {Page} from 'widgets/Page/Page'
import {ArticleDetails} from 'features/ArticleDetails'
import DynamicReducerLoader, {type ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {articleDetailsPageReducer} from 'pages/ArticleDetailsPage/module/slice/articleDetailsPageReducer'
import {
  ArticleDetailsRecommendations,
} from 'features/ArticleDetailsRecommendations/ui/ArticleDetailsRecommendations/ArticleDetailsRecommendations'
import * as s from './ArticleDetailsPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage: FC<ArticlesPageProps> = (props) => {
  const {className} = props

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page className={cls(s.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails />
        <ArticleDetailsRecommendations />
        <ArticleDetailsComments />
      </Page>
    </DynamicReducerLoader>
  )
}

export default ArticleDetailsPage
