import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import ConfirmModal from '~/components/ConfirmModal'

const meta: Meta<typeof ConfirmModal> = {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [showModal, setShowModal] = useState(true)

    return (
      <ConfirmModal
        isOpen={showModal}
        message="Deseja realizar essa ação?"
        onConfirm={() => setShowModal(!showModal)}
        onCancel={() => setShowModal(!showModal)}
      />
    )
  }
}
