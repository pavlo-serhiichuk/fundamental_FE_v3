import {LS_THEME_KEY, Theme, ThemeContext} from './ThemesContext'
import {useContext} from 'react'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext)
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'

    localStorage.setItem(LS_THEME_KEY, newTheme)
    setTheme(newTheme)
  }
  return {theme, toggleTheme}
}
