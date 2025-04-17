import {type EntityState} from '@reduxjs/toolkit/dist/entities/models'

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean
  error?: string
}
