import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { Article } from '../types/article'

const initialState: ArticleDetailsSchema = {}

export const articleDetailsSlice = createSlice({
  name: 'articleDetailsSlice',
  initialState,
  reducers: {
    template: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false
          state.data = action.payload
          state.editData = action.payload
        },
      )
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer,
} = articleDetailsSlice
