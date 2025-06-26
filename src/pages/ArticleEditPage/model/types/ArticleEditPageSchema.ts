import { Article } from '@/entities/Article'

export interface ArticleEditPageSchema {
  data?: Article
  editData?: Article
  isLoading?: boolean
  error?: string
}
