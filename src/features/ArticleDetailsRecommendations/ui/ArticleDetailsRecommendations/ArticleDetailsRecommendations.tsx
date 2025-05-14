import {memo} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {ArticlesList} from '@/entities/Article'
import {ListView} from '@/features/ChangeListView'
import {useFetchArticleDetailsRecommendationsList} from '../../api/recommendationsApi'
import * as s from './ArticleDetailsRecommendations.module.scss'

interface ArticleDetailsRecommendationsProps {
  className?: string
}

export const ArticleDetailsRecommendations = memo((props: ArticleDetailsRecommendationsProps) => {
  const {className} = props
  const {data: articles, isLoading, error} = useFetchArticleDetailsRecommendationsList(5)

  if (isLoading || error) {
    return null
  }

  return (
    <div className={cls(s.ArticleDetailsRecommendations, {}, [className])}>
      <ArticlesList articles={articles} listView={ListView.SMALL} className={s.recommendationsList} />
    </div>
  )
})
