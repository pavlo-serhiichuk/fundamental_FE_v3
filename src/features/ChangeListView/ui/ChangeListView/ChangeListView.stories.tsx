import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {StoreDecorator, ThemeDecorator} from '@/shared/config/storybook/decorators/decorators'
import {ChangeListView} from './ChangeListView'
import '@/app/styles/index.scss'

const meta = {
  title: 'common/ChangeListView',
  component: ChangeListView,
  tags: ['autodocs'],
  args: {onClick: fn()},
} as Meta<typeof ChangeListView>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [StoreDecorator({})],
}
export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark'), StoreDecorator({})],
}
