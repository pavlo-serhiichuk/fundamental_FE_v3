import {lazy} from 'react'

export const ArticlesPageAsync = lazy(() => new Promise(
  (resolve: any) => {
    setTimeout(() => resolve(import('./ArticlesPage')), 1400)
  },
))
