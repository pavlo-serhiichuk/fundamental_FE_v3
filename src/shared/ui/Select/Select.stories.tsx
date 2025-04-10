import {type Meta, type StoryObj} from '@storybook/react'
import {fn} from '@storybook/test'
import {ThemeDecorator} from 'shared/config/storybook/decorators/decorators'
import {Select} from './Select'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Select',
  component: Select,
  args: {
    selectName: 'Select name',
    options: ['option 1', 'option 2', 'option 3'],
    onClick: fn(),
    onDoubleClick: fn(() => {
      alert('double')
    }),
  },
} as Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')],
}
