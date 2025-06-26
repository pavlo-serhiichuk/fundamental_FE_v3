import { type Meta, type StoryObj } from '@storybook/react'
import { ArticleEditPage } from './ArticleEditPage'

const meta = {
  title: 'features/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleEditPage>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}
