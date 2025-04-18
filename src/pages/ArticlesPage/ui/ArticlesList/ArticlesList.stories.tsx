import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import {ArticlesList} from './ArticlesList'
import 'app/styles/index.scss'

const meta = {
  title: 'common/ArticlesList',
  component: ArticlesList,
  tags: ['autodocs'],
  args: {onClick: fn()},
} as Meta<typeof ArticlesList>

export default meta
type Story = StoryObj<typeof meta>;

export const NoAuth: Story = {
  decorators: [],
}

export const NoAuthDark: Story = {
  decorators: [ThemeDecorator('dark')],
}
