import { EntityState } from '@reduxjs/toolkit'
import { Article } from '@/entities/Article'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string | undefined
  pageNumber?: number
  limit?: number
  hasMore?: boolean
  _inited?: boolean
}
