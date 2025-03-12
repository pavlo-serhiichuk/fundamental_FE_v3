import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {useTheme} from 'shared/hooks/useTheme'
import {cls} from 'shared/helpers/cls'
import {AboutPage} from 'pages/AboutPage'
import {MainPage} from 'pages/MainPage'

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
