import {lazy} from 'react';

export const AboutPageAsync = lazy(() => new Promise<any>(resolve => {
  setTimeout(() => resolve(import('./AboutPage')), 2000)
}))
// const AboutPageAsync = lazy(() => import('./AboutPage'));

