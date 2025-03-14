import { memo } from 'react'
import {cls} from 'shared/lib/cls/cls'
import { Button } from 'shared/ui/Button/Button'
import * as s from './LangSwitcher.module.scss'

interface LandSwitcherProps {
  className?: string
}

export const LangSwitcher = memo((props: LandSwitcherProps) => {
  const { className } = props

  const toggleLanguage = async () => {
    // i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
  }

  return (
    <Button
      theme={'clear'}
      onClick={toggleLanguage}
      className={cls(s.LangSwitcher, {}, [className])}>
      {'Lang'}
    </Button>
  )
})
