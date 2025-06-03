import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/decorators'
import { AppLink } from './AppLink'
import '@/app/styles/index.scss'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} as Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
}

export const PrimaryDark: Story = {
  args: {
    children: 'Primary',
  },
  decorators: [ThemeDecorator('dark')],
}
