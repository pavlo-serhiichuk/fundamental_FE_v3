import { combineReducers } from '@reduxjs/toolkit'
import { articleDetailsReducer } from '@/features/ArticleDetails'
import { articleDetailsCommentsReducer } from '@/features/ArticleDetailsComments'
import { ArticleDetailsPageSchema } from '../types/ArticleDetailsPageSchema'

export const articleDetailsPageSlice =
  combineReducers<ArticleDetailsPageSchema>({
    // @ts-ignore
    details: articleDetailsReducer,
    // @ts-ignore
    comments: articleDetailsCommentsReducer,
    // @ts-ignore
  })
