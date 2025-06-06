import { type FC } from 'react'
import { useParams } from 'react-router-dom'
import { cls } from '@/shared/lib/cls/cls'
import { ArticleDetailsComments } from '@/features/ArticleDetailsComments'
import { Page } from '@/widgets/Page'
import { ArticleDetails } from '@/features/ArticleDetails'
import DynamicReducerLoader, {
  type ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { ArticleDetailsRecommendations } from '@/features/ArticleDetailsRecommendations'
import { articleDetailsPageSlice } from '../../module/slice/articleDetailsPageSlice'
import * as s from './ArticleDetailsPage.module.scss'
import { ArticleRating } from '@/features/ArticleRating'
import { getFeatureFlags } from '@/shared/lib/features'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageSlice,
}

const ArticleDetailsPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props
  const { id: articleId } = useParams<{ id: string | undefined }>()
  const isArticleDetailsRatingEnabled = getFeatureFlags(
    'isArticleDetailsRatingEnabled',
  )
  if (!articleId) return null

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page
        className={cls(s.ArticleDetailsPage, {}, [className])}
        data-testid="ArticleDetailsPage"
      >
        <ArticleDetails articleId={articleId} />
        <ArticleDetailsRecommendations />
        {isArticleDetailsRatingEnabled && (
          <ArticleRating articleId={articleId} />
        )}
        <ArticleDetailsComments articleId={articleId} />
      </Page>
    </DynamicReducerLoader>
  )
}

export default ArticleDetailsPage
