import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage/AboutPage.async'
import MainPage from './pages/MainPage/MainPage.async'

export const App = () => {
  return (
    <div className={'app'}>
        <Link to={'/'} className={'content'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/'} element={<MainPage />} />
          </Routes>
        </Suspense>
    </div>
  )
}
