import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {StoreDecorator, ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import 'app/styles/index.scss'
import {TopicType} from 'entities/Filters'
import {AppRouteNames} from 'shared/config/routesConfig/routesConfig'
import {Tabs} from './Tabs'

const args = {
  page: AppRouteNames.ARTICLES,
  onChangeTab: fn(),
}

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args,
  decorators: [StoreDecorator({filters: {topicType: 'ALL'}})],
} as Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')],
}
