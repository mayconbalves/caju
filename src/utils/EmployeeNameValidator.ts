export const validateEmployeeName = (name: string): boolean => {
  if (!/\s/.test(name)) {
    return false
  }

  if (!/[a-zA-Z].*[a-zA-Z]/.test(name)) {
    return false
  }

  if (/^\d/.test(name)) {
    return false
  }

  return true
}
