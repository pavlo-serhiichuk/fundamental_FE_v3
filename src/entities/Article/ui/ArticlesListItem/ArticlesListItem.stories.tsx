import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import {
  ThemeDecorator,
  ThemeDecoratorV2,
} from '@/shared/config/storybook/decorators/decorators'
import '@/app/styles/index.scss'
import { ListView } from '@/features/ChangeListView'
import { ArticlesListItem } from './ArticlesListItem'
import { mockArticle } from '../../model/mocks/mockArticle'

const meta = {
  title: 'entities/Article/ArticlesListItem',
  component: ArticlesListItem,
  tags: ['autodocs'],
  args: { onClick: fn(), article: mockArticle, listView: ListView.SMALL },
} as Meta<typeof ArticlesListItem>

export default meta
type Story = StoryObj<typeof meta>

export const PrimarySMALL: Story = {}
export const PrimarySMALLDark: Story = {
  decorators: [ThemeDecorator('app_dark_theme')],
}
export const PrimarySMALLGreen: Story = {
  decorators: [ThemeDecorator('app_green_theme')],
}
export const PrimaryBIG: Story = { args: { listView: ListView.BIG } }
export const PrimaryBIGDark: Story = {
  args: { listView: ListView.BIG },
  decorators: [ThemeDecorator('app_dark_theme')],
}
export const PrimaryBIGGreen: Story = {
  args: { listView: ListView.BIG },
  decorators: [ThemeDecorator('app_green_theme')],
}
export const PrimarySMALLV2: Story = {
  decorators: [ThemeDecoratorV2('app_light_theme')],
}

export const PrimarySMALLDarkV2: Story = {
  decorators: [ThemeDecoratorV2('app_dark_theme')],
}
