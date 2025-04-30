import {memo} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {ArticlesList} from 'entities/Article/ui/ArticlesList/ArticlesList'
import {useSelector} from 'react-redux'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {ListView} from 'features/ChangeListView'
import {
  fetchArticleDetailsRecommendations,
} from '../../module/services/fetchArticleDetailsRecommendations/fetchArticleDetailsRecommendations'
import {getArticleDetailsRecommendations} from '../../module/slice/articleDetailsRecomandationsSlice'
import * as s from './ArticleDetailsRecommendations.module.scss'

interface ArticleDetailsRecommendationsProps {
  className?: string
}

export const ArticleDetailsRecommendations = memo((props: ArticleDetailsRecommendationsProps) => {
  const {className} = props
  const articles = useSelector(getArticleDetailsRecommendations.selectAll)
  const dispatch = useAppDispatch()
  useInitialEffect(() => {
    dispatch(fetchArticleDetailsRecommendations())
  })

  return (
    <div className={cls(s.ArticleDetailsRecommendations, {}, [className])}>
      <ArticlesList articles={articles} listView={ListView.SMALL} className={s.recommendationsList} />
    </div>
  )
})
