import {createEntityAdapter, createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {type Article} from 'entities/Article'
import {articlesInitialState} from 'pages/ArticlesPage/module/slice/articlesListState'
import {ArticlesSchema} from 'pages/ArticlesPage/module/types/ArticlesSchema'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articles'
import {fetchArticlesList} from 'pages/ArticlesPage/module/services/fetchArticlesList/fetchArticlesList'
import type {Comment} from 'entities/Comment'
import type {StateSchema} from 'app/providers/StoreProvider'

const articlesListAdapter = createEntityAdapter({
  selectId: (comment: Comment) => comment.id,
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
      .addCase(fetchArticlesList.pending, (state: ArticlesSchema) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchArticlesList.rejected, (state: ArticlesSchema, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {actions: articlesActions} = articlesListSlice
export const {reducer: articlesListReducer} = articlesListSlice
