import { type Meta, type StoryObj } from '@storybook/react'
import {
  StoreDecorator,
  ThemeDecorator,
} from '@/shared/config/storybook/decorators/decorators'
import { articlesListMockState } from '@/pages/ArticlesPage/module/slice/articlesPageState'
import { ListView } from '@/features/ChangeListView'
import ArticlesPage from './ArticlesPage'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  decorators: [StoreDecorator({ articlesPage: { ...articlesListMockState } })],
} as Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

export const PrimarySMALL: Story = {}
export const PrimarySMALLDark: Story = { decorators: [ThemeDecorator('dark')] }
export const PrimarySMALLGreen: Story = {
  decorators: [ThemeDecorator('green')],
}
export const PrimaryBIG: Story = {
  decorators: [
    StoreDecorator({
      articlesPage: { ...articlesListMockState },
      listView: { listView: ListView.BIG },
    }),
  ],
}
export const PrimaryBIGDark: Story = {
  decorators: [
    ThemeDecorator('dark'),
    StoreDecorator({
      articlesPage: { ...articlesListMockState },
      listView: { listView: ListView.BIG },
    }),
  ],
}
export const PrimaryBIGGreen: Story = {
  decorators: [
    ThemeDecorator('green'),
    StoreDecorator({
      articlesPage: { ...articlesListMockState },
      listView: { listView: ListView.BIG },
    }),
  ],
}
export const Loading: Story = {
  decorators: [
    StoreDecorator({
      articlesPage: { ...articlesListMockState, isLoading: true },
      listView: { listView: ListView.BIG },
    }),
  ],
}
