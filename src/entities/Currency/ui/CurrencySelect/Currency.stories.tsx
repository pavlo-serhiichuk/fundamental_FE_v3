import type {Meta, StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {ThemeDecorator} from '@/shared/config/storybook/decorators/decorators'
import {CurrencySelect} from './CurrencySelect'
import '@/app/styles/index.scss'

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  // parameters: {
  //   layout: 'centered',
  // },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  args: {onClick: fn()},
} as Meta <typeof CurrencySelect>

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'USD',
  },
}

export const DefaultDark: Story = {
  args: {
    value: 'USD',
  },
  decorators: [ThemeDecorator('dark')],
}
