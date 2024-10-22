import { useEffect, useState } from 'react'
import Loader from '~/components/Loader'
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

  const fetchAllRegisters = async () => {
    setLoad(true)
    try {
      const data = await getAllRegisters()
      if (Array.isArray(data)) {
        setRegistrations(data)
      } else {
        console.error('Expected data to be an array:', data)
        setRegistrations([])
      }
    } catch (error) {
      console.error('Error fetching registrations:', error)
    } finally {
      setLoad(false)
    }
  }

  const handleSearchByCpf = async (documentId: string) => {
    if (documentId === '') {
      fetchAllRegisters()
    } else {
      setLoad(true)
      try {
        const data = await getRegistrationByDocumentId(documentId)
        setRegistrations(data)
      } catch (error) {
        console.error('Error fetching registration by CPF:', error)
      } finally {
        setLoad(false)
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
