import { Meta, StoryObj } from '@storybook/react'
import RegistrationCard from '~/pages/Dashboard/components/RegistrationCard'

const registrationExample = {
  id: '1',
  employeeName: 'John Doe',
  email: 'johndoe@example.com',
  admissionDate: '2023-10-10',
  cpf: '123.456.789-10',
  status: 'REVIEW'
}

export default {
  title: 'Components/RegistrationCard',
  component: RegistrationCard,
  args: {
    registration: registrationExample,
    onDelete: () => alert('Registro apagado!'),
    onUpdate: () => alert(`Registro atualizado para ${registrationExample.status}!`)
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof RegistrationCard>

type Story = StoryObj<typeof RegistrationCard>

export const Default: Story = {}
