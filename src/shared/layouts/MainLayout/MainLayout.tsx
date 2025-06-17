import { useTranslation } from 'react-i18next'
import { ReactElement } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './MainLayout.module.scss'

interface MainLayoutProps {
  className?: string
  header: ReactElement
  content: ReactElement
  sidebar: ReactElement
  toolbar?: ReactElement
}

export const MainLayout = (props: MainLayoutProps) => {
  const { className, header, content, sidebar, toolbar } = props
  const { t } = useTranslation()
  return (
    <div className={cls(s.MainLayout, {}, [className])}>
      <div className={s.sidebar}>{sidebar}</div>
      <div className={s.content}>{content}</div>
      <div className={s.rightbar}>
        <div className={s.header}>{header}</div>
        <div className={s.toolbar}>{toolbar}</div>
      </div>
    </div>
  )
}
