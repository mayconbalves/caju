import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Toast from '../Toast'

describe('Toast Component', () => {
  const mockClose = jest.fn()
  const props = {
    toast: { message: 'Test Message', error: false },
    close: mockClose
  }

  beforeEach(() => {
    render(<Toast {...props} />)
  })

  test('Should be renders the toast message correctly', () => {
    const message = screen.getByText('Test Message')
    expect(message).toBeInTheDocument()
  })

  test('Should be renders the close button correctly', () => {
    const closeButton = screen.getByText('x')
    expect(closeButton).toBeInTheDocument()
  })

  test('Should be calls close function when close button is clicked', () => {
    const closeButton = screen.getByText('x')
    fireEvent.click(closeButton)
    expect(mockClose).toHaveBeenCalled()
  })
})
