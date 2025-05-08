import {memo, useState} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {Button} from '@/shared/ui/Button/Button'
import {ThemeSwitcher} from '@/shared/ui/ThemeSwitcher/ThemeSwitcher'
import {LangSwitcher} from '@/shared/ui/LandSwitcher/LangSwitcher'
import {useSelector} from 'react-redux'
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
        theme="sidebar-squad-m"
        className={s.collapseBtn}
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
    </aside>
  )
})
