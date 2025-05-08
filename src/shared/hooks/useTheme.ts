import {useContext} from 'react'
import {LS_THEME_KEY, Theme, ThemeContext} from '@/app/providers/ThemeProvider/ThemesContext'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext)
  const toggleTheme = () => {
    let newTheme: Theme
    switch (theme) {
    case 'light':
      newTheme = 'green'
      break
    case 'green':
      newTheme = 'dark'
      break
    case 'dark':
      newTheme = 'light'
      break
    default:
      newTheme = 'light'
    }

    localStorage.setItem(LS_THEME_KEY, newTheme)
    setTheme?.(newTheme)
  }
  return {theme: theme || 'light', toggleTheme}
}
