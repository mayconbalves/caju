import { fireEvent, render, screen } from '@testing-library/react'
import TextField from '.'

describe('TextField Component', () => {
  it('should render with label and placeholder', () => {
    render(
      <TextField
        id="name"
        name="name"
        label="Name"
        placeholder="Enter your name"
        value=""
        onChange={() => {}}
      />
    )

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
  })

  it('should display an error message when error is present', () => {
    render(
      <TextField
        id="name"
        name="name"
        label="Name"
        placeholder="Enter your name"
        value=""
        error="Name is required"
        onChange={() => {}}
      />
    )

    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Name' })).toHaveAttribute('aria-invalid', 'true')
  })

  it('should call onChange when typing in the input', () => {
    const handleChange = jest.fn()
    const { container } = render(
      <TextField
        id="name"
        name="name"
        label="Name"
        placeholder="Enter your name"
        value=""
        onChange={handleChange}
      />
    )

    const input = screen.getByPlaceholderText('Enter your name')
    fireEvent.change(input, { target: { value: 'John Doe' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(container).toMatchSnapshot()
  })
})
