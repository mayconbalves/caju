export const BASE_URL = process.env.VITE_API_URL || 'https://caju-backend.vercel.app/api'

export const allColumns = [
  { status: 'REVIEW', title: 'Pronto para revisar' },
  { status: 'APPROVED', title: 'Aprovado' },
  { status: 'REPROVED', title: 'Reprovado' }
]
