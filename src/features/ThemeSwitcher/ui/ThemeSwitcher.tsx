import { memo, useCallback } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { Button } from '@/shared/ui/Button'
import ThemeCircle from '@/shared/assets/icons/circle.svg'
import { useTheme } from '@/shared/hooks/useTheme'
import * as s from './ThemeSwitcher.module.scss'
import { saveJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { toggleFeatures } from '@/shared/lib/features'

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
  }, [toggleTheme, dispatch])

  const lightClass = toggleFeatures({
    name: 'isV2',
    off: () => s.light,
    on: () => s.lightV2,
  })
  const darkClass = toggleFeatures({
    name: 'isV2',
    off: () => s.dark,
    on: () => s.darkV2,
  })
  const greenClass = toggleFeatures({
    name: 'isV2',
    off: () => s.green,
    on: () => s.greenV2,
  })

  return (
    <Button
      theme="clear"
      onClick={handleToggleTheme}
      data-testid="theme-switcher"
      className={cls(
        s.ThemeSwitcher,
        {
          [lightClass]: theme === 'app_light_theme',
          [darkClass]: theme === 'app_dark_theme',
          [greenClass]: theme === 'app_green_theme',
        },
        [className],
      )}
    >
      <ThemeCircle />
    </Button>
  )
})
