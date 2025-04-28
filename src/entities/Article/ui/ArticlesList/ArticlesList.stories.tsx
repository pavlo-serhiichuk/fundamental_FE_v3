import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {StoreDecorator, ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import {ArticlesList} from './ArticlesList'
import 'app/styles/index.scss'
import {articlesListMockState} from 'pages/ArticlesPage/module/slice/articlesPageState'
import {ArticlesView} from 'pages/ArticlesPage/module/types/articlesPageTypes'
import {ListView} from 'features/ChangeListView'

const meta = {
  title: 'pages/ArticlesPage/ArticlesList',
  component: ArticlesList,
  tags: ['autodocs'],
  args: {onClick: fn()},
  decorators: [StoreDecorator({articlesPage: {...articlesListMockState}})],
} as Meta<typeof ArticlesList>

export default meta
type Story = StoryObj<typeof meta>;

export const PrimarySMALL: Story = {}
export const PrimarySMALLDark: Story = {decorators: [ThemeDecorator('dark')]}
export const PrimarySMALLGreen: Story = {decorators: [ThemeDecorator('green')]}
export const PrimaryBIG: Story = {decorators: [StoreDecorator({articlesPage: {...articlesListMockState}, listView: {listView: ListView.BIG}})]}
export const PrimaryBIGDark: Story = {decorators: [ThemeDecorator('dark'), StoreDecorator({articlesPage: {...articlesListMockState}, listView: {listView: ListView.BIG}})]}
export const PrimaryBIGGreen: Story = {decorators: [ThemeDecorator('green'), StoreDecorator({articlesPage: {...articlesListMockState}, listView: {listView: ListView.BIG}})]}
export const Loading: Story = {decorators: [StoreDecorator({articlesPage: {...articlesListMockState, isLoading: true}, listView: {listView: ListView.BIG}})]}
