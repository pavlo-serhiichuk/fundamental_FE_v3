import {memo} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {Loader} from '@/shared/ui/Loader/Loader'
import {ListView} from '@/features/ChangeListView'
import {Article} from '../../model/types/article'
import {ArticlesListItem} from '../ArticlesListItem/ArticlesListItem'
import * as s from './ArticlesList.module.scss'

interface ArticlesListProps {
  className?: string
  isLoading?: boolean
  articles?: Article[]
  listView?: ListView
}

export const ArticlesList = memo((props: ArticlesListProps) => {
  const {
    className, isLoading, articles, listView,
  } = props

  const renderArticle = (article: Article) => (
    <ArticlesListItem article={article} key={article.id} listView={listView} />
  )

  return (
    <div className={cls(s.ArticlesList, {}, [className, s[listView as string]])}>
      {articles?.map(renderArticle)}
      {(!articles?.length || isLoading) && <Loader />}
    </div>
  )
})
