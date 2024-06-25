import { render, screen } from '@testing-library/react'
import Input from '.'
import { Props } from './types'

const props: Props = {
  name: '',
  onChange: () => {},
  placeholder: '',
  value: 'test',
  type: ''
}

describe('Input', () => {
  it('Should render input', () => {
    const setup = () => {
      const utils = render(<Input {...props} />)
      const input = screen.getByTestId('input') as HTMLInputElement
      return {
        input,
        ...utils
      }
    }

    const { input } = setup()
    expect(input.value).toBe('test')
  })
})
