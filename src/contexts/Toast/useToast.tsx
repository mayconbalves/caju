import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

interface ToastContextProps {
  showToast: (message: string, type: 'success' | 'error') => void
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast deve ser usado dentro de um ToastProvider')
  }
  return context
}

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<{ message: string; type: 'success' | 'error' }[]>([])

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToasts((prev) => [...prev, { message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.slice(1))
    }, 3000)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 999 }}>
        {toasts.map((toast, index) => (
          <div
            key={index}
            style={{
              marginBottom: '10px',
              padding: '10px 20px',
              borderRadius: '5px',
              color: '#fff',
              backgroundColor: toast.type === 'success' ? 'green' : 'red'
            }}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
