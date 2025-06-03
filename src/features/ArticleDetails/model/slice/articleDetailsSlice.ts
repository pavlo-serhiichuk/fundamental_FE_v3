import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Article } from '@/entities/Article'
import { type ArticleDetailsSchema } from '../types/ArticleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { articleInitialState } from './articleState'

export const articleDetailsSlice = createSlice({
  name: 'articleDetailsSlice',
  initialState: articleInitialState,
  reducers: {
    // set: (state, action: PayloadAction) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state: ArticleDetailsSchema) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state: ArticleDetailsSchema, action: PayloadAction<Article>) => {
          state.isLoading = false
          state.data = action.payload
        },
      )
      .addCase(
        fetchArticleById.rejected,
        (
          state: ArticleDetailsSchema,
          action: PayloadAction<string | undefined>,
        ) => {
          state.isLoading = false
          state.error = action.payload
        },
      )
  },
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
