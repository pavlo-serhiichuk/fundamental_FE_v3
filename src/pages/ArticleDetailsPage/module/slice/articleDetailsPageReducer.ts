import {articleDetailsReducer} from 'features/ArticleDetails'
import {articleDetailsCommentsReducer} from 'features/ArticleDetailsComments'
import {combineReducers} from '@reduxjs/toolkit'
import {ArticleDetailsPageSchema} from '../types/ArticleDetailsPageSchema'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
// @ts-ignore
  details: articleDetailsReducer,
  // @ts-ignore
  comments: articleDetailsCommentsReducer,
  // @ts-ignore
})
