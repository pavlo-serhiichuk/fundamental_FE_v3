import { Article } from '@/entities/Article'

export interface ArticleDetailsSchema {
  data?: Article
  editData?: Article
  isLoading?: boolean
  error?: string | undefined
}
