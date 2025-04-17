import {type Article} from './article'

export interface ArticleDetailsSchema {
  data?: Article
  isLoading?: boolean
  error?: string | undefined
}
