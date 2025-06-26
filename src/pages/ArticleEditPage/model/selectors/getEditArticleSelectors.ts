import { StateSchema } from '@/app/providers/StoreProvider'

export const getEditArticleData = (state: StateSchema) =>
  state.articleEditPage?.editData
