import {memo} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useSelector} from 'react-redux'
import {Article} from 'entities/Article'
import {ArticlesListItem} from 'pages/ArticlesPage/ui/ArticlesListItem/ArticlesListItem'
import {getArticlesList} from 'pages/ArticlesPage/module/slice/articlesPageSlice'
import {Loader} from 'shared/ui/Loader/Loader'
import {getListView} from 'features/ChangeListView'
import {getArticlesIsLoading} from '../../module/selectors/getArticlesIsLoading'
import * as s from './ArticlesList.module.scss'

interface ArticlesListProps {
  className?: string
}

export const ArticlesList = memo((props: ArticlesListProps) => {
  const {className} = props
  const articles = useSelector(getArticlesList.selectAll)
  const isLoading = useSelector(getArticlesIsLoading)
  const listView = useSelector(getListView)

  const renderArticle = (article: Article) => (
    <ArticlesListItem article={article} key={article.id} />
  )

  return (
    <div className={cls(s.ArticlesList, {}, [className, s[listView as string]])}>
      {articles.map(renderArticle)}
      {(!articles.length || isLoading) && <Loader />}
    </div>
  )
})
