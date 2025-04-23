import {memo, RefObject, useRef} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useInfiniteScroll} from 'shared/hooks/useInfiniteScroll'
import * as s from './Page.module.scss'

interface PageProps {
  className?: string
  children?: React.ReactNode
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const wrapperRef = useRef(null) as RefObject<HTMLElement | null>
  const triggerRef = useRef(null) as RefObject<HTMLElement | null>
  const {className, children, onScrollEnd} = props

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  })

  return (
    <section ref={wrapperRef} className={cls(s.Page, {}, [className])}>
      {children}
      {/* @ts-ignore */}
      {onScrollEnd && <div className={s.trigger} ref={triggerRef} />}
    </section>
  )
})
