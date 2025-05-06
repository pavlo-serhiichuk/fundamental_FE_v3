import {mockArticle} from 'entities/Article'
import {ArticlesPageSchema} from '../types/ArticlesPageSchema'

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
    1: mockArticle,
    2: mockArticle,
    3: mockArticle,
    4: mockArticle,
    5: mockArticle,
    6: mockArticle,
    7: mockArticle,
  },
}
