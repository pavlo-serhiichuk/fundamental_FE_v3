import {memo} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {Button} from '@/shared/ui/Button'
import ThemeCircle from '@/shared/assets/icons/circle.svg'
import {useTheme} from '@/shared/hooks/useTheme'
import * as s from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const {className} = props
  const {theme, toggleTheme} = useTheme()

  return (
    <Button
      theme="clear"
      onClick={toggleTheme}
      data-testid="theme-switcher"
      className={cls(s.ThemeSwitcher, {
        [s.light]: theme === 'light',
        [s.dark]: theme === 'dark',
        [s.green]: theme === 'green',
      }, [className])}
    >
      <ThemeCircle />
    </Button>
  )
})
