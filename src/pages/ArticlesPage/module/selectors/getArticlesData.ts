import {StateSchema} from 'app/providers/StoreProvider'

export const getArticlesData = (state: StateSchema) => state?.articlesList?.data || []
export const getArticlesIsLoading = (state: StateSchema) => state?.articlesList?.isLoading
export const getArticlesError = (state: StateSchema) => state?.articlesList?.error
