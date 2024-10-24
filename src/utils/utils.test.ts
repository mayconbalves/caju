import { cpfMask, isValidCPF, isValidEmail, isValidEmployeeName } from '.'

describe('Utils components', () => {
  describe('cpfMask', () => {
    it('shoud be correctly format', () => {
      expect(cpfMask('123456789')).toBe('123.456.789')
    })

    it('should be correctly complete cpf format', () => {
      expect(cpfMask('12345678901')).toBe('123.456.789-01')
    })

    it('should be ignore not number charactere', () => {
      expect(cpfMask('123a456b789c01')).toBe('123.456.789-01')
    })
  })

  describe('isValidCPF', () => {
    it('shoud be return true if cpf is valid', () => {
      expect(isValidCPF('23457180059')).toBe(true)
    })

    it('shoud be return false if cpf is invalid', () => {
      expect(isValidCPF('23457180058')).toBeFalsy()
    })
  })

  describe('isValidEmail', () => {
    it('shoud be return true if email is valid', () => {
      expect(isValidEmail('test@test.com')).toBe(true)
    })

    it('shoud be return false if email is invalid', () => {
      expect(isValidEmail('test@test')).toBeFalsy()
    })
  })

  describe('isValidEmployeeName', () => {
    it('shoud be return true if employee name is valid', () => {
      expect(isValidEmployeeName('test caju')).toBe(true)
    })

    it('shoud be return false if employee name without middle name', () => {
      expect(isValidEmployeeName('test')).toBeFalsy()
    })

    it('shoud be return false if employee name without a blank space', () => {
      expect(isValidEmployeeName('testcaju')).toBeFalsy()
    })

    it('shoud be return false if employee name length less 2 character', () => {
      expect(isValidEmployeeName('te')).toBeFalsy()
    })

    it('shoud be return false if employee name begin with number', () => {
      expect(isValidEmployeeName('1test')).toBeFalsy()
    })
  })
})
