import {type Meta, type StoryObj} from '@storybook/react'
import {StoreDecorator, ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import {ArticleDetailsSchema} from 'pages/ArticleDetailsPage'
import ArticleDetailsPage from './ArticleDetailsPage'
import {getArticleDetailsMockState} from '../../model/slice/articleState'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const mockData: ArticleDetailsSchema = getArticleDetailsMockState()
const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  decorators: [StoreDecorator({articleDetails: mockData})],
} as Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Dark: Story = {
  decorators: ThemeDecorator('dark'),
}
