import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Input from '../Input'
import { Props } from './types'

describe('Input Component', () => {
  const setup = (props: Partial<Props> = {}) => {
    const initialProps: Props = {
      name: 'test-input',
      onChange: jest.fn(),
      placeholder: 'Enter text',
      value: '',
      type: 'text',
      ...props
    }
    render(<Input {...initialProps} />)
    return {
      ...initialProps
    }
  }

  test('renders the input component', () => {
    setup()
    const inputElement = screen.getByTestId('input')
    expect(inputElement).toBeInTheDocument()
  })

  test('renders with the correct placeholder', () => {
    const placeholderText = 'Test Placeholder'
    setup({ placeholder: placeholderText })
    const inputElement = screen.getByTestId('input')
    expect(inputElement).toHaveAttribute('placeholder', placeholderText)
  })

  test('renders with the correct value', () => {
    const valueText = 'Test Value'
    setup({ value: valueText })
    const inputElement = screen.getByTestId('input')
    expect(inputElement).toHaveValue(valueText)
  })

  test('calls onChange handler when the input value changes', () => {
    const handleChange = jest.fn()
    setup({ onChange: handleChange })
    const inputElement = screen.getByTestId('input')
    fireEvent.change(inputElement, { target: { value: 'New Value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
