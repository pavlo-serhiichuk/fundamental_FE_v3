import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {StoreDecorator, ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import {Header} from './Header'
import 'app/styles/index.scss'

const meta = {
  title: 'widget/Header',
  component: Header,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  args: {onClick: fn()},
} as Meta <typeof Header>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [StoreDecorator({})],
}

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator('dark'), StoreDecorator({})],
}

export const PrimarySignedIn: Story = {
  args: {},
  decorators: [StoreDecorator({user: {authData: {username: 'username', password: 'password'}}})],
}
