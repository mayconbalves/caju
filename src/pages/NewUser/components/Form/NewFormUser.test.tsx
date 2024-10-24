import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { useToast } from '~/contexts/Toast/useToast'
import { createNewUser } from '~/services/new-user'
import NewUserForm from '.'

jest.mock('~/services/new-user')
jest.mock('~/contexts/Toast/useToast')

describe('NewUserForm Component', () => {
  const mockShowToast = jest.fn()

  beforeEach(() => {
    ;(useToast as jest.Mock).mockReturnValue({ showToast: mockShowToast })
    ;(createNewUser as jest.Mock).mockResolvedValue({})
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders form fields', () => {
    render(<NewUserForm />, { wrapper: MemoryRouter })

    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/CPF/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Data de admissão/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeInTheDocument()
  })

  it('should be create snapshot', () => {
    const { container } = render(<NewUserForm />, { wrapper: MemoryRouter })
    expect(container).toMatchSnapshot()
  })
})
