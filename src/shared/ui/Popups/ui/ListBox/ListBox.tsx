import {ReactNode, useCallback} from 'react'
import {Listbox as HListBox} from '@headlessui/react'
import {Button} from 'shared/ui/Button/Button'
import {HStack} from 'shared/ui/Stack'
import {DropdownDirection, ListBoxDirection} from 'shared/types/ui'
import {cls} from 'shared/lib/cls/cls'
import ArrowDown from 'shared/assets/icons/arrowdown.svg'
import * as popupsCls from '../../styles/popups.module.scss'
import * as s from './ListBox.module.scss'
import {mapListBoxDirectionClass} from '../../styles/consts'

export interface ListBoxItem<T extends string> {
  value: T
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps<T extends string> {
  items?: ListBoxItem<T>[]
  className?: string
  value?: T
  defaultValue?: T | string
  onChange?: (value: T) => void
  readonly?: boolean
  direction?: ListBoxDirection
  label?: string
  testId?: string
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom',
    label,
    testId = 'testId',
  } = props

  const renderItem = useCallback((item: ListBoxItem<T>) => (
    <HListBox.Option
      className={s.item}
      key={item.value}
      value={item.value}
      disabled={item.disabled}
    >
      {({active, selected}) => (
        <li
          className={cls(s.item, {
            [popupsCls.active]: Boolean(active) || Boolean(selected),
            [popupsCls.disabled]: !!item.disabled,
          })}
        >
          {item.content}
        </li>
      )}
    </HListBox.Option>
  ), [])

  return (
    <HStack
      max
      gap="8"
      align="center"
      className={className}
      data-testid={`${testId}.ListBox`}
    >
      {label && (
        <div className={s.label}>{`${label}:`}</div>
      )}
      <HListBox
        as="div"
        value={value}
        onChange={onChange}
        className={cls(s.ListBox, {}, [])}
      >
        <HListBox.Button as="div" className={s.trigger}>
          <Button disabled={readonly} theme="bordered">
            <HStack
              align="center"
              justify="between"
              max
            >
              {value ?? defaultValue}
              <ArrowDown />
            </HStack>
          </Button>
        </HListBox.Button>
        <HListBox.Options className={cls(s.options, {}, [mapListBoxDirectionClass[direction]])}>
          {items?.map(renderItem)}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}
