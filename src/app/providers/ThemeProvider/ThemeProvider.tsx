import React, { FC, useMemo, useState, Children, useEffect } from 'react'
import { ThemeContext } from '@/shared/lib/context/ThemesContext'
import { Theme } from '@/shared/types/theme'
import { LS_THEME_KEY } from '@/shared/const/localStorage'
import { useGetJsonSettings } from '@/entities/User'

const defTheme =
  (localStorage.getItem(LS_THEME_KEY) as Theme) || 'app_light_theme'

export const ThemeProvider: FC<any> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defTheme)
  const { theme: jsonTheme } = useGetJsonSettings()

  useEffect(() => {
    if (jsonTheme) {
      setTheme(jsonTheme)
    }
  }, [jsonTheme])

  const defThemeContextValue = useMemo(() => ({ theme, setTheme }), [theme])
  return (
    <ThemeContext.Provider value={defThemeContextValue}>
      {Children.only(children)}
    </ThemeContext.Provider>
  )
}
