import {
  createEntityAdapter,
  createSlice, PayloadAction,
} from '@reduxjs/toolkit'
import {type StateSchema} from 'app/providers/StoreProvider'
import {Article} from 'entities/Article'
import {ArticleDetailsRecommendationsSchema} from '../types/ArticleDetailsRecommendationsSchema'
import {fetchArticleDetailsRecommendations} from '../services/fetchArticleDetailsRecommendations/fetchArticleDetailsRecommendations'

const articleDetailsRecommendationsAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id || '',
})

export const getArticleDetailsRecommendations = articleDetailsRecommendationsAdapter.getSelectors<StateSchema>(
  (state: StateSchema) => state.articleDetailsPage?.recommendations || articleDetailsRecommendationsAdapter.getInitialState(),
)

export const initialState = articleDetailsRecommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined,
})

const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetailsRecommendations.pending, (state: any) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleDetailsRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        articleDetailsRecommendationsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleDetailsRecommendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {reducer: articleDetailsRecommendationsReducer} = articleDetailsRecommendationsSlice
