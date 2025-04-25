export type OrderByType = 'asc' | 'desc'

export enum SortByType {
  DATE = 'created',
  VIEWS = 'views',
  NAME = 'title'
}

export interface FiltersSchema {
  order: OrderByType
  sortBy: SortByType
  searchValue: string
}
