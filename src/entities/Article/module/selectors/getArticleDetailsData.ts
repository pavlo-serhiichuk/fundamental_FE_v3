import { type StateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsData = (state: StateSchema) =>
  state.articleDetailsPage?.details?.data
export const getArticleDetailsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.details?.isLoading
export const getArticleDetailsError = (state: StateSchema) =>
  state.articleDetailsPage?.details?.error
