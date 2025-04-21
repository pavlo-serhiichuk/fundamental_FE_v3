import {Article} from 'entities/Article'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articlesListTypes'
import {EntityState} from '@reduxjs/toolkit'

export interface ArticlesListSchema extends EntityState<Article, string>{
  isLoading?: boolean
  error?: string | undefined
  articlesView: ArticlesView
}
