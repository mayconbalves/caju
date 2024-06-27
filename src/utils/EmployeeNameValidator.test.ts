import { validateEmployeeName } from './EmployeeNameValidator'

describe('ValidateEmployeeName', () => {
  it('Should be validate employee name', () => {
    expect(validateEmployeeName('maycon alves')).toBe(true)
  })

  it('Should be return an error', () => {
    expect(validateEmployeeName('m')).toBe(false)
  })

  it('Should be return an error only letter before space', () => {
    expect(validateEmployeeName('m ')).toBe(false)
  })

  it('Should be return an error if first charactere is a number', () => {
    expect(validateEmployeeName('1maycon')).toBe(false)
  })

  it('Should be return an error if only number', () => {
    expect(validateEmployeeName('123456789')).toBe(false)
  })

  it('Should be return an error if string dont have a space', () => {
    expect(validateEmployeeName('mayconalves')).toBe(false)
  })
})
