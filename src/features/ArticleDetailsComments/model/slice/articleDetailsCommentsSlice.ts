import {
  createEntityAdapter,
  createSlice, type PayloadAction,
} from '@reduxjs/toolkit'
import {type Comment} from 'entities/Comment'
import {type ArticleDetailsCommentsSchema} from 'features/ArticleDetailsComments'
import {
  fetchArticleCommentsById,
} from 'features/ArticleDetailsComments/model/services/fetchArticleCommentsById/fetchArticleCommentsById'
import {type StateSchema} from 'app/providers/StoreProvider'

const commentsAdapter = createEntityAdapter({
  selectId: (comment: Comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>((state: any) => state.articleDetailsComments || commentsAdapter.getInitialState())

export const articleDetailsCommentsInitialState = commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
})

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: articleDetailsCommentsInitialState,
  reducers: {
    commentsAdded: commentsAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleCommentsById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleCommentsById.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false
        commentsAdapter.setAll(state, action.payload as Comment[])
      })
      .addCase(fetchArticleCommentsById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {reducer: articleDetailsCommentsReducer} = articleDetailsCommentsSlice
