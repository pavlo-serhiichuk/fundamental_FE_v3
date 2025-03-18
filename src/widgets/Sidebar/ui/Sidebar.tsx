import {type FC, useState} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {Button} from 'shared/ui/Button/Button'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import {LangSwitcher} from 'shared/ui/LandSwitcher/LangSwitcher'
import * as s from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  // const { t } = useTranslation()
  const {className} = props
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  return (
    <div data-testid="sidebar" className={cls(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>
      <div />
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
