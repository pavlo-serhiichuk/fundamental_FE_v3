import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {useTheme} from 'shared/hooks/useTheme'
import {cls} from 'helpers/cls'
import AboutPage from 'pages/AboutPage/AboutPage'
import MainPage from 'pages/MainPage/MainPage'

export const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={cls('app', {}, [theme])}>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>{theme}</button>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/'} element={<MainPage />} />
          </Routes>
        </Suspense>
    </div>
  )
}
