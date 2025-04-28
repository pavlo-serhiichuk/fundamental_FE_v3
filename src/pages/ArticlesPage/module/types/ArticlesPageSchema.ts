import {Article} from 'entities/Article'
import {EntityState} from '@reduxjs/toolkit'

export interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading?: boolean
  error?: string | undefined
  pageNumber?: number
  limit?: number
  hasMore?: boolean
  _inited?: boolean
}
