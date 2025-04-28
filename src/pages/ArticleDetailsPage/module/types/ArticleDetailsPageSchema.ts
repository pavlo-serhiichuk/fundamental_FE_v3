import {ArticleDetailsCommentsSchema} from 'features/ArticleDetailsComments'
import {ArticleDetailsRecommendationsSchema} from 'features/ArticleDetailsRecommendations'
import {ArticleDetailsSchema} from 'features/ArticleDetails'

export interface ArticleDetailsPageSchema {
  details: ArticleDetailsSchema
  comments: ArticleDetailsCommentsSchema
  recommendations: ArticleDetailsRecommendationsSchema
}
