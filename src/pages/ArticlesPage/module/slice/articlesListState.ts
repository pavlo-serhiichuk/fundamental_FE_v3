import {ArticlesListSchema} from 'pages/ArticlesPage/module/types/ArticlesListSchema'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articlesListTypes'

export const articlesInitialState: ArticlesListSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  articlesView: ArticlesView.BIG,
}

export const articlesMockState: ArticlesListSchema = {
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
  articlesView: ArticlesView.SMALL,
}
