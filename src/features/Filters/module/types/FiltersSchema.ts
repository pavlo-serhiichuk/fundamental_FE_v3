export type OrderType = 'asc' | 'desc'

export enum SortByParams {
  DATE = 'created',
  VIEWS = 'views',
  NAME = 'title'
}

export interface FiltersSchema {
  order: OrderType
  sortBy: SortByParams
  searchValue: string
}
