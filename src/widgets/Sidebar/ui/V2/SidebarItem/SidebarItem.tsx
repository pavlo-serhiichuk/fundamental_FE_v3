import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getUserAuthData } from '@/entities/User'
import { cls, Mods } from '@/shared/lib/cls/cls'
import { AppLink } from '@/shared/ui/V2/AppLink'
import { ISidebarItem } from '../../../model/types/sidebar'
import * as s from './SidebarItem.module.scss'
import { Icon } from '@/shared/ui/V2/Icon'

interface SidebarItemProps {
  className?: string
  item: ISidebarItem
  collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { t } = useTranslation()
  const { className, item, collapsed } = props
  const isAuth = useSelector(getUserAuthData)
  const isSelected = useLocation().pathname === item.path
  const mods: Mods = {
    [s.collapsed]: collapsed,
    [s.selected]: isSelected,
  }

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <AppLink
      to={item.path}
      theme="navigation"
      isActive={isSelected}
      className={cls(s.SidebarItem, mods, [className])}
    >
      <Icon Svg={item.Icon} height={20} width={20} />
      <span>{t(item.name)}</span>
    </AppLink>
  )
})
