import { type StateSchema } from '@/app/providers/StoreProvider'

export const getEditArticleData = (state: StateSchema) =>
  state.editArticle?.editData
export const getEditArticleLoading = (state: StateSchema) =>
  state.editArticle?.isLoading
export const getEditArticleError = (state: StateSchema) =>
  state.editArticle?.error
