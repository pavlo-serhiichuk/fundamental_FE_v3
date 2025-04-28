import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {StoreDecorator, ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import {ArticlesFilters} from './ArticlesFilters'
import 'app/styles/index.scss'

const meta = {
  title: 'pages/ArticlesPage/ArticlesFilters',
  component: ArticlesFilters,
  tags: ['autodocs'],
  args: {onClick: fn()},
  decorators: [StoreDecorator({})],
} as Meta<typeof ArticlesFilters>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')],
}
