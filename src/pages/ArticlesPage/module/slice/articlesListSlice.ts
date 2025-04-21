import {createEntityAdapter, createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {type Article} from 'entities/Article'
import {articlesInitialState} from 'pages/ArticlesPage/module/slice/articlesListState'
import {ArticlesListSchema} from 'pages/ArticlesPage/module/types/ArticlesListSchema'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articlesListTypes'
import {fetchArticlesList} from 'pages/ArticlesPage/module/services/fetchArticlesList/fetchArticlesList'
import type {StateSchema} from 'app/providers/StoreProvider'

const articlesListAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id || '',
})

export const getArticlesList = articlesListAdapter.getSelectors<StateSchema>(
  (state: any) => state.articlesList || articlesListAdapter.getInitialState(),
)

export const articlesListSlice = createSlice({
  name: 'articlesSlice',
  initialState: articlesInitialState,
  reducers: {
    setArticlesView: (state, action: PayloadAction<ArticlesView>) => {
      state.articlesView = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state: ArticlesListSchema) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        articlesListAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticlesList.rejected, (state: ArticlesListSchema, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {actions: articlesListActions} = articlesListSlice
export const {reducer: articlesListReducer} = articlesListSlice
