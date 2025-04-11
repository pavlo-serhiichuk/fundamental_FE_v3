import {
  type FC, type ReactNode, type KeyboardEvent, type MouseEvent, useEffect, useCallback, Children,
} from 'react'
import {cls, Mods} from 'shared/lib/cls/cls'
import {Portal} from 'shared/ui/Portal/Portal'
import {useTheme} from 'shared/hooks/useTheme'
import * as s from './Modal.module.scss'

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className, children, isOpen, onClose,
  } = props
  const {theme} = useTheme()
  const mods: Mods = {[s.opened]: isOpen}

  const closeHandler = useCallback(() => {
    onClose?.()
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener<any>('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener<any>('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const onClickContent = (e: MouseEvent) => {
    e?.stopPropagation()
  }

  if (!isOpen) {
    return null
  }

  return (
    <Portal>
      <div className={cls(s.Modal, mods, [className, theme, 'app_modal'])}>
        <div onClick={closeHandler} className={s.overlay}>
          <div className={s.content} onClick={onClickContent}>
            {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
            {Children.only(<>{children}</>)}
          </div>
        </div>
      </div>
    </Portal>
  )
}
