import { type FC } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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
import { getFeatureFlags, toggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/Card'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageSlice,
}

const ArticleDetailsPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const { id: articleId } = useParams<{ id: string | undefined }>()
  if (!articleId) return null

  const articleRatingCard = toggleFeatures({
    name: 'isArticleDetailsRatingEnabled',
    on: () => <ArticleRating articleId={articleId} />,
    off: () => (
      <Card className={s.articleRatingInfo}>
        {t('Here is gonna be article rating!')}
      </Card>
    ),
  })
  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page
        className={cls(s.ArticleDetailsPage, {}, [className])}
        data-testid="ArticleDetailsPage"
      >
        <ArticleDetails articleId={articleId} />
        <ArticleDetailsRecommendations />
        {articleRatingCard}
        <ArticleDetailsComments articleId={articleId} />
      </Page>
    </DynamicReducerLoader>
  )
}

export default ArticleDetailsPage
