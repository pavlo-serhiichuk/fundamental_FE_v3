import { ReactNode, memo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Popover as LibPopover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import { DropdownDirection } from '@/shared/types/ui'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './Popover.module.scss'
import * as popupsCls from '../../styles/popups.module.scss'
import { mapDropdownDirectionClass } from '../../styles/consts'

interface PopoverProps {
  className?: string
  trigger: ReactNode
  direction?: DropdownDirection
  children: ReactNode
}

export const Popover = memo((props: PopoverProps) => {
  const { className, trigger, direction = 'bottom right', children } = props
  const { t } = useTranslation()

  const menuClasses = [mapDropdownDirectionClass[direction]]

  return (
    <LibPopover className={cls(s.Popover, {}, [className, popupsCls.popup])}>
      <PopoverButton as="div" className={popupsCls.trigger}>
        {trigger}
      </PopoverButton>
      <PopoverPanel className={cls(s.panel, {}, menuClasses)}>
        {children}
      </PopoverPanel>
    </LibPopover>
  )
})
