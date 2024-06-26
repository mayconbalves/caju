export const validateEmail = (email: string): boolean => {
  const cleanedEmail = email.replace(/[^a-zA-Z0-9@._-]/g, '')
  const re = /\S+@\S+\.\S+/
  return re.test(cleanedEmail)
}
