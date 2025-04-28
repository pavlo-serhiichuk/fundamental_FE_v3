import {type Meta, type StoryObj} from '@storybook/react'
import {StoreDecorator} from 'shared/config/storybook/decorators/decorators'
import {ArticleDetailsSchema} from 'features/ArticleDetails/model/types/ArticleDetailsSchema'
import {getArticleDetailsMockState} from 'features/ArticleDetails/model/slice/articleState'
import {ArticleDetails} from './ArticleDetails'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const mockData: ArticleDetailsSchema = getArticleDetailsMockState(false)

const meta = {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  decorators: [StoreDecorator({articleDetailsPage: {details: mockData}})],
} as Meta<typeof ArticleDetails>

export default meta
type Story = StoryObj<typeof meta>

export const WithData: Story = {}

export const IsLoading: Story = {
  decorators: [StoreDecorator({articleDetailsPage: {details: {isLoading: true}}})],
}

export const Error: Story = {
  decorators: [StoreDecorator({articleDetailsPage: {details: {error: 'serverError'}}})],
}
