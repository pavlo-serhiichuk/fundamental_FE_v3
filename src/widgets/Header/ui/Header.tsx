import { type FC } from 'react'
import {cls} from 'shared/lib/cls/cls'
import * as s from './Header.module.scss'
import {Link} from 'react-router-dom'
import {AppLink} from 'shared/ui/AppLink/AppLink'

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = (props) => {
  // const { t } = useTranslation()
  const { className } = props

  return (
    <div className={cls(s.Header, {}, [className])}>
      <div className={s.links}>
        <AppLink theme={'navigation'} to={'/'}><span>Main</span></AppLink>
        <AppLink theme={'navigation'} to={'/about'}><span>About</span></AppLink>
      </div>
    </div>
  )
}
