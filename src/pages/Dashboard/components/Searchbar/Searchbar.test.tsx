import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { SearchBar } from '.'

describe('SearchBar Component', () => {
  const mockOnSearch = jest.fn()
  const mockOnRefreshRegister = jest.fn()
  const history = createMemoryHistory()

  it('renders error message for invalid CPF', () => {
    render(
      <Router history={history}>
        <SearchBar onSearch={mockOnSearch} onRefreshRegister={mockOnRefreshRegister} />
      </Router>
    )

    const input = screen.getByPlaceholderText(/Digite um CPF válido/i)
    fireEvent.change(input, { target: { value: '111.111.111-11' } })

    expect(screen.getByText('CPF inválido. Por favor, verifique.')).toBeInTheDocument()
  })

  it('clears error message when valid CPF is entered', () => {
    render(
      <Router history={history}>
        <SearchBar onSearch={mockOnSearch} onRefreshRegister={mockOnRefreshRegister} />
      </Router>
    )

    const input = screen.getByPlaceholderText(/Digite um CPF válido/i)

    fireEvent.change(input, { target: { value: '111.111.111-11' } })
    expect(screen.getByText('CPF inválido. Por favor, verifique.')).toBeInTheDocument()

    fireEvent.change(input, { target: { value: '123.456.789-09' } })
    expect(screen.queryByText('CPF inválido. Por favor, verifique.')).not.toBeInTheDocument()
  })

  it('calls onSearch with unmasked CPF on valid input', () => {
    render(
      <Router history={history}>
        <SearchBar onSearch={mockOnSearch} onRefreshRegister={mockOnRefreshRegister} />
      </Router>
    )

    const input = screen.getByPlaceholderText(/Digite um CPF válido/i)
    fireEvent.change(input, { target: { value: '123.456.789-09' } })

    expect(mockOnSearch).toHaveBeenCalledWith('12345678909')
  })

  it('navigates to the New Admission page when the button is clicked', () => {
    render(
      <Router history={history}>
        <SearchBar onSearch={mockOnSearch} onRefreshRegister={mockOnRefreshRegister} />
      </Router>
    )

    const newAdmissionButton = screen.getByText(/Nova Admissão/i)
    fireEvent.click(newAdmissionButton)

    expect(history.location.pathname).toBe('/new-user')
  })

  it('does not call onSearch with invalid CPF', () => {
    const { container } = render(
      <Router history={history}>
        <SearchBar onSearch={mockOnSearch} onRefreshRegister={mockOnRefreshRegister} />
      </Router>
    )

    mockOnSearch.mockClear()

    const input = screen.getByPlaceholderText(/Digite um CPF válido/i)
    fireEvent.change(input, { target: { value: '111.111.111-11' } })

    expect(mockOnSearch).not.toHaveBeenCalled()
    expect(container).toMatchSnapshot()
  })
})
