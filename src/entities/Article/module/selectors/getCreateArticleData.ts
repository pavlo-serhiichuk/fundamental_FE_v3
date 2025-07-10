import { type StateSchema } from '@/app/providers/StoreProvider'

export const getCreateArticleData = (state: StateSchema) =>
  state.createArticle?.newArticle
export const getCreateArticleLoading = (state: StateSchema) =>
  state.createArticle?.isLoading
export const getCreateArticleError = (state: StateSchema) =>
  state.createArticle?.error
