import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Flex } from './Flex'

const children = (
  <>
    <div>div 1</div>
    <div>div 2</div>
    <div>div 3</div>
    <div>div 4</div>
  </>
)

const meta = {
  title: 'shared/Flex',
  component: Flex,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => {
      alert('double')
    }),
  },
} as Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

export const Row: Story = {
  args: {
    children,
  },
}

export const RowGap8: Story = {
  args: {
    gap: '8',
    children,
  },
}

export const RowGap32: Story = {
  args: {
    gap: '32',
    children,
  },
}

export const Column: Story = {
  args: {
    direction: 'column',
    children,
  },
}

export const ColumnGap8: Story = {
  args: {
    direction: 'column',
    gap: '8',
    children,
  },
}

export const ColumnGap16: Story = {
  args: {
    direction: 'column',
    gap: '16',
    children,
  },
}
