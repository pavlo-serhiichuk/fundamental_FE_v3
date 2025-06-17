import { memo } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './Overlay.module.scss'

interface OverlayProps {
  className?: string
  onClick?: () => void
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props

  return <div onClick={onClick} className={cls(s.Overlay, {}, [className])} />
})
