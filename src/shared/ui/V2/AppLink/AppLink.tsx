import { type FC } from 'react'
import { NavLink, type LinkProps } from 'react-router-dom'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './AppLink.module.scss'

export type AppLinkThemes =
  | 'content'
  | 'navigation'
  | 'navigationBorder'
  | 'contentBorder'

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkThemes
  to: string
  isActive?: boolean
  'data-testid'?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className = '',
    theme = 'content',
    children,
    isActive,
    ...otherProps
  } = props
  return (
    <NavLink
      to={to}
      className={cls(s.AppLink, {}, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </NavLink>
  )
}
