import {type FC} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {ArticlesList} from 'pages/ArticlesPage/ui/ArticlesList/ArticlesList'
import DynamicReducerLoader, {ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {articlesListReducer} from 'pages/ArticlesPage/module/slice/articlesListSlice'
import {fetchArticlesList} from 'pages/ArticlesPage/module/services/fetchArticlesList/fetchArticlesList'
import * as s from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesList: articlesListReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  const {className} = props

  useInitialEffect(() => {
    dispatch(fetchArticlesList())
  })

  return (
    <DynamicReducerLoader reducers={reducers}>
      <div className={cls(s.ArticlesPage, {}, [className])}>
        <ArticlesList />
      </div>
    </DynamicReducerLoader>
  )
}

export default ArticlesPage
