import { render, screen } from '@testing-library/react'
import RegistrationCard from '.'

describe('RegistrationCard Component', () => {
  const mockOnDelete = jest.fn()
  const mockOnUpdate = jest.fn()

  const registration = {
    id: '1',
    employeeName: 'John Doe',
    email: 'john@example.com',
    admissionDate: '01/01/2022',
    cpf: '56642105087',
    status: 'REVIEW'
  }

  it('should display the correct registration details', () => {
    render(
      <RegistrationCard
        registration={registration}
        onDelete={mockOnDelete}
        onUpdate={mockOnUpdate}
      />
    )

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('01/01/2022')).toBeInTheDocument()
  })

  it('should render action buttons correctly', () => {
    render(
      <RegistrationCard
        registration={registration}
        onDelete={mockOnDelete}
        onUpdate={mockOnUpdate}
      />
    )

    expect(screen.getByText('Apagar')).toBeInTheDocument()
    expect(screen.getByText('Aprovar')).toBeInTheDocument()
    expect(screen.getByText('Reprovar')).toBeInTheDocument()
  })

  it('should render Approve and Reject buttons when registration is in REVIEW status', () => {
    render(
      <RegistrationCard
        registration={registration}
        onDelete={mockOnDelete}
        onUpdate={mockOnUpdate}
      />
    )

    const approveButton = screen.getByText('Aprovar')
    const rejectButton = screen.getByText('Reprovar')

    expect(approveButton).toBeInTheDocument()
    expect(rejectButton).toBeInTheDocument()
  })

  it('should render Review button when registration is in APPROVED status', () => {
    const registration = {
      id: '1',
      employeeName: 'John Doe',
      email: 'john@example.com',
      admissionDate: '01/01/2022',
      cpf: '56642105087',
      status: 'APPROVED'
    }
    render(
      <RegistrationCard
        registration={registration}
        onDelete={mockOnDelete}
        onUpdate={mockOnUpdate}
      />
    )

    const reviewButton = screen.getByText('Revisar novamente')
    expect(reviewButton).toBeInTheDocument()
  })

  it('should render Review button when registration is in REPROVED status', () => {
    const registration = {
      id: '1',
      employeeName: 'John Doe',
      email: 'john@example.com',
      admissionDate: '01/01/2022',
      cpf: '56642105087',
      status: 'REPROVED'
    }

    const { container } = render(
      <RegistrationCard
        registration={registration}
        onDelete={mockOnDelete}
        onUpdate={mockOnUpdate}
      />
    )

    const reviewButton = screen.getByText('Revisar novamente')
    expect(reviewButton).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
