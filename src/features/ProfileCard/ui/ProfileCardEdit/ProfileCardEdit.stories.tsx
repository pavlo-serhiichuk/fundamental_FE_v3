import { fn } from '@storybook/test'
import { type Meta, type StoryObj } from '@storybook/react'
import { profileMockState } from '@/entities/Profile'
import {
  StoreDecorator,
  ThemeDecorator,
} from '@/shared/config/storybook/decorators/decorators'
import { ProfileCardEdit } from './ProfileCardEdit'

const meta = {
  title: 'features/ProfileCard/ProfileCardEdit',
  component: ProfileCardEdit,
  args: {
    onClick: fn(),
  },
  decorators: [StoreDecorator({ profile: profileMockState })],
} as Meta<typeof ProfileCardEdit>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = { args: {} }

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('app_dark_theme')],
}

export const Editable: Story = {
  args: {},
  decorators: StoreDecorator({
    profile: { ...profileMockState, readonly: false },
  }),
}
