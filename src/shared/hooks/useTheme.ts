import {useContext} from 'react'
import {ThemeContext} from '@/shared/lib/context/ThemesContext'
import {Theme} from '@/shared/types/theme'
import {LS_THEME_KEY} from '@/shared/const/localStorage'

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
