import {memo} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articles'
import {Article} from 'entities/Article'
import * as s from './ArticlesListItem.module.scss'

interface ArticlesListItemProps {
  className?: string
  articlesView?: ArticlesView
  article: Article
}

export const ArticlesListItem = memo((props: ArticlesListItemProps) => {
  const {className, article} = props
  const {t} = useTranslation()
  return (
    <div className={cls(s.ArticlesListItem, {}, [className])}>
      {article.title}
    </div>
  )
})
