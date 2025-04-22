import {memo} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getArticlesView} from 'pages/ArticlesPage/module/selectors/getArticlesView'
import {Article} from 'entities/Article'
import {ArticlesListItem} from 'pages/ArticlesPage/ui/ArticlesListItem/ArticlesListItem'
import {getArticlesList} from 'pages/ArticlesPage/module/slice/articlesPageSlice'
import {Loader} from 'shared/ui/Loader/Loader'
import {getArticlesIsLoading} from '../../module/selectors/getArticlesIsLoading'
import * as s from './ArticlesList.module.scss'

interface ArticlesListProps {
  className?: string
}

export const ArticlesList = memo((props: ArticlesListProps) => {
  const {className} = props
  const {t} = useTranslation()
  const articles = useSelector(getArticlesList.selectAll)
  const isLoading = useSelector(getArticlesIsLoading)
  const articlesView = useSelector(getArticlesView)
  if (!articles.length || isLoading) {
    console.log('here 1')
    return <Loader />
  }
  console.log('here 2')

  const renderArticle = (article: Article) => (
    <ArticlesListItem article={article} key={article.id} />
  )

  return (
    <div className={cls(s.ArticlesList, {}, [className, s[articlesView as string]])}>
      {articles.map(renderArticle)}
    </div>
  )
})
