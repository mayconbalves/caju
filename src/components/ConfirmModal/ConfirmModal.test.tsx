import { fireEvent, render, screen } from '@testing-library/react'
import ConfirmationModal from '.'

describe('ConfirmationModal', () => {
  const mockOnConfirm = jest.fn()
  const mockOnCancel = jest.fn()

  beforeEach(() => {
    render(
      <ConfirmationModal
        isOpen={true}
        message="Are you sure?"
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    )
  })

  it('renders correctly when open', () => {
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Are you sure?')).toBeInTheDocument()
  })

  it('calls onConfirm when Confirm button is clicked', () => {
    const confirmButton = screen.getByRole('button', { name: /confirmar/i })
    fireEvent.click(confirmButton)
    expect(mockOnConfirm).toHaveBeenCalledTimes(1)
  })

  it('calls onCancel when Cancel button is clicked', () => {
    const cancelButton = screen.getByRole('button', { name: /cancelar/i })
    fireEvent.click(cancelButton)
    expect(mockOnCancel).toHaveBeenCalledTimes(1)
  })

  it('should be render snapshot', () => {
    const { container } = render(
      <ConfirmationModal
        isOpen={false}
        message="Are you sure?"
        onConfirm={mockOnConfirm}
        onCancel={mockOnCancel}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
