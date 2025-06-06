import { RefObject, useRef } from 'react'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect'

export interface UseInfiniteScrollOptions {
  callback?: () => void
  wrapperRef: RefObject<HTMLElement | null>
  triggerRef: RefObject<HTMLElement | null>
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfiniteScrollOptions) => {
  const observer = useRef<IntersectionObserver | null>(null)
  useInitialEffect(() => {
    const wrapperElement = wrapperRef?.current
    const triggerElement = triggerRef?.current

    if (callback && triggerElement) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      }
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)

      observer.current.observe(triggerElement)
    }

    return () => {
      if (observer.current && triggerElement) {
        observer.current.unobserve(triggerElement)
      }
    }
  }, [triggerRef, wrapperRef, callback])
}
