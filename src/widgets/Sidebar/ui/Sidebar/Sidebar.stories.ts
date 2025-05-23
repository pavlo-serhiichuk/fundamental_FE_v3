import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {StoreDecorator, ThemeDecorator} from '@/shared/config/storybook/decorators/decorators'
import {Sidebar} from './Sidebar'
import '@/app/styles/index.scss'

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  args: {onClick: fn()},
} as Meta <typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>;

export const NoAuth: Story = {
  decorators: [StoreDecorator({})],
}

export const NoAuthDark: Story = {
  decorators: [ThemeDecorator('dark'), StoreDecorator({})],
}

export const Auth: Story = {
  decorators: [StoreDecorator({user: {authData: {}}})],
}
