import { ReactElement, useContext } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './ContentStickyLayout.module.scss'
import { CollapseContext } from '@/shared/lib/context/CollapseContext'

interface ContentStickyLayoutProps {
  className?: string
  left?: ReactElement
  content: ReactElement
  right?: ReactElement
}

export const ContentStickyLayout = (props: ContentStickyLayoutProps) => {
  const { className, right, left, content } = props
  const { collapsed } = useContext(CollapseContext)
  return (
    <div
      className={cls(
        s.ContentStickyLayout,
        { [s.collapsed]: Boolean(collapsed) },
        // {},
        [className],
      )}
    >
      {left && <div className={s.left}>{left}</div>}
      <div className={s.content}>{content}</div>
      {right && <div className={s.right}>{right}</div>}
    </div>
  )
}
