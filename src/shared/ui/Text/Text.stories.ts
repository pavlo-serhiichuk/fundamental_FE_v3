import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {ThemeDecorator} from '@/shared/config/storybook/decorators/decorators'
import {Text} from './Text'
import '@/app/styles/index.scss'

const meta = {
  title: 'shared/Text',
  component: Text,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  args: {onClick: fn()},
} as Meta <typeof Text>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Primary text',
    title: 'Primary title',
  },
}

export const PrimaryDark: Story = {
  args: {
    text: 'Primary text',
    title: 'Primary title',
  },
  decorators: [ThemeDecorator('dark')],
}

export const OnlyTitle: Story = {
  args: {
    title: 'Primary title',
  },
}

export const OnlyTitleDark: Story = {
  args: {
    title: 'Primary title',
  },
  decorators: [ThemeDecorator('dark')],
}
export const OnlyText: Story = {
  args: {
    text: 'Primary text',
  },
}

export const OnlyTextDark: Story = {
  args: {
    text: 'Primary text',
  },
  decorators: [ThemeDecorator('dark')],
}
