import {
  type FC, type ReactNode, type KeyboardEvent, type MouseEvent, useEffect, useCallback, Children,
} from 'react'
import {cls, Mods} from 'shared/lib/cls/cls'
import {Portal} from 'shared/ui/Portal/Portal'
import {useTheme} from 'shared/hooks/useTheme'
import {useModal} from 'shared/hooks/useModal'
import * as s from './Modal.module.scss'

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props
  const {closeHandler, onClickContent} = useModal({isOpen, onClose})
  const {theme} = useTheme()
  const mods: Mods = {[s.opened]: isOpen}

  if (!isOpen) {
    return null
  }

  return (
    <Portal>
      <div className={cls(s.Modal, mods, [className, theme, 'app_modal'])}>
        <div onClick={closeHandler} className={s.overlay}>
          <div className={s.content} onClick={onClickContent}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
