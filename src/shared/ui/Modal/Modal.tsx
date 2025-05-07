import React, {FC, ReactNode} from 'react'
import {cls, Mods} from 'shared/lib/cls/cls'
import {useModal} from 'shared/hooks/useModal'
import {useTheme} from 'shared/hooks/useTheme'
import * as s from './Modal.module.scss'
import {Portal} from '../Portal/Portal'
import {Overlay} from '../Overlay'

interface ModalProps {
  className?: string;
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props

  const {
    isClosing,
    isMounted,
    close,
  } = useModal({
    animationDelay: 300, onClose, isOpen,
  })
  const {theme} = useTheme()
  const mods: Mods = {
    [s.opened]: Boolean(isOpen),
    [s.isClosing]: Boolean(isClosing),
  }

  if (!isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={cls(s.Modal, mods, [className, 'app_modal', theme])}>
        <Overlay onClick={close} />
        <div className={s.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
}
