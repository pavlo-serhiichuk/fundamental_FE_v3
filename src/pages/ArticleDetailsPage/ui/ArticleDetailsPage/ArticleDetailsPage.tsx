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
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { ToggleFeature } from '@/shared/lib/features/components/ToggleFeature/ToggleFeature'
import { ContentStickyLayout } from '@/shared/layouts/ContentStickyLayout'
import { Card } from '@/shared/ui/V2/Card'
import { ArticleDetailsRightbar } from '@/features/ArticleDetailsRightbar'

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

  return (
    <DynamicReducerLoader reducers={reducers}>
      <ToggleFeature
        feature="isV2"
        on={
          <ContentStickyLayout
            content={
              <Page
                className={cls('', {}, [className])}
                data-testid="ArticleDetailsPage"
              >
                <Card padding="32" bgType="secondary">
                  <ArticleDetails articleId={articleId} />
                  <ArticleDetailsRecommendations />
                  <ToggleFeature
                    feature="isArticleDetailsRatingEnabled"
                    on={<ArticleRating articleId={articleId} />}
                    off={
                      <Card className={s.articleRatingInfo}>
                        {t('Here is gonna be article rating!')}
                      </Card>
                    }
                  />
                  <ArticleDetailsComments articleId={articleId} />
                </Card>
              </Page>
            }
            right={<ArticleDetailsRightbar articleId={articleId} />}
          />
        }
        off={
          <Page
            className={cls('', {}, [className])}
            data-testid="ArticleDetailsPage"
          >
            <ArticleDetails articleId={articleId} />
            <ArticleDetailsRecommendations />
            <ToggleFeature
              feature="isArticleDetailsRatingEnabled"
              on={<ArticleRating articleId={articleId} />}
              off={
                <CardDeprecated className={s.articleRatingInfo}>
                  {t('Here is gonna be article rating!')}
                </CardDeprecated>
              }
            />
            <ArticleDetailsComments articleId={articleId} />
          </Page>
        }
      />
    </DynamicReducerLoader>
  )
}

export default ArticleDetailsPage
