import {type Meta, type StoryObj} from '@storybook/react'
import {StoreDecorator, ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import {getArticleDetailsMockState} from 'features/ArticleDetails/model/slice/articleState'
import {ArticleDetailsSchema} from 'features/ArticleDetails'
import ArticleDetailsPage from './ArticleDetailsPage'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const mockData: ArticleDetailsSchema = getArticleDetailsMockState()
const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  decorators: [StoreDecorator({articleDetailsPage: {details: mockData}})],
} as Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Dark: Story = {
  decorators: ThemeDecorator('dark'),
}
