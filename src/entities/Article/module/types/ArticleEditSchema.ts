import { Article } from '@/entities/Article'

export interface ArticleEditSchema {
  data?: Article
  editData?: Article
  isLoading?: boolean
  error?: string | undefined
}
