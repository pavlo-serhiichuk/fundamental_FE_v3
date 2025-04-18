import {ArticlesSchema} from 'pages/ArticlesPage/module/types/ArticlesSchema'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articles'

export const articlesInitialState: ArticlesSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
  articlesView: ArticlesView.SMALL,
}

export const articlesMockState: ArticlesSchema = {
  isLoading: false,
  error: undefined,
  data: [],
  articlesView: ArticlesView.SMALL,
}
