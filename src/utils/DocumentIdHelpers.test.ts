import { documentIdMask, documentIdValidation } from './DocumentIdHelpers'

describe('DocumentId', () => {
  it('Should be entering the CPF apply the mask', () => {
    expect(documentIdMask('05452948007')).toBe('054.529.480-07')
  })

  it('Should be return the CPF valid', () => {
    expect(documentIdValidation('05452948007')).toBe(true)
  })

  it('Should be return the CPF is invalid', () => {
    expect(documentIdValidation('05452948008')).toBe(false)
  })
})
