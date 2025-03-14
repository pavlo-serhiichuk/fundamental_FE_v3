import {createContext} from 'react'

export type Theme = 'light' | 'dark' | 'green'

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LS_THEME_KEY = 'theme'
