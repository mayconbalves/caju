import { useCallback, useEffect, useState } from 'react'
import Loader from '~/components/Loader'
import { useToast } from '~/contexts/Toast/useToast'
import {
  deleteRegister,
  getAllRegisters,
  getRegistrationByDocumentId,
  updateRegistrationStatus
} from '../../services/dashboard'
import Columns from './components/Columns'
import { SearchBar } from './components/Searchbar'
import * as S from './styles'

const DashboardPage = () => {
  const [registrations, setRegistrations] = useState<any[]>([])
  const [load, setLoad] = useState<boolean>(false)
  const { showToast } = useToast()

  const fetchAllRegisters = useCallback(async () => {
    setLoad(true)
    try {
      const data = await getAllRegisters()
      if (Array.isArray(data)) {
        setRegistrations(data)
        showToast('Registros carregados com sucesso!', 'success')
      } else {
        setRegistrations([])
        showToast('Erro ao carregar registros.', 'error')
      }
    } catch {
      showToast('Erro ao carregar registros.', 'error')
    } finally {
      setLoad(false)
    }
  }, [showToast])

  const handleSearchByCpf = async (documentId: string) => {
    if (documentId === '') {
      fetchAllRegisters()
    } else {
      setLoad(true)
      try {
        const data = await getRegistrationByDocumentId(documentId)
        setRegistrations(data)
        showToast('Busca por CPF realizada com sucesso!', 'success')
      } catch {
        showToast('Erro ao buscar CPF.', 'error')
      } finally {
        setLoad(false)
      }
    }
  }

  const handleDeleteRegister = async (id: string) => {
    try {
      const success = await deleteRegister(id)
      if (success) {
        fetchAllRegisters()
        showToast('Registro deletado com sucesso!', 'success')
      }
    } catch {
      showToast('Erro ao deletar registro.', 'error')
    }
  }

  const handleUpdateRegister = async (registration: any, status: string) => {
    try {
      const success = await updateRegistrationStatus(registration, status)
      if (success) {
        fetchAllRegisters()
        showToast('Status atualizado com sucesso!', 'success')
      }
    } catch {
      showToast('Erro ao atualizar status.', 'error')
    }
  }

  useEffect(() => {
    fetchAllRegisters()
  }, [fetchAllRegisters])

  return (
    <S.Container>
      <SearchBar onSearch={handleSearchByCpf} onRefreshRegister={fetchAllRegisters} />
      <Columns
        registrations={registrations}
        onDelete={handleDeleteRegister}
        onUpdate={handleUpdateRegister}
      />
      {load && <Loader />}
    </S.Container>
  )
}

export default DashboardPage
