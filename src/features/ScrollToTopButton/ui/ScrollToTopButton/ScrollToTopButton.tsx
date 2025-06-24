import { Icon } from '@/shared/ui/V2/Icon'
import ArrowIcon from '@/shared/assets/icons/arrow-black-up-with-line.svg'

interface ScrollToTopButtonProps {
  className?: string
}

export const ScrollToTopButton = (props: ScrollToTopButtonProps) => {
  const onClick = () => {
    console.log('click')
    // @ts-ignore
    // document.getElementById('root').scrollTo({ top: 0, behavior: 'smooth' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <Icon Svg={ArrowIcon} width={25} height={25} onClick={onClick} />
}
