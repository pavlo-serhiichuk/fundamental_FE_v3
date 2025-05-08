import {fn} from '@storybook/test'
import {type Meta, type StoryObj} from '@storybook/react'
import {profileMockState} from '@/entities/Profile/model/slice/profileState'
import {StoreDecorator, ThemeDecorator} from '@/shared/config/storybook/decorators/decorators'
import {ProfileCard} from './ProfileCard'

const meta = {
  title: 'features/ProfileCard',
  component: ProfileCard,
  args: {
    onClick: fn(),
  },
  decorators: [StoreDecorator({profile: {...profileMockState}})],
} as Meta <typeof ProfileCard>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {args: {}}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')],
}
export const Loading: Story = {
  decorators: [StoreDecorator({profile: {...profileMockState, isLoading: true}})],
}
