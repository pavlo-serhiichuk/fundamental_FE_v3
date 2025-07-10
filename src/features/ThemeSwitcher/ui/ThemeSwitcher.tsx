import { memo, useCallback } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { Button as ButtonDepricated } from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/V2/Button'
import ThemeCircleDepricated from '@/shared/assets/icons/circle.svg'
import ThemeCircle from '@/shared/assets/icons/changecolor.svg'
import { useTheme } from '@/shared/hooks/useTheme'
import * as s from './ThemeSwitcher.module.scss'
import { saveJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { ToggleFeature } from '@/shared/lib/features/components/ToggleFeature/ToggleFeature'
import { Icon } from '@/shared/ui/V2/Icon'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'

interface ThemeSwitcherProps {
  className?: string
  isV2InStorybook?: boolean
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className, isV2InStorybook } = props
  const { theme, toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const handleToggleTheme = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [toggleTheme, dispatch])

  return (
    <ToggleFeature
      feature="isV2"
      isV2InStorybook={isV2InStorybook}
      on={
        <Button
          theme="clear"
          onClick={handleToggleTheme}
          data-testid="theme-switcher"
          className={cls(s.ThemeSwitcher, {}, [className, s[`${theme}V2`]])}
        >
          <Icon Svg={ThemeCircle} width={40} height={40} />
        </Button>
      }
      off={
        <ButtonDepricated
          theme="clear"
          onClick={handleToggleTheme}
          data-testid="theme-switcher"
          className={cls(s.ThemeSwitcher, {}, [className, s[theme]])}
        >
          <IconDeprecated Svg={ThemeCircleDepricated} width={40} height={40} />
        </ButtonDepricated>
      }
    />
  )
})
