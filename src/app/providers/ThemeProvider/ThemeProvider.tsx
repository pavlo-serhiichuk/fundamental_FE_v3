import React, {
  FC, useMemo, useState, Children,
} from 'react'
import {ThemeContext} from '@/shared/lib/context/ThemesContext'
import {Theme} from '@/shared/types/theme'
import {LS_THEME_KEY} from '@/shared/const/localStorage'

const defTheme = localStorage.getItem(LS_THEME_KEY) as Theme || 'light'

export const ThemeProvider: FC<any> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defTheme)
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const defThemeContextValue = useMemo(() => ({theme, setTheme}), [theme])
  return (
    <ThemeContext.Provider value={defThemeContextValue}>
      {Children.only(children)}
    </ThemeContext.Provider>
  )
}
