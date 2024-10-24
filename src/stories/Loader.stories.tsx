import type { Meta, StoryObj } from '@storybook/react'
import Loader from '~/components/Loader'

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return <Loader />
  }
}
