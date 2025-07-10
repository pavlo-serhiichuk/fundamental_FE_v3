import { Article } from '@/entities/Article'

export interface ArticleCreateSchema {
  newArticle: Article
  isLoading?: boolean
  error?: string | undefined
}
