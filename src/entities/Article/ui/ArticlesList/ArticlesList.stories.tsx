import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import 'app/styles/index.scss'
import {ListView} from 'features/ChangeListView'
import {mockArticle} from '../../model/mocks/mockArticle'
import {ArticlesList} from './ArticlesList'

const meta = {
  title: 'entities/Article/ArticlesList',
  component: ArticlesList,
  tags: ['autodocs'],
  args: {onClick: fn(), articles: [{...mockArticle, id: '1'}, {...mockArticle, id: '2'}, {...mockArticle, id: '3'}]},
} as Meta<typeof ArticlesList>

export default meta
type Story = StoryObj<typeof meta>;

export const PrimarySMALL: Story = {}
export const PrimarySMALLDark: Story = {decorators: [ThemeDecorator('dark')]}
export const PrimarySMALLGreen: Story = {decorators: [ThemeDecorator('green')]}
export const PrimaryBIG: Story = {args: {listView: ListView.BIG}}
export const PrimaryBIGDark: Story = {args: {listView: ListView.BIG}, decorators: [ThemeDecorator('dark')]}
export const PrimaryBIGGreen: Story = {args: {listView: ListView.BIG}, decorators: [ThemeDecorator('green')]}
export const Loading: Story = {args: {isLoading: true}}
