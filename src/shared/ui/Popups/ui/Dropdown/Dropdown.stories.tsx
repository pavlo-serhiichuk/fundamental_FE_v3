import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {Dropdown} from './Dropdown'
import 'app/styles/index.scss'
import {Button} from 'shared/ui/Button/Button'

const items = [
  {value: '123', content: 'content value'},
  {value: '123', content: 'content value'},
  {value: '123', content: 'content value'},
]

const meta = {
  title: 'shared/Popups/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  args: {onClick: fn()},
} as Meta <typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>;

const TopRight: Story = {
  args: {
    direction: 'top right',
    value: '...',
    items,
  },
}

export const Primary: Story = {
  args: {
    trigger: <Button>Trigger</Button>,
    direction: 'bottom left',
    items: [
      {value: '123', content: 'content value'},
      {value: '123', content: 'content value'},
      {value: '123', content: 'content value'},
    ],
  },
}
