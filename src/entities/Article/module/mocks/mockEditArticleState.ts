import { mockArticle } from './mockArticle'
import { ArticleEditSchema } from '../types/ArticleEditSchema'

export const mockEditArticleState: ArticleEditSchema = {
  data: mockArticle,
  editData: mockArticle,
  isLoading: false,
  error: undefined,
}
