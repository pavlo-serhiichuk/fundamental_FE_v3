import { ArticleDetailsCommentsSchema } from '@/features/ArticleDetailsComments'
import { ArticleDetailsSchema } from '@/entities/Article'

export interface ArticleDetailsPageSchema {
  details: ArticleDetailsSchema
  comments: ArticleDetailsCommentsSchema
}
