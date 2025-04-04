import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {StoreDecorator, ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import {SignInForm} from './SignInForm'
import 'app/styles/index.scss'
import {getSignInInitialState} from 'features/SignIn/module/slice/getSignInInitialState'

const meta = {
  title: 'features/SignInForm',
  component: SignInForm,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  args: {onClick: fn()},
} as Meta <typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
  decorators: [StoreDecorator({signIn: getSignInInitialState(true)})],
}

export const WithError: Story = {
  args: {
  },
  decorators: [StoreDecorator({signIn: getSignInInitialState(true, true)})],
}

export const PrimaryDark: Story = {
  args: {
  },
  decorators: [ThemeDecorator('dark'), StoreDecorator({signIn: getSignInInitialState(true)})],
}
