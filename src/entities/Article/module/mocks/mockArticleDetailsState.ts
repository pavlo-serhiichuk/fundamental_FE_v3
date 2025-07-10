import { mockArticle } from './mockArticle'
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema'

export const mockArticleDetailsState: ArticleDetailsSchema = {
  data: mockArticle,
  isLoading: false,
  error: undefined,
}
