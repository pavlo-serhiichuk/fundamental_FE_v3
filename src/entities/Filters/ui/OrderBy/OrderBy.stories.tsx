import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {StoreDecorator, ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import {OrderBy} from './OrderBy'
import 'app/styles/index.scss'

const meta = {
  title: 'entities/Filters/OrderBy',
  component: OrderBy,
  tags: ['autodocs'],
  args: {onClick: fn()},
} as Meta<typeof OrderBy>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [StoreDecorator({filters: {}})],
}
export const PrimaryDark: Story = {
  decorators: [StoreDecorator({filters: {}}), ThemeDecorator('dark')],
}
