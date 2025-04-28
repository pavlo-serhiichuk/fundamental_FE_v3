import {memo} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {ArticlesList} from 'entities/Article/ui/ArticlesList/ArticlesList'
import {useSelector} from 'react-redux'
import {
  getArticleDetailsRecommendations,
} from 'features/ArticleDetailsRecommendations/module/slice/articleDetailsRecomandationsSlice'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {
  fetchArticleDetailsRecommendations,
} from 'features/ArticleDetailsRecommendations/module/services/fetchArticleDetailsRecommendations/fetchArticleDetailsRecommendations'
import {ListView} from 'features/ChangeListView'
import * as s from './ArticleDetailsRecommendations.module.scss'

interface ArticleDetailsRecommendationsProps {
  className?: string
}

export const ArticleDetailsRecommendations = memo((props: ArticleDetailsRecommendationsProps) => {
  const {className} = props
  const {t} = useTranslation()
  const articles = useSelector(getArticleDetailsRecommendations.selectAll)
  const dispatch = useAppDispatch()
  useInitialEffect(() => {
    dispatch(fetchArticleDetailsRecommendations())
  })
  // if ()
  return (
    <div className={cls(s.ArticleDetailsRecommendations, {}, [className])}>
      <ArticlesList articles={articles} listView={ListView.SMALL} className={s.recommendationsList} />
    </div>
  )
})
