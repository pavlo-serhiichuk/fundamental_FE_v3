import { type Meta, type StoryObj } from '@storybook/react'
import ArticlesPage from './ArticlesPage'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  decorators: []
} as Meta<typeof ArticlesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
