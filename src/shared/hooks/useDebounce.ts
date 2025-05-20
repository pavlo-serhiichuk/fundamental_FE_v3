import {useCallback, useRef} from 'react'

/**
 * Hook that allows to cancel prev function call while delay won't finish
 * @param callback
 * @param delay - delay in ms
 */
export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const timer = useRef<number | null>(null)

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = window.setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay])
}
