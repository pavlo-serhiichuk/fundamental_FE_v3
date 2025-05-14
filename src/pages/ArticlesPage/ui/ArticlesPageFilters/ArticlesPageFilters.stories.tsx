import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {StoreDecorator, ThemeDecorator} from '@/shared/config/storybook/decorators/decorators'
import {ArticlesPageFilters} from './ArticlesPageFilters'
import '@/app/styles/index.scss'

const meta = {
  title: 'pages/ArticlesPage/ArticlesPageFilters',
  component: ArticlesPageFilters,
  tags: ['autodocs'],
  args: {onClick: fn()},
  decorators: [StoreDecorator({})],
} as Meta<typeof ArticlesPageFilters>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')],
}
