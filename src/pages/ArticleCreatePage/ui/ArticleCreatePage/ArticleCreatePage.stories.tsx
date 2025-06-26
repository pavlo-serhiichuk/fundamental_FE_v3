import { type Meta, type StoryObj } from '@storybook/react'
import { ArticleCreatePage } from './ArticleCreatePage'

const meta = {
  title: 'features/ArticleCreatePage',
  component: ArticleCreatePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleCreatePage>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}
