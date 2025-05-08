import {memo, RefObject, useRef} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {useInfiniteScroll} from '@/shared/hooks/useInfiniteScroll'
import {useThrottle} from '@/shared/hooks/useThrottle'
import {getScrollRecoverScroll} from '@/features/ScrollRecover/module/selectors/getScrollRecoverScroll'
import {useSelector} from 'react-redux'
import {useInitialEffect} from '@/shared/hooks/useInitialEffect'
import {scrollRecoverActions} from '@/features/ScrollRecover'
import {useLocation} from 'react-router-dom'
import {useAppDispatch} from '@/shared/hooks/useAppDispatch'
import * as s from './Page.module.scss'

interface PageProps {
  className?: string
  children?: React.ReactNode
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const dispatch = useAppDispatch()
  const scroll = useSelector(getScrollRecoverScroll)
  const {pathname} = useLocation()
  const wrapperRef = useRef(null) as RefObject<HTMLElement | null>
  const triggerRef = useRef(null) as RefObject<HTMLElement | null>
  const {className, children, onScrollEnd} = props

  useInitialEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = scroll[pathname]
    }
  })

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  })

  const onScroll = useThrottle((e) => {
    dispatch(scrollRecoverActions.setScroll({path: pathname, position: e.currentTarget.scrollTop}))
  }, 500)

  return (
    <main onScroll={onScroll} ref={wrapperRef} className={cls(s.Page, {}, [className])}>
      {children}
      {/* @ts-ignore */}
      {onScrollEnd && <div className={s.trigger} ref={triggerRef} />}
    </main>
  )
})
