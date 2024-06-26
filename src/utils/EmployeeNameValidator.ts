export const validateEmployeeName = (name: string): boolean => {
  if (!/\s/.test(name)) {
    return false
  }

  // Verifica se o name contém pelo menos duas letras
  if (!/[a-zA-Z].*[a-zA-Z]/.test(name)) {
    return false
  }

  // Verifica se a primeira letra não é um número
  if (/^\d/.test(name)) {
    return false
  }

  return true
}
