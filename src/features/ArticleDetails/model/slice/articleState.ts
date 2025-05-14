import {mockArticle} from '@/entities/Article'
import {ArticleDetailsSchema} from '../types/ArticleDetailsSchema'

export const articleInitialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
}

export const getArticleDetailsMockState = (isLoading = false, error: string | undefined = undefined): ArticleDetailsSchema => ({
  isLoading,
  error,
  data: mockArticle,
})
