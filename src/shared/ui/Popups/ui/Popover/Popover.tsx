import {FC, ReactNode, memo} from 'react'
import {useTranslation} from 'react-i18next'
import {Popover as HPopover} from '@headlessui/react'
import {DropdownDirection} from 'shared/types/ui'
import {cls} from 'shared/lib/cls/cls'
import s from './Popover.module.scss'
import popupsCls from '../../styles/popups.module.scss'
import {mapDropdownDirectionClass} from '../../styles/consts'

interface PopoverProps {
  className?: string;
  trigger: ReactNode
  direction?: DropdownDirection
  children: ReactNode
}

export const Popover: FC<PopoverProps> = memo((props) => {
  const {
    className,
    trigger,
    direction = 'bottom right',
    children,
  } = props
  const {t} = useTranslation()

  const menuClasses = [mapDropdownDirectionClass[direction]]

  return (
    <HPopover className={cls(s.Popover, {}, [className, popupsCls.popup])}>
      <HPopover.Button as="div" className={popupsCls.trigger}>
        {trigger}
      </HPopover.Button>
      <HPopover.Panel className={cls(s.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  )
})
