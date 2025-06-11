import { memo, useCallback } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { Button } from '@/shared/ui/Button'
import ThemeCircle from '@/shared/assets/icons/circle.svg'
import { useTheme } from '@/shared/hooks/useTheme'
import * as s from './ThemeSwitcher.module.scss'
import { saveJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()
  const dispatch = useAppDispatch()
  const handleToggleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      // console.log('toggle theme')
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [toggleTheme])

  return (
    <Button
      theme="clear"
      onClick={handleToggleTheme}
      data-testid="theme-switcher"
      className={cls(
        s.ThemeSwitcher,
        {
          [s.light]: theme === 'app_light_theme',
          [s.dark]: theme === 'app_dark_theme',
          [s.green]: theme === 'app_green_theme',
        },
        [className],
      )}
    >
      <ThemeCircle />
    </Button>
  )
})
