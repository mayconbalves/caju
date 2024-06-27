import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Loader from '../Loader'

describe('Loader Component', () => {
  it('renders the loader container', () => {
    render(<Loader />)
    const loaderContainer = screen.getByTestId('loader-container')
    expect(loaderContainer).toBeInTheDocument()
  })

  it('renders the spinner', () => {
    render(<Loader />)
    const spinner = screen.getByTestId('loader-spinner')
    expect(spinner).toBeInTheDocument()
  })

  it('renders the title with the correct text', () => {
    render(<Loader />)
    const title = screen.getByTestId('loader-title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Carregando')
  })
})
