import {RefObject, useCallback, useRef} from 'react'

/**
 * Hook that allows to cancel prev function call while delay won't finish
 * @param callback
 * @param delay - delay in ms
 * */

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const timer = useRef(0) as RefObject<any>
  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay])
}
