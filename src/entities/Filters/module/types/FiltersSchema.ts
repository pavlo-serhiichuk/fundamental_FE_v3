import {ArticleTopicType} from 'entities/Article'

export type OrderByType = 'asc' | 'desc'

export enum SortByType {
  DATE = 'created',
  VIEWS = 'views',
  NAME = 'title'
}

export type TopicType = ArticleTopicType

export interface FiltersSchema {
  orderBy?: OrderByType
  sortBy?: SortByType
  searchValue?: string
  topicType?: TopicType
}
