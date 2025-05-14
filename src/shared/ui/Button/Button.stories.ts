import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {ThemeDecorator} from '@/shared/config/storybook/decorators/decorators'
import {Button} from './Button'
import '@/app/styles/index.scss'

const meta = {
  title: 'shared/Button',
  component: Button,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  args: {onClick: fn()},
} as Meta <typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
    theme: 'default',
  },
}

export const DefaultDark: Story = {
  args: {
    children: 'Default dark',
    theme: 'default',
  },
  decorators: [ThemeDecorator('dark')],
}

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: 'clear',
  },
}

export const ClearDark: Story = {
  args: {
    children: 'Clear dark',
    theme: 'clear',
  },
  decorators: [ThemeDecorator('dark')],
}

export const SidebarSquad: Story = {
  args: {
    children: '>',
    theme: 'sidebar-squad-m',
  },
}

export const SidebarSquadDark: Story = {
  args: {
    children: '<',
    theme: 'sidebar-squad-m',
  },
  decorators: [ThemeDecorator('dark')],
}
