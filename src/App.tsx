import {Suspense, useContext, useState} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage/AboutPage.async'
import MainPage from './pages/MainPage/MainPage.async'
import {Theme, ThemeContext} from './themes/ThemesContext'
import {useTheme} from './themes/useTheme'

export const App = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className={`app ${theme}`}>
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
