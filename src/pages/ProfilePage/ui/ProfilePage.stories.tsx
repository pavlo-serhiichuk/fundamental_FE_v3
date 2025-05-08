import {fn} from '@storybook/test'
import {type Meta, type StoryObj} from '@storybook/react'
import {profileMockState} from '@/entities/Profile/model/slice/profileState'
import {StoreDecorator, ThemeDecorator} from '@/shared/config/storybook/decorators/decorators'
import ProfilePage from './ProfilePage'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') }),
  },
  decorators: [StoreDecorator({profile: {readonly: true}})],
} as Meta <typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

export const WithData: Story = {args: {}, decorators: [StoreDecorator({profile: profileMockState})]}
export const WithDataDark: Story = {args: {}, decorators: [ThemeDecorator('dark'), StoreDecorator({profile: profileMockState})]}
