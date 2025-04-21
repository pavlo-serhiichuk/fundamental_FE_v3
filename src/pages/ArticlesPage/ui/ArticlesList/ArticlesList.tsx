import {memo} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getArticlesData, getArticlesIsLoading} from 'pages/ArticlesPage/module/selectors/getArticlesData'
import {getArticlesView} from 'pages/ArticlesPage/module/selectors/getArticlesView'
import {Article} from 'entities/Article'
import {ArticlesListItem} from 'pages/ArticlesPage/ui/ArticlesListItem/ArticlesListItem'
import * as s from './ArticlesList.module.scss'

interface ArticlesListProps {
  className?: string
}

export const ArticlesList = memo((props: ArticlesListProps) => {
  const {className} = props
  const {t} = useTranslation()
  const articles = useSelector(getArticlesData)
  const isLoading = useSelector(getArticlesIsLoading)
  const articlesView = useSelector(getArticlesView)

  if (!articles.length && isLoading) {
    return null
  }

  const renderArticle = (article: Article) => (
    <ArticlesListItem article={article} />
  )

  return (
    <div className={cls(s.ArticlesList, {}, [className, s[articlesView as string]])}>
      {articles.map(renderArticle)}
    </div>
  )
})
