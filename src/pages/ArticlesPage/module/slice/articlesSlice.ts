import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {type Article} from 'entities/Article'
import {articlesInitialState} from 'pages/ArticlesPage/module/slice/articlesState'
import {ArticlesSchema} from 'pages/ArticlesPage/module/types/ArticlesSchema'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articles'
import {fetchArticles} from '../services/fetchAllArticles/fetchArticles'

export const articlesSlice = createSlice({
  name: 'articlesSlice',
  initialState: articlesInitialState,
  reducers: {
    setArticlesView: (state, action: PayloadAction<ArticlesView>) => {
      state.articlesView = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state: ArticlesSchema) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticles.fulfilled, (state: ArticlesSchema, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchArticles.rejected, (state: ArticlesSchema, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {actions: articlesActions} = articlesSlice
export const {reducer: articlesReducer} = articlesSlice
