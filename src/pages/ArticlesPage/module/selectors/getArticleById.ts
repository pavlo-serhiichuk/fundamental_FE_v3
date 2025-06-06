import { buildSelector } from '@/shared/store'
import { StateSchema } from '@/app/providers/StoreProvider'

export const [useGetArticleById] = buildSelector(
  (state: StateSchema, id: string) => state.articlesPage?.entities[id],
)
