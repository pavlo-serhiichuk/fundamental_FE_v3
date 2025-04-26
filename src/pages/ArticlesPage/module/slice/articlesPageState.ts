import {ArticlesPageSchema} from 'pages/ArticlesPage/module/types/ArticlesPageSchema'
import {getArticleDetailsMockState} from 'features/ArticleDetails/model/slice/articleState'
import {Article} from 'entities/Article'

export const articlesListInitialState: ArticlesPageSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
  pageNumber: 1,
  hasMore: true,
  _inited: false,
}

export const articlesListMockState: ArticlesPageSchema = {
  isLoading: false,
  error: undefined,
  ids: ['1', '2', '3', '4', '5', '6', '7'],
  entities: {
    1: getArticleDetailsMockState().data as Article,
    2: getArticleDetailsMockState().data as Article,
    3: getArticleDetailsMockState().data as Article,
    4: getArticleDetailsMockState().data as Article,
    5: getArticleDetailsMockState().data as Article,
    6: getArticleDetailsMockState().data as Article,
    7: getArticleDetailsMockState().data as Article,
  },
}
