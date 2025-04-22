import {createEntityAdapter, createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {type Article} from 'entities/Article'
import {articlesListInitialState} from 'pages/ArticlesPage/module/slice/articlesPageState'
import {ArticlesPageSchema} from 'pages/ArticlesPage/module/types/ArticlesPageSchema'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articlesPageTypes'
import {fetchArticlesList} from 'pages/ArticlesPage/module/services/fetchArticlesList/fetchArticlesList'
import type {StateSchema} from 'app/providers/StoreProvider'

const articlesListAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id || '',
})

export const getArticlesList = articlesListAdapter.getSelectors<StateSchema>(
  (state: any) => state.articlesList || articlesListAdapter.getInitialState(),
)

export const articlesPageSlice = createSlice({
  name: 'articlesSlice',
  initialState: articlesListInitialState,
  reducers: {
    setArticlesView: (state, action: PayloadAction<ArticlesView>) => {
      state.articlesView = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state: ArticlesPageSchema) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        articlesListAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticlesList.rejected, (state: ArticlesPageSchema, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {actions: articlesPageActions} = articlesPageSlice
export const {reducer: articlesPageReducer} = articlesPageSlice
