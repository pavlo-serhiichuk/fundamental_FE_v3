import {
  type FC, type ReactNode, type KeyboardEvent, type MouseEvent, useEffect, useCallback, Children,
} from 'react'
import {cls, Mods} from 'shared/lib/cls/cls'
import {useTheme} from 'shared/hooks/useTheme'
import {useModal} from 'shared/hooks/useModal'
import {Portal} from '../Portal/Portal'
import * as s from './Drawer.module.scss'

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose?: () => void
}

export const Drawer: FC<ModalProps> = (props) => {
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
      <div className={cls(s.Drawer, mods, [className, theme, 'app_drawer'])}>
        <div onClick={closeHandler} className={s.overlay}>
          <div className={s.content} onClick={onClickContent}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
