import { fn } from '@storybook/test'
import { type Meta, type StoryObj } from '@storybook/react'
import { profileMockState } from '@/entities/Profile/model/slice/profileState'
import {
  StoreDecorator,
  ThemeDecorator,
} from '@/shared/config/storybook/decorators/decorators'
import { ProfileCardView } from './ProfileCardView'

const meta = {
  title: 'features/ProfileCard/ProfileCardView',
  component: ProfileCardView,
  args: {
    onClick: fn(),
  },
  decorators: [StoreDecorator({ profile: { ...profileMockState } })],
} as Meta<typeof ProfileCardView>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = { args: {} }

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')],
}
export const Loading: Story = {
  decorators: [
    StoreDecorator({ profile: { ...profileMockState, isLoading: true } }),
  ],
}
