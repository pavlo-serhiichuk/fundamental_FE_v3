import {
  memo, ReactNode, useCallback, useEffect,
} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTheme} from 'shared/hooks/useTheme'
import {useModal} from 'shared/hooks/useModal'
import {useDrag} from '@use-gesture/react'
import {a, useSpring, config} from '@react-spring/web'
import {Portal} from '../Portal/Portal'
import * as s from './Drawer.module.scss'
import {Overlay} from '../Overlay'

interface DrawerProps {
  className?: string;
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const height = window.innerHeight - 100

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props
  const {isClosing, isMounted, close} = useModal({animationDelay: 300, onClose, isOpen})
  const {theme} = useTheme()

  // const {Gesture, Spring} = useAnimationLibs()
  const [{y}, api] = useSpring(() => ({y: height}))

  const openDrawer = useCallback(() => {
    api.start({y: 0, immediate: false})
  }, [api])

  useEffect(() => {
    if (isOpen) openDrawer()
  }, [api, isOpen, openDrawer])

  const closeDrawer = (velocity = 0) => {
    api.start({
      y: height, immediate: false, config: {...config.stiff, velocity}, onResolve: onClose,
    })
  }
  const bind = useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel()

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          closeDrawer()
        } else {
          openDrawer()
        }
      } else {
        api.start({y: my, immediate: true})
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: {top: 0}, rubberband: true,
    },
  )

  if (lazy && !isMounted) {
    return null
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
    <Portal>
      <div className={cls(s.Drawer, {
        [s.opened]: Boolean(isOpen),
        [s.isClosing]: Boolean(isClosing),
      }, [theme, className, 'app_drawer'])}
      >
        <Overlay onClick={close} />
        {/* @ts-ignore */}
        <a.div
          className={s.sheet}
          style={{display, bottom: `calc(100vh - ${height + 390}px`, y}}
          {...bind()}
        >
          {children}
        </a.div>
      </div>
    </Portal>
  )
})

// const DrawerAsync = (props: DrawerProps) => {
//   const {isLoaded} = useAnimationLibs()
//
//   if (!isLoaded) {
//     return null
//   }
//
//   return <DrawerContent {...props} />
// }
//
// export const Drawer = (props: DrawerProps) => (
//   <AnimationProvider>
//     <DrawerAsync {...props} />
//   </AnimationProvider>
// )
