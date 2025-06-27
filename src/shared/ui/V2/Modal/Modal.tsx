import React, { FC, ReactNode } from 'react'
import { cls, Mods } from '@/shared/lib/cls/cls'
import { useModal } from '@/shared/hooks/useModal'
import { useTheme } from '@/shared/hooks/useTheme'
import * as s from './Modal.module.scss'
import { Portal } from '@/shared/ui/stationary/Portal/Portal'
import { Overlay } from '../../stationary/Overlay'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props

  const { isClosing, isMounted, close } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  })
  const { theme } = useTheme()
  const mods: Mods = {
    [s.opened]: Boolean(isOpen),
    [s.isClosing]: Boolean(isClosing),
  }

  if (!isMounted) {
    return null
  }

  return (
    <Portal container={document.getElementById('app-v2') || document.body}>
      <div className={cls(s.Modal, mods, [className, theme])}>
        <Overlay onClick={close} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  )
}
