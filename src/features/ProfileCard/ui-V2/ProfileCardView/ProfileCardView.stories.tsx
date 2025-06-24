import { fn } from '@storybook/test'
import { type Meta, type StoryObj } from '@storybook/react'
import { profileMockState } from '@/entities/Profile'
import {
  StoreDecorator,
  ThemeDecoratorV2,
} from '@/shared/config/storybook/decorators/decorators'
import { ProfileCardView } from './ProfileCardView'

const meta = {
  title: 'features/ProfileCard/V2/ProfileCardView',
  component: ProfileCardView,
  args: {
    onClick: fn(),
  },
  decorators: [StoreDecorator({ profile: { ...profileMockState } })],
} as Meta<typeof ProfileCardView>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
  decorators: [ThemeDecoratorV2('app_light_theme')],
}

export const PrimaryDark: Story = {
  decorators: [ThemeDecoratorV2('app_dark_theme')],
}
export const Loading: Story = {
  decorators: [
    StoreDecorator({ profile: { isLoading: true } }),
    ThemeDecoratorV2('app_light_theme'),
  ],
}
