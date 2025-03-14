import {type FC, useState} from 'react'
import {cls} from 'shared/lib/cls/cls'
import * as s from './Sidebar.module.scss'
import {Button} from 'shared/ui/Button/Button'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  // const { t } = useTranslation()
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }
  return (
    <div className={cls(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>
      <div></div>
      <div className={s.switchers}><ThemeSwitcher /></div>
      <Button theme={'sidebar-squad-m'} className={s.collapseBtn} onClick={onToggle}>{collapsed ? '>': '<'}</Button>
    </div>
  )
}
