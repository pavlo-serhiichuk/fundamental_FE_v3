import React, {
  RefObject, useCallback, useEffect, useRef, useState,
} from 'react'

interface UseModalProps {
  onClose?: () => void
  isOpen: boolean | undefined
  lazy?: boolean | undefined
  animationDelay: number
}

export function useModal(props: UseModalProps) {
  const {
    onClose,
    isOpen,
    animationDelay,
  } = props
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null) as RefObject<ReturnType<typeof setTimeout>>

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
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
