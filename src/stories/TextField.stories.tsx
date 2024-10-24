import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import TextField from '~/components/TextField'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <TextField
        name="default"
        id="example-input"
        label="Example Input"
        placeholder="Type here..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
        maxLength={100}
      />
    )
  }
}

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('')

    return (
      <TextField
        name="with-error"
        id="example-input-error"
        label="Example Input"
        placeholder="Type here..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
        maxLength={100}
        error="This field is required."
      />
    )
  }
}

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('Initial Value')

    return (
      <TextField
        name="with-value"
        id="example-input-with-value"
        label="Example Input"
        placeholder="Type here..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
        maxLength={100}
      />
    )
  }
}
