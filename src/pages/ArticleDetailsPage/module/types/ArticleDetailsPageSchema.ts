import {ArticleDetailsCommentsSchema} from '@/features/ArticleDetailsComments'
import {ArticleDetailsSchema} from '@/features/ArticleDetails'

export interface ArticleDetailsPageSchema {
  details: ArticleDetailsSchema
  comments: ArticleDetailsCommentsSchema
}
