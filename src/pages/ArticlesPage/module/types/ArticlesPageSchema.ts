import {Article} from 'entities/Article'
import {EntityState} from '@reduxjs/toolkit'
import {ArticlesView} from './articlesPageTypes'

export interface ArticlesPageSchema extends EntityState<Article, string>{
  isLoading?: boolean
  error?: string | undefined
  articlesView: ArticlesView
}
