import { validateEmail } from './EmailValidator'

describe('ValidateEmail', () => {
  it('Should be validate email', () => {
    expect(validateEmail('test@test.com')).toBe(true)
  })

  it('Should be return an error', () => {
    expect(validateEmail('test@test')).toBe(false)
  })
})
