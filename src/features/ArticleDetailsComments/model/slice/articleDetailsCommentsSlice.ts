import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import {type Comment} from 'entities/Comment'
import {type StateSchema} from 'app/providers/StoreProvider'
import {type ArticleDetailsCommentsSchema} from '../types/ArticleDetailsCommentsSchema'
import {fetchArticleCommentsById} from '../services/fetchArticleCommentsById/fetchArticleCommentsById'

const articleDetailsCommentsAdapter = createEntityAdapter({
  selectId: (comment: Comment) => comment.id || '',
})

export const getArticleDetailsComments = articleDetailsCommentsAdapter.getSelectors<StateSchema>((state: StateSchema) => state.articleDetailsPage?.comments || articleDetailsCommentsAdapter.getInitialState())

export const articleDetailsCommentsInitialState = articleDetailsCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
})

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: articleDetailsCommentsInitialState,
  reducers: {
    commentsAdded: articleDetailsCommentsAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleCommentsById.pending, (state: any) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleCommentsById.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false
        articleDetailsCommentsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleCommentsById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {reducer: articleDetailsCommentsReducer} = articleDetailsCommentsSlice
