export type Props = {
  toast: {
    error: boolean
    message: string
  }
  close: () => void
}

export type ContainerProps = {
  error: boolean
}
