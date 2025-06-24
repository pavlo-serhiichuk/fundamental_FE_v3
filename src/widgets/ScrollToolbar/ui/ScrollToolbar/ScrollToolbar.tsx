import { VStack } from '@/shared/ui/stationary/Stack'
import { ScrollToTopButton } from '@/features/ScrollToTopButton'
import * as s from './ScrollToolbar.module.scss'
import { cls } from '@/shared/lib/cls/cls'

interface ScrollToolbarProps {
  className?: string
}

export const ScrollToolbar = (props: ScrollToolbarProps) => {
  const { className } = props

  return (
    <VStack
      align="center"
      justify="center"
      className={cls(s.ScrollToolbar, {}, [className])}
      fullHeight
    >
      <ScrollToTopButton />
    </VStack>
  )
}
