const isLoggingEnabled = false
export const logError = (message: string, error: any) => {
  if (isLoggingEnabled) {
    console.error(message, error)
  }
}
