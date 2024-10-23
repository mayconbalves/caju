import { fireEvent, render, screen } from '@testing-library/react'
import Buton from './Button'
import IconButton from './IconButton'

describe('Component Buttons', () => {
  describe('Buton Component', () => {
    it('renders with children text', () => {
      render(
        <Buton bgcolor="#64a98c" type="button" onClick={jest.fn()}>
          Click Me
        </Buton>
      )

      const button = screen.getByRole('button', { name: /click me/i })
      expect(button).toBeInTheDocument()
    })

    it('calls onClick when clicked', () => {
      const mockOnClick = jest.fn()
      render(
        <Buton bgcolor="#64a98c" type="button" onClick={mockOnClick}>
          Click Me
        </Buton>
      )

      const button = screen.getByRole('button', { name: /click me/i })
      fireEvent.click(button)

      expect(mockOnClick).toHaveBeenCalledTimes(1)
    })

    it('renders with correct background and text color', () => {
      render(
        <Buton bgcolor="blue" color="white" onClick={jest.fn()}>
          Small Button
        </Buton>
      )

      const button = screen.getByRole('button', { name: /small button/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveStyle(`background-color: blue`)
      expect(button).toHaveStyle(`color: white`)
    })

    it('calls onClick when clicked', () => {
      const mockOnClick = jest.fn()
      render(
        <Buton bgcolor="blue" color="white" onClick={mockOnClick}>
          Small Button
        </Buton>
      )

      const button = screen.getByRole('button', { name: /small button/i })
      fireEvent.click(button)

      expect(mockOnClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('IconButton Component', () => {
    it('renders with children', () => {
      render(
        <IconButton onClick={jest.fn()}>
          <span>Icon</span>
        </IconButton>
      )

      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(screen.getByText(/icon/i)).toBeInTheDocument()
    })

    it('calls onClick when clicked', () => {
      const mockOnClick = jest.fn()
      const { container } = render(
        <IconButton onClick={mockOnClick}>
          <span>Icon</span>
        </IconButton>
      )

      const button = screen.getByRole('button')
      fireEvent.click(button)

      expect(mockOnClick).toHaveBeenCalledTimes(1)
      expect(container).toMatchSnapshot()
    })
  })
})
