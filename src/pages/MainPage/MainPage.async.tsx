import { lazy } from 'react';

const MainPageAsync = lazy(() => new Promise<any>(resolve => {
  setTimeout(() => resolve(import('./MainPage')), 1000)
}))
// const MainPageAsync = lazy(() => import('./MainPage'));

export default MainPageAsync
