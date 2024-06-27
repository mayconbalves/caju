import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import TextField from '../TextField'

describe('TextField Component', () => {
  const mockOnChange = jest.fn()
  const props = {
    error: 'Error message',
    id: 'test-id',
    label: 'Test Label',
    name: 'testName',
    onChange: mockOnChange,
    placeholder: 'Test Placeholder',
    value: 'test value',
    type: 'text'
  }

  beforeEach(() => {
    render(<TextField {...props} />)
  })

  it('renders the label correctly', () => {
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
    expect(label).toHaveAttribute('for', 'test-id')
  })

  it('renders the input correctly', () => {
    const input = screen.getByPlaceholderText(
      'Test Placeholder'
    ) as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.value).toBe('test value')
    expect(input).toHaveAttribute('name', 'testName')
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders the error message correctly', () => {
    const errorMessage = screen.getByText('Error message')
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveStyle({ fontSize: '12px', color: 'red' })
  })

  it('calls onChange when input value changes', () => {
    const input = screen.getByPlaceholderText(
      'Test Placeholder'
    ) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'new value' } })
    expect(mockOnChange).toHaveBeenCalled()
  })
})
