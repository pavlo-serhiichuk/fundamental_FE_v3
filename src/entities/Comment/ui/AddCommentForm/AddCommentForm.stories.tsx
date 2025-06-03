import { type Meta, type StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/decorators/decorators'
import AddCommentForm from './AddCommentForm'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'entities/Comment/AddCommentForm',
  component: AddCommentForm,
  decorators: [StoreDecorator({ user: { authData: {} } })],
} as Meta<typeof AddCommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
