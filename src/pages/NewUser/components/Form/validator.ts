import { isValidCPF, isValidEmail, isValidEmployeeName } from '~/utils'

const validations: Record<string, (value: string) => boolean> = {
  employeeName: isValidEmployeeName,
  email: isValidEmail,
  documentId: isValidCPF,
  admissionDate: (value: string) => !!value
}

export const validateField = (name: string, value: string): string => {
  if (name === 'documentId' && !isValidCPF(value)) {
    return 'CPF inválido.'
  }
  if (name === 'admissionDate' && !value) {
    return 'Data de admissão inválida.'
  }

  if (name === 'employeeName' && !value) {
    return 'Tamanho de nome inválido. Nome precisa ter pelo menos 2 palavras.'
  }

  const isValid = validations[name] ? validations[name](value) : true
  return isValid ? '' : `${name} inválido.`
}
