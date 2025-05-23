import {memo, useState} from 'react'
import {useSelector} from 'react-redux'
import {cls} from '@/shared/lib/cls/cls'
import {Button} from '@/shared/ui/Button'
import {ThemeSwitcher} from '@/features/ThemeSwitcher'
import {LangSwitcher} from '@/features/LandSwitcher'
import {VStack} from '@/shared/ui/Stack'
import {ISidebarItem} from '../../model/types/sidebar'
import * as s from './Sidebar.module.scss'
import {SidebarItem} from '../SidebarItem/SidebarItem'
import {getSidebarItems} from '../../model/selectors/getSidebarItems'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const {className} = props
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItems = useSelector(getSidebarItems)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  return (
    <aside data-testid="sidebar" className={cls(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>
      <VStack>
        {sidebarItems.map((item: ISidebarItem) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </VStack>
      <div className={cls(s.switchers, {[s.switchersCollapsed]: collapsed})}>
        <ThemeSwitcher />
        <LangSwitcher className={s.sidebarLang} />
      </div>
      <Button
        data-testid="sidebar-toggle"
        theme="sidebar_squad_m"
        className={s.collapseBtn}
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
    </aside>
  )
})
