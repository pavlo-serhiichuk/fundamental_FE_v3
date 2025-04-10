import { lazy } from 'react'

export const ProfilePageAsync = lazy(() => new Promise((resolve: any) =>
  setTimeout(() => resolve(import('./ProfilePage')), 1400))
)
