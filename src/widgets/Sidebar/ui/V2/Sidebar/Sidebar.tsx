import { memo, useContext } from 'react'
import { useSelector } from 'react-redux'
import { VStack } from '@/shared/ui/stationary/Stack'
import { cls } from '@/shared/lib/cls/cls'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LandSwitcher'
import { ISidebarItem } from '../../../model/types/sidebar'
import * as s from './Sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { getSidebarItems } from '../../../model/selectors/getSidebarItems'
import { AppLogo } from '@/shared/ui/V2/AppLogo/AppLogo'
import { Button } from '@/shared/ui/V2/Button'
import ArrowIcon from '@/shared/assets/icons/arrowdown.svg'
import { Icon } from '@/shared/ui/V2/Icon'
import { CollapseContext } from '@/shared/lib/context/CollapseContext'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props
  const { collapsed = false, setCollapsed } = useContext(CollapseContext)
  const sidebarItems = useSelector(getSidebarItems)

  const onToggle = () => {
    setCollapsed?.(!collapsed)
  }

  return (
    <aside className={s.SidebarWrapper}>
      <div
        data-testid="sidebar"
        className={cls(s.Sidebar, { [s.collapsed]: collapsed }, [className])}
      >
        <VStack>
          <AppLogo
            withTitle={!collapsed}
            className={cls(s.appLogo, { [s.appLogoCollapsed]: collapsed }, [])}
          />
          <VStack>
            {sidebarItems.map((item: ISidebarItem) => (
              <SidebarItem key={item.path} item={item} collapsed={collapsed} />
            ))}
          </VStack>
        </VStack>
        <div
          className={cls(s.switchers, { [s.switchersCollapsed]: collapsed })}
        >
          <ThemeSwitcher />
          <LangSwitcher className={s.sidebarLang} />
        </div>
        <Button
          data-testid="sidebar-toggle"
          theme="clear"
          className={cls(s.collapseBtn, { [s.btnIsCollapsed]: collapsed })}
          onClick={onToggle}
        >
          <Icon Svg={ArrowIcon} width={40} height={40} />
        </Button>
      </div>
    </aside>
  )
})
