import {type FC} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {useTranslation} from 'react-i18next'
import * as s from './Header.module.scss'

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = (props) => {
  const {t} = useTranslation()
  const {className} = props

  return (
    <div className={cls(s.Header, {}, [className])}>
      <div className={s.links}>
        <AppLink theme="navigation" to="/"><span>{t('Main')}</span></AppLink>
        <AppLink theme="navigation" to="/about"><span>{t('About')}</span></AppLink>
      </div>
    </div>
  )
}
