import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import {
  StoreDecorator,
  ThemeDecorator,
} from '@/shared/config/storybook/decorators/decorators'
import { ThemeSwitcher } from './ThemeSwitcher'
import '@/app/styles/index.scss'

const meta = {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} as Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { decorators: [StoreDecorator({})] }

export const PrimaryDark: Story = {
  decorators: [StoreDecorator({}), ThemeDecorator('app_dark_theme')],
}

export const PrimaryV2: Story = {
  args: {
    isV2InStorybook: true,
  },
  decorators: [StoreDecorator({})],
}

export const PrimaryDarkV2: Story = {
  args: {
    isV2InStorybook: true,
  },
  decorators: [StoreDecorator({}), ThemeDecorator('app_dark_theme')],
}
