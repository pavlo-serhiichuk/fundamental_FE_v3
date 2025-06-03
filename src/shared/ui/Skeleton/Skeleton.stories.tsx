import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ThemeDecorator } from '@/shared/config/storybook/decorators/decorators'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => {
      alert('double')
    }),
  },
} as Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    width: 400,
    height: 40,
  },
}

export const PrimaryDark: Story = {
  args: {
    width: 400,
    height: 40,
  },
  decorators: [ThemeDecorator('dark')],
}

export const PrimaryGreen: Story = {
  args: {
    width: 400,
    height: 40,
  },
  decorators: [ThemeDecorator('green')],
}

export const Circle: Story = {
  args: {
    width: 140,
    height: 140,
    radius: 140,
  },
}
