import {createEntityAdapter, createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type {StateSchema} from '@/app/providers/StoreProvider'
import {ListView} from '@/features/ChangeListView'
import {type Article} from '../../../../entities/Article'
import {articlesListInitialState} from './articlesPageState'
import {fetchArticlesList} from '../services/fetchArticlesList/fetchArticlesList'
import {ArticlesPageSchema} from '../types/ArticlesPageSchema'

const articlesListAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id || '',
})

export const getArticlesList = articlesListAdapter.getSelectors<StateSchema>(
  (state: any) => state.articlesPage || articlesListAdapter.getInitialState(),
)

export const articlesPageSlice = createSlice({
  name: 'articlesSlice',
  initialState: articlesListInitialState,
  reducers: {
    initArticlesPageState: (state: ArticlesPageSchema, action: PayloadAction<ListView>) => {
      state.limit = action.payload === ListView.SMALL ? 12 : 4
      state._inited = true
    },
    setPageNumber: (state: ArticlesPageSchema, action: PayloadAction<number>) => {
      state.pageNumber = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state: ArticlesPageSchema, action) => {
        state.error = undefined
        state.isLoading = true
        if (action.meta.arg?.replace) {
          articlesListAdapter.removeAll(state)
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false
        // @ts-ignore
        state.hasMore = action.payload.length >= state.limit
        state._inited = true

        if (action.meta.arg?.replace) {
          articlesListAdapter.setAll(state, action.payload)
        } else {
          articlesListAdapter.addMany(state, action.payload)
        }
      })
      .addCase(fetchArticlesList.rejected, (state: ArticlesPageSchema, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions,
} = articlesPageSlice
