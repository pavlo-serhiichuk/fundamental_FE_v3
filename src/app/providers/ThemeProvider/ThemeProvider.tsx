import React, {FC, useMemo, useState} from 'react';
import {LS_THEME_KEY, Theme, ThemeContext} from './ThemesContext'
import { Children } from 'react';

const defTheme = localStorage.getItem(LS_THEME_KEY) as Theme || 'light'

export const ThemeProvider: FC<any> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defTheme)
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark': 'light')
  }

  const defThemeContextValue = useMemo(() => ({theme, setTheme}), [theme])
  return (
    <ThemeContext.Provider value={defThemeContextValue}>
      {Children.only(children)}
    </ThemeContext.Provider>
  );
};
