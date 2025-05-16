import {
  memo, ReactNode, RefObject, useRef,
} from 'react'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {cls} from '@/shared/lib/cls/cls'
import {useInfiniteScroll} from '@/shared/hooks/useInfiniteScroll'
import {useThrottle} from '@/shared/hooks/useThrottle'
import {getScrollRecoverScroll, scrollRecoverActions} from '@/features/ScrollRecover'
import {useInitialEffect} from '@/shared/hooks/useInitialEffect'
import {useAppDispatch} from '@/shared/hooks/useAppDispatch'
import {TestProps} from '@/shared/types/tests'
import * as s from './Page.module.scss'

interface PageProps extends TestProps {
  className?: string
  children?: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const dispatch = useAppDispatch()
  const scroll = useSelector(getScrollRecoverScroll)
  const {pathname} = useLocation()
  const wrapperRef = useRef(null) as RefObject<HTMLElement | null>
  const triggerRef = useRef(null) as RefObject<HTMLElement | null>
  const {
    className,
    children,
    onScrollEnd,
    ...otherProps
  } = props

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
    <main
      onScroll={onScroll}
      ref={wrapperRef}
      className={cls(s.Page, {}, [className])}
      data-testid={props['data-testid']}
    >
      {children}
      {/* @ts-ignore */}
      {onScrollEnd && <div className={s.trigger} ref={triggerRef} />}
    </main>
  )
})
