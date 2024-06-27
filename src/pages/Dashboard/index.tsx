import Loader from '@/components/Loader'
import Toast from '@/components/Toast'
import {
  deleteRegistrationsById,
  fetchAllRegistrations,
  fetchRegistrationsByDocumentId,
  updateStatusRegistrations
} from '@/services'
import { documentIdMask, documentIdValidation } from '@/utils/DocumentIdHelpers'
import { ChangeEvent, useEffect, useState } from 'react'
import Columns from './components/Columns'
import SearchBar from './components/Searchbar'
import { Container } from './styles'

interface Values {
  documentId: string
}

const DashboardPage: React.FC = () => {
  const [registrations, setRegistrations] = useState<any>()
  const [toggleModal, setToggleModal] = useState<boolean>(false)
  const [values, setValues] = useState<Values>({ documentId: '' })
  const [loading, setLoading] = useState<boolean>(false)
  const [toast, setToast] = useState({ error: false, message: '' })

  const withLoading = async <T,>(func: () => Promise<T>): Promise<T> => {
    setLoading(true)
    try {
      const result = await func()
      return result
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await withLoading(fetchAllRegistrations)
      setRegistrations(data)
    }

    fetchData()
  }, [])

  const fetchRegistrations = async () => {
    const data = await withLoading(fetchAllRegistrations)
    setRegistrations(data)
  }

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues((prevFormData) => ({
      ...prevFormData,
      [name]: documentIdMask(value)
    }))

    const fetchAndSetData = async () => {
      if (documentIdValidation(value)) {
        const onlyCard = await fetchRegistrationsByDocumentId(value)
        setRegistrations(onlyCard)
      } else {
        const data = await fetchAllRegistrations()
        setRegistrations(data)
      }
    }

    await withLoading(fetchAndSetData)
  }

  const submitChangeCardStatus = async (id: string, status: string) => {
    const handleChangeStatus = async () => {
      if (id && status !== '') {
        await handleUpdateCard(id, status)
        setToast({ error: false, message: 'Status atualizado com sucesso.' })
      } else {
        await handleDeleteCard(id)
        setToast({ error: false, message: 'Status atualizado com sucesso.' })
      }
      setToggleModal(!toggleModal)
    }

    await withLoading(handleChangeStatus)
  }

  const handleDeleteCard = async (id: string) => {
    try {
      const updatedData = await withLoading(() => deleteRegistrationsById(id))
      setRegistrations(updatedData)
      setToast({ error: false, message: 'Registro deletado com sucesso.' })
    } catch (error) {
      console.error('Erro ao deletar registro:', error)
      setToast({ error: true, message: 'Erro ao deletar registro.' })
    }
  }

  const handleUpdateCard = async (id: string, status: string) => {
    try {
      const updatedData = await withLoading(() =>
        updateStatusRegistrations(id, status)
      )
      setRegistrations(updatedData)
      setToast({ error: false, message: 'Status atualizado com sucesso.' })
    } catch (error) {
      console.error('Erro ao atualizar status:', error)
      setToast({ error: true, message: 'Erro ao atualizar status.' })
    }
  }

  const closeToast = () => {
    setToast({ error: false, message: '' })
  }

  return (
    <Container>
      {loading && <Loader />}
      {toast.message && <Toast toast={toast} close={closeToast} />}
      <SearchBar
        values={values.documentId}
        onChange={handleChange}
        fetchRegistrations={fetchRegistrations}
      />
      <Columns
        registrations={registrations}
        submitChangeCardStatus={submitChangeCardStatus}
      />
    </Container>
  )
}

export default DashboardPage
