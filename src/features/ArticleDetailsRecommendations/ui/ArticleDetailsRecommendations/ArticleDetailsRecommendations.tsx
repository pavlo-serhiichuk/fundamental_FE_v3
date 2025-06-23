import { memo } from 'react'
import { ArticlesList } from '@/entities/Article'
import { ListView } from '@/features/ChangeListView'
import { useFetchArticleDetailsRecommendationsList } from '../../api/recommendationsApi'
import * as s from './ArticleDetailsRecommendations.module.scss'
import { toggleFeatures } from '@/shared/lib/features'

export const ArticleDetailsRecommendations = memo(() => {
  const {
    data: articles,
    isLoading,
    error,
  } = useFetchArticleDetailsRecommendationsList(5)

  if (isLoading || error) {
    return null
  }

  return (
    <div
      data-testid="ArticleDetailsRecommendations"
      className={s.ArticleDetailsRecommendations}
    >
      <ArticlesList
        articles={articles}
        listView={ListView.SMALL}
        className={toggleFeatures({
          name: 'isV2',
          on: () => s.recommendationsListV2,
          off: () => s.recommendationsList,
        })}
      />
    </div>
  )
})
