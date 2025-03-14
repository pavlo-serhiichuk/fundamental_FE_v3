import {lazy, ReactNode} from 'react';

export const MainPageAsync = lazy(() => new Promise<any>(resolve => {
  setTimeout(() => resolve(import('./MainPage')), 1000)
}))
// const MainPageAsync = lazy(() => import('./MainPage'));

