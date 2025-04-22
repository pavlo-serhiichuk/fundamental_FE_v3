import {ArticlesPageSchema} from 'pages/ArticlesPage/module/types/ArticlesPageSchema'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articlesPageTypes'
import {getArticleDetailsMockState} from 'pages/ArticleDetailsPage/model/slice/articleState'
import {Article} from 'entities/Article'

export const articlesListInitialState: ArticlesPageSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  articlesView: ArticlesView.BIG,
}

export const articlesListMockState: ArticlesPageSchema = {
  isLoading: false,
  error: undefined,
  ids: ['1', '2', '3'],
  entities: {
    1: getArticleDetailsMockState().data as Article,
    2: getArticleDetailsMockState().data as Article,
    3: getArticleDetailsMockState().data as Article,
  },
  articlesView: ArticlesView.SMALL,
}
