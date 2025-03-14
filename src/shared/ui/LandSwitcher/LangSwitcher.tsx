import { memo } from 'react'
import {cls} from 'shared/lib/cls/cls'
import { Button } from 'shared/ui/Button/Button'
import * as s from './LangSwitcher.module.scss'
import {useTranslation} from 'react-i18next'

interface LandSwitcherProps {
  className?: string
}

export const LangSwitcher = memo((props: LandSwitcherProps) => {
  const { className } = props
  const {t, i18n} = useTranslation()
  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
  }

  return (
    <Button
      theme={'clear'}
      onClick={toggleLanguage}
      className={cls(s.LangSwitcher, {}, [className])}>
      {t('Lang')}
    </Button>
  )
})
