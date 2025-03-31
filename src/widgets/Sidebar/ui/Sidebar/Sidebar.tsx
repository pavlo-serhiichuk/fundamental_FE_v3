import {type FC, useState} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {Button} from 'shared/ui/Button/Button'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import {LangSwitcher} from 'shared/ui/LandSwitcher/LangSwitcher'
import AboutUsIcon from 'shared/assets/icons/about_us.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticlesIcon from 'shared/assets/icons/articles.svg'
import {RoutePaths} from '../../../../shared/config/routesConfig/routesConfig'
import {ISidebarItem} from '../../model/types/sidebar'
import * as s from './Sidebar.module.scss'
import {SidebarItem} from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

const sidebarItems: ISidebarItem[] = [
  {
    name: 'About us',
    path: RoutePaths.about,
    Icon: AboutUsIcon,
  }, {
    name: 'Main',
    path: RoutePaths.main,
    Icon: MainIcon,
  },
]

export const Sidebar: FC<SidebarProps> = (props) => {
  const {className} = props
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  return (
    <div data-testid="sidebar" className={cls(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>
      <div className={s.links}>
        {sidebarItems.map((item: ISidebarItem) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
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
    </div>
  )
}
