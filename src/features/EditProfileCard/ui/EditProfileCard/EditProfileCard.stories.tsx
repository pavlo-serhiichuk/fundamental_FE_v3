import {fn} from '@storybook/test'
import {type Meta, type StoryObj} from '@storybook/react'
import {profileMockState} from '@/entities/Profile/model/slice/profileState'
import {StoreDecorator, ThemeDecorator} from '@/shared/config/storybook/decorators/decorators'
import {EditProfileCard} from './EditProfileCard'

const meta = {
  title: 'features/EditProfileCard',
  component: EditProfileCard,
  args: {
    onClick: fn(),
  },
  decorators: [StoreDecorator({profile: profileMockState})],
} as Meta <typeof EditProfileCard>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {args: {}}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')],
}

export const Editable: Story = {
  args: {},
  decorators: StoreDecorator({profile: {...profileMockState, readonly: false}}),
}
