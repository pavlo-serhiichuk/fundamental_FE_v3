import { fn } from '@storybook/test'
import { type Meta, type StoryObj } from '@storybook/react'
import { profileMockState } from '@/entities/Profile'
import {
  StoreDecorator,
  ThemeDecoratorV2,
} from '@/shared/config/storybook/decorators/decorators'
import { ProfileCardEdit } from './ProfileCardEdit'

const meta = {
  title: 'features/ProfileCard/V2/ProfileCardEdit',
  component: ProfileCardEdit,
  args: {
    onClick: fn(),
  },
  decorators: [StoreDecorator({ profile: profileMockState })],
} as Meta<typeof ProfileCardEdit>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
  decorators: [ThemeDecoratorV2('app_light_theme')],
}

export const PrimaryDark: Story = {
  decorators: [ThemeDecoratorV2('app_dark_theme')],
}
