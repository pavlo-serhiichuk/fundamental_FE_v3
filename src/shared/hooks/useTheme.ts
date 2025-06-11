import { useContext } from 'react'
import { ThemeContext } from '@/shared/lib/context/ThemesContext'
import { Theme } from '@/shared/types/theme'

interface UseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    let newTheme: Theme
    switch (theme) {
      case 'app_light_theme':
        newTheme = 'app_green_theme'
        break
      case 'app_green_theme':
        newTheme = 'app_dark_theme'
        break
      case 'app_dark_theme':
        newTheme = 'app_light_theme'
        break
      default:
        newTheme = 'app_light_theme'
    }
    saveAction?.(newTheme)
    console.log('1')
    setTheme?.(newTheme)
  }
  return { theme: theme || 'app_light_theme', toggleTheme }
}
