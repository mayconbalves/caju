export const isValidEmployeeName = (name: string): boolean => {
  const regex = /^[^\d][A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]+)+$/
  return regex.test(name.trim())
}
