import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header component', () => {
  it('should render children element correctly', () => {
    const { container } = render(
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
    )

    const headerElement = screen.getByText('Caju Front Teste')
    expect(headerElement).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
