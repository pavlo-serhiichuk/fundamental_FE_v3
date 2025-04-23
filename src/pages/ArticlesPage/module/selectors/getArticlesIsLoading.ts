import {StateSchema} from 'app/providers/StoreProvider'

export const getArticlesIsLoading = (state: StateSchema) => state?.articlesPage?.isLoading || false
