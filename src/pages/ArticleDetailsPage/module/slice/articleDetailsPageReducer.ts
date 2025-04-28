import {articleDetailsReducer} from 'features/ArticleDetails'
import {articleDetailsCommentsReducer} from 'features/ArticleDetailsComments'
import {
  articleDetailsRecommendationsReducer,
} from 'features/ArticleDetailsRecommendations/module/slice/articleDetailsRecomandationsSlice'
import {ArticleDetailsPageSchema} from 'pages/ArticleDetailsPage/module/types/ArticleDetailsPageSchema'
import {combineReducers, Reducer} from '@reduxjs/toolkit'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
// @ts-ignore
  details: articleDetailsReducer,
  // @ts-ignore
  comments: articleDetailsCommentsReducer,
  // @ts-ignore
  recommendations: articleDetailsRecommendationsReducer,
})
