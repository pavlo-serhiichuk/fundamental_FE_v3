import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {StoreDecorator, ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import {ArticlesListItem} from './ArticlesListItem'
import 'app/styles/index.scss'
import {articlesListMockState} from 'pages/ArticlesPage/module/slice/articlesPageState'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articlesPageTypes'
import {getArticleDetailsMockState} from 'pages/ArticleDetailsPage/model/slice/articleState'

const meta = {
  title: 'pages/ArticlesPage/ArticlesListItem',
  component: ArticlesListItem,
  tags: ['autodocs'],
  args: {onClick: fn(), article: getArticleDetailsMockState().data},
  decorators: [StoreDecorator({articlesPage: {...articlesListMockState}})],
} as Meta<typeof ArticlesListItem>

export default meta
type Story = StoryObj<typeof meta>;

export const PrimarySMALL: Story = {}
export const PrimarySMALLDark: Story = {decorators: [ThemeDecorator('dark')]}
export const PrimarySMALLGreen: Story = {decorators: [ThemeDecorator('green')]}
export const PrimaryBIG: Story = {decorators: [StoreDecorator({articlesPage: {...articlesListMockState, articlesView: ArticlesView.BIG}})]}
export const PrimaryBIGDark: Story = {decorators: [ThemeDecorator('dark'), StoreDecorator({articlesPage: {...articlesListMockState, articlesView: ArticlesView.BIG}})]}
export const PrimaryBIGGreen: Story = {decorators: [ThemeDecorator('green'), StoreDecorator({articlesPage: {...articlesListMockState, articlesView: ArticlesView.BIG}})]}
