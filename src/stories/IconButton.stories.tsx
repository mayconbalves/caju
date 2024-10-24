import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { HiRefresh } from 'react-icons/hi'
import { IconButton } from '~/components/Buttons'

const meta: Meta<typeof IconButton> = {
  title: 'Components/Buttons',
  component: IconButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    children: 'Click me'
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {
  args: {
    children: (
      <>
        <HiRefresh />
      </>
    )
  }
}
