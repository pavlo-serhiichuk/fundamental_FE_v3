import { ReactElement, useContext } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './MainLayout.module.scss'
import { CollapseContext } from '@/shared/lib/context/CollapseContext'

interface MainLayoutProps {
  className?: string
  header: ReactElement
  content: ReactElement
  sidebar: ReactElement
  toolbar?: ReactElement
}

export const MainLayout = (props: MainLayoutProps) => {
  const { className, header, content, sidebar, toolbar } = props
  const { collapsed = false } = useContext(CollapseContext)
  return (
    <div
      className={cls(s.MainLayout, { [s.collapsed]: collapsed }, [className])}
    >
      <div className={s.sidebar}>{sidebar}</div>
      <div className={s.content}>{content}</div>
      <div className={s.rightbar}>
        <div className={s.header}>{header}</div>
        <div className={s.toolbar}>{toolbar}</div>
      </div>
    </div>
  )
}
