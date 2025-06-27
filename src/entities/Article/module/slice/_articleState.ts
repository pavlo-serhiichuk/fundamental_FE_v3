import { mockArticle } from '../mocks/mockArticle'
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema'
import { Article } from '../types/article'

export const newArticle: Article = {
  title: '',
  subtitle: '',
  image: '',
  views: 0,
  created: '',
  userId: '',
  blocks: [],
}
export const getArticleDetailsMockState = (
  isLoading = false,
  error: string | undefined = undefined,
): ArticleDetailsSchema => ({
  isLoading,
  error,
  data: mockArticle,
})
