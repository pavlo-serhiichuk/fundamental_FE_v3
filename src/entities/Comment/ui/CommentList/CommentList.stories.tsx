import {type Meta, type StoryObj} from '@storybook/react'
import {CommentList} from './CommentList'

const comments = [{
  id: '1',
  text: 'comment text',
  user: {
    id: '1',
    username: 'name of the user',
    age: 28,
    roles: ['ADMIN'],
    avatar: 'https://cdn.sortiraparis.com/images/80/98390/1014564-avatar-le-dernier-maitre-de-l-air-la-serie-netflix-en-live-action-devoile-sa-bande-annonce-finale.jpg',
  },
}, {
  id: '2',
  text: 'comment text 2',
  user: {
    id: '1',
    username: 'name of the user 2',
    age: 28,
    roles: ['USER'],
    avatar: 'https://cdn.sortiraparis.com/images/80/98390/1014564-avatar-le-dernier-maitre-de-l-air-la-serie-netflix-en-live-action-devoile-sa-bande-annonce-finale.jpg',
  },
}]

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  decorators: [],
} as Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    comments,
  },
}
export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
}
