import React, {
  RefObject, useCallback, useEffect, useRef, useState,
} from 'react'

interface UseModalProps {
  isOpen: boolean | undefined
  lazy?: boolean | undefined
  animationDelay: number
  onClose?: () => void
}

/**
 * Reusable hook for modal components (modal/drawer)
 * @param isOpen
 * @param lazy
 * @param animationDelay
 * @param onClose
 */

export function useModal(props: UseModalProps) {
  const {
    onClose,
    isOpen,
    animationDelay,
  } = props
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = window.setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [animationDelay, onClose])

  const onKeydown: any = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      close()
    }
  }, [close])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydown)
    }

    return () => {
      // @ts-ignore
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeydown)
    }
  }, [isOpen, onKeydown])

  return {
    isClosing,
    isMounted,
    close,
  }
}
