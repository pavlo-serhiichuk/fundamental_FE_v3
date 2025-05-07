import {
  type KeyboardEvent, type MouseEvent, useCallback, useEffect,
} from 'react'

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
}

export function useModal(props: UseModalProps) {
  const {
    onClose,
    isOpen,
  } = props

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
  return {closeHandler, onKeyDown, onClickContent}
}
