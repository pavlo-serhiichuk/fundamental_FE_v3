import {StateSchema} from 'app/providers/StoreProvider'

export const getArticlesView = (state: StateSchema) => state?.articlesPage?.articlesView
