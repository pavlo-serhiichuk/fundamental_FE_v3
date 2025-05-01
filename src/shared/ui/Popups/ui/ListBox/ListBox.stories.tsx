import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {ListBox} from './ListBox'
import 'app/styles/index.scss'
import * as s from './ListBox.module.scss'

const items = [
  {value: '1', content: 'content value'},
  {value: '2', content: 'content value'},
  {value: '3', content: 'content value'},
]

const meta = {
  title: 'shared/Popups/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  args: {onClick: fn()},
} as Meta <typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    direction: 'top',
    defaultValue: 'Select value...',
    label: 'Label name',
    items,
    className: s.storiesClass,
  },
}

export const Bottom: Story = {
  args: {
    defaultValue: 'Select value...',
    label: 'Label name',
    items,
    className: s.storiesClass,
  },
}
