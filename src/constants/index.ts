import.meta.env.MODE === 'development'
  ? 'http://localhost:3000'
  : 'https://gist.githubusercontent.com/mayconbalves/a54bc9f426f086ce1f7b011e8eefca2b/raw/8d3f223b2c7de11c544bb4e2f82cce18e8997ceb/db.json'

export const allColumns = [
  { status: 'REVIEW', title: 'Pronto para revisar' },
  { status: 'APPROVED', title: 'Aprovado' },
  { status: 'REPROVED', title: 'Reprovado' }
]
