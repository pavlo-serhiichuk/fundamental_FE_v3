import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import {Tabs, TabsProps} from './Tabs'
import 'app/styles/index.scss'

const args = {
  options: [
    {value: 'tab 1', content: 'tab 1 el'},
    {value: 'tab 2', content: 'tab 2 el'},
    {value: 'tab 3', content: 'tab 3 el'},
  ],
  selected: 'tab 3',
  onChangeTab: fn(),
}

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args,
} as Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')],
}
