import {type FC} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {ArticlesList} from 'pages/ArticlesPage/ui/ArticlesList/ArticlesList'
import DynamicReducerLoader, {ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {articlesReducer} from 'pages/ArticlesPage/module/slice/articlesSlice'
import * as s from './ArticlesPage.module.scss'
import {fetchArticles} from '../../module/services/fetchAllArticles/fetchArticles'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articles: articlesReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  const {className} = props

  useInitialEffect(() => {
    dispatch(fetchArticles())
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
