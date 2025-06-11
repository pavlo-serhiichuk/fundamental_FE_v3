module.exports = (layer, componentName) => `
import { type Meta, type StoryObj } from '@storybook/react'
import { ${componentName} } from './${componentName}'

const meta = {
  title: 'features/${componentName}',
  component: ${componentName},
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticlesPageGreeting>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}
`
