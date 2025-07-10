import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import {
  StoreDecorator,
  ThemeDecoratorV2,
} from '@/shared/config/storybook/decorators/decorators'
import '@/app/styles/index.scss'
import { Tabs } from './Tabs'
import { AppRouteNames } from '@/shared/const/routers'

const args = {
  page: AppRouteNames.ARTICLES,
  onChangeTab: fn(),
  options: [
    { value: 'ALL', content: 'All' },
    { value: 'IT', content: 'IT' },
    { value: 'FICTION', content: 'Fiction' },
    { value: 'ECONOMICS', content: 'Economics' },
  ],
}

const meta = {
  title: 'entities/Filters/V2/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args,
  decorators: [StoreDecorator({ filters: { topicType: 'ALL' } })],
} as Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const PrimaryDark: Story = {
  decorators: [ThemeDecoratorV2('app_dark_theme')],
}
