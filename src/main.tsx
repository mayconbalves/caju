import { createRoot } from 'react-dom/client'
import { ToastProvider } from '~/contexts/Toast/useToast'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ToastProvider>
    <App />
  </ToastProvider>
)
