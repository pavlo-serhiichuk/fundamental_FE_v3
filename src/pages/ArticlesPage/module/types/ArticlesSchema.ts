import {Article} from 'entities/Article'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articles'

export interface ArticlesSchema {
  isLoading?: boolean
  error?: string | undefined
  data?: Article[]
  articlesView: ArticlesView
}
