import {memo} from 'react'
import {useTranslation} from 'react-i18next'
// import {useSelector} from 'react-redux'
// import {getUserAuthData} from 'entities/User'
// import {type ISidebarItem} from 'widgets/Sidebar/model/types/sidebar'
import {cls} from 'shared/lib/cls/cls'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {ISidebarItem} from '../../model/types/sidebar'
import * as s from './SidebarItem.module.scss'

interface SidebarItemProps {
  className?: string
  item: ISidebarItem
  collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const {t} = useTranslation()
  const {className, item, collapsed} = props
  // const isAuth = useSelector(getUserAuthData)

  // if (item.authOnly && !isAuth) {
  //   return null
  // }

  return (
    <AppLink
      to={item.path}
      theme="navigation"
      className={cls(s.SidebarItem, {[s.collapsed]: collapsed}, [className])}
    >
      <item.Icon />
      <span>{t(item.name)}</span>
    </AppLink>
  )
})
