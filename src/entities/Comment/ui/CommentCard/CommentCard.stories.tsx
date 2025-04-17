import {type Meta, type StoryObj} from '@storybook/react'
import {type Comment} from 'entities/Comment'
import {ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import {CommentCard} from './CommentCard'

const comment = {
  id: '1',
  text: 'comment text',
  user: {
    id: '1',
    name: 'name of the user',
    age: 28,
    role: 'ADMIN',
    avatar: 'https://cdn.sortiraparis.com/images/80/98390/1014564-avatar-le-dernier-maitre-de-l-air-la-serie-netflix-en-live-action-devoile-sa-bande-annonce-finale.jpg',
  },
} as Comment

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
} as Meta<typeof CommentCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    comment,
  },
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
  args: {
    comment,
  },
}

export const Green: Story = {
  decorators: [ThemeDecorator('green')],
  args: {
    comment,
  },
}
