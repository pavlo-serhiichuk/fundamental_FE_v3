import {Menu} from '@headlessui/react'
import {Fragment, ReactNode} from 'react'
import {DropdownDirection} from 'shared/types/ui'
import {cls} from 'shared/lib/cls/cls'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import * as popupsCls from '../../styles/popups.module.scss'
import * as s from './Dropdown.module.scss'
import {mapDropdownDirectionClass} from '../../styles/consts'

interface DropdownItem {
  disabled?: boolean
  content?: ReactNode,
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropdownDirection
}

export const Dropdown = (props: DropdownProps) => {
  const {
    className,
    trigger,
    items,
    direction = 'bottom left',
  } = props
  return (
    <Menu
      as="div"
      className={cls('', {}, [className, popupsCls.popup])}
    >
      <Menu.Button as="div" className={popupsCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={cls(s.menu, {}, [mapDropdownDirectionClass[direction]])}>
        {items.map((item: any, i) => {
          const content = ({active}: { active: boolean }) => (
            <li
              onClick={item.onClick}
              className={cls(s.item, {[popupsCls.active]: active})}
            >
              {item.content}
            </li>
          )

          return (
            <Menu.Item
              key={i}
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
