import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import NotificationModal from '../NotificationModal'

describe('NotificationModal Component', () => {
  const mockSetToggleModal = jest.fn()
  const mockSubmitChangeCardStatus = jest.fn()
  const values = { id: '123', status: 'active' }

  beforeEach(() => {
    render(
      <NotificationModal
        setToggleModal={mockSetToggleModal}
        submitChangeCardStatus={mockSubmitChangeCardStatus}
        values={values}
      />
    )
  })

  it('renders the modal component', () => {
    const modal = screen.getByTestId('notification-modal')
    expect(modal).toBeInTheDocument()
  })

  it('renders the title correctly', () => {
    const title = screen.getByText('Deseja confirmar essa ação?')
    expect(title).toBeInTheDocument()
  })

  it('calls setToggleModal with false when close icon is clicked', () => {
    const closeIcon = screen.getByTestId('close-icon')
    fireEvent.click(closeIcon)
    expect(mockSetToggleModal).toHaveBeenCalledWith(false)
  })

  it('calls submitChangeCardStatus with correct values when confirm button is clicked', () => {
    const confirmButton = screen.getByTestId('confirm-button')
    fireEvent.click(confirmButton)
    expect(mockSubmitChangeCardStatus).toHaveBeenCalledWith(
      values.id,
      values.status
    )
  })

  test('calls setToggleModal with false when cancel button is clicked', () => {
    const cancelButton = screen.getByTestId('cancel-button')
    fireEvent.click(cancelButton)
    expect(mockSetToggleModal).toHaveBeenCalledWith(false)
  })
})
