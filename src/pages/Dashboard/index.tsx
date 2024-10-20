import { useEffect, useState } from 'react'
import {
  deleteRegister,
  getAllRegisters,
  getRegistrationByDocumentId,
  updateRegistrationStatus
} from '../../services/dashboard'
import Collumns from './components/Columns'
import { SearchBar } from './components/Searchbar'
import * as S from './styles'

const DashboardPage = () => {
  const [registrations, setRegistrations] = useState<any[]>([])

  const fetchAllRegisters = async () => {
    try {
      const data = await getAllRegisters()
      setRegistrations(data)
    } catch (error) {
      console.error('Error fetching registrations:', error)
    }
  }

  const handleSearchByCpf = async (documentId: string) => {
    if (documentId === '') {
      fetchAllRegisters()
    } else {
      try {
        const data = await getRegistrationByDocumentId(documentId)
        setRegistrations(data)
      } catch (error) {
        console.error('Error fetching registration by CPF:', error)
      }
    }
  }

  const handleDeleteRegister = async (id: string) => {
    try {
      await deleteRegister(id)
      fetchAllRegisters()
    } catch (error) {
      console.error('Error deleting registration:', error)
    }
  }

  const handleUpdateRegister = async (registration: any, status: string) => {
    try {
      await updateRegistrationStatus(registration, status)
      fetchAllRegisters()
    } catch (error) {
      console.error('Error updating registration:', error)
    }
  }

  useEffect(() => {
    fetchAllRegisters()
  }, [])

  return (
    <S.Container>
      <SearchBar onSearch={handleSearchByCpf} />
      <Collumns
        registrations={registrations}
        onDelete={handleDeleteRegister}
        onUpdate={handleUpdateRegister}
      />
    </S.Container>
  )
}

export default DashboardPage
