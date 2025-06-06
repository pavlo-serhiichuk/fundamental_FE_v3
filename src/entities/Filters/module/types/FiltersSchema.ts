import { ArticleTopicType } from '@/entities/Article'
import { SortByType } from '../consts/consts'

export type OrderByType = 'asc' | 'desc'

export type TopicType = ArticleTopicType

export interface FiltersSchema {
  orderBy?: OrderByType
  sortBy?: SortByType
  searchValue?: string
  topicType?: TopicType
}
