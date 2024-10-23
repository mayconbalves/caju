import { render, screen } from '@testing-library/react'
import { allColumns } from '~/constants'
import Columns from '.'

describe('Columns Component', () => {
  const mockOnDelete = jest.fn()
  const mockOnUpdate = jest.fn()
  const registrationsMock = [
    {
      id: '1',
      status: 'REVIEW',
      employeeName: 'John Doe',
      cpf: '12345678900',
      email: 'john@example.com',
      admissionDate: '2023-10-10'
    },
    {
      id: '2',
      status: 'APPROVED',
      employeeName: 'Jane Doe',
      cpf: '12345678900',
      email: 'jane@example.com',
      admissionDate: '2023-10-10'
    }
  ]

  it('should render all columns', () => {
    render(
      <Columns onDelete={mockOnDelete} onUpdate={mockOnUpdate} registrations={registrationsMock} />
    )

    allColumns.forEach((column) => {
      const columnTitle = screen.getByText(column.title)
      expect(columnTitle).toBeInTheDocument()
    })
  })

  it('should render registration cards in the correct columns', () => {
    render(
      <Columns onDelete={mockOnDelete} onUpdate={mockOnUpdate} registrations={registrationsMock} />
    )

    const reviewCard = screen.getByText('John Doe')
    const approvedCard = screen.getByText('Jane Doe')

    expect(reviewCard).toBeInTheDocument()
    expect(approvedCard).toBeInTheDocument()
  })

  it('should render no registration cards when there are no registrations', () => {
    render(<Columns onDelete={mockOnDelete} onUpdate={mockOnUpdate} registrations={[]} />)

    const registrationCards = screen.queryByTestId('registration-card')
    expect(registrationCards).not.toBeInTheDocument()

    allColumns.forEach((column) => {
      const columnTitle = screen.getByText(column.title)
      expect(columnTitle).toBeInTheDocument()
    })
  })

  it('should render only the registrations with the corresponding status in each column', () => {
    render(
      <Columns onDelete={mockOnDelete} onUpdate={mockOnUpdate} registrations={registrationsMock} />
    )

    allColumns.forEach((column) => {
      const filteredRegistrations = registrationsMock.filter((reg) => reg.status === column.status)

      if (filteredRegistrations.length > 0) {
        filteredRegistrations.forEach((registration) => {
          const registrationCard = screen.getByText(registration.employeeName)
          expect(registrationCard).toBeInTheDocument()
        })
      }
    })
  })

  it('should render all column titles', () => {
    const { container } = render(
      <Columns onDelete={mockOnDelete} onUpdate={mockOnUpdate} registrations={registrationsMock} />
    )

    allColumns.forEach((column) => {
      const columnTitle = screen.getByText(column.title)
      expect(columnTitle).toBeInTheDocument()
    })

    expect(container).toMatchSnapshot()
  })
})
