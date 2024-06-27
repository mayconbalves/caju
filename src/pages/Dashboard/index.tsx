import Loader from '@/components/Loader'
import {
  deleteRegistrationsById,
  fetchAllRegistrations,
  fetchRegistrationsByDocumentId,
  updateStatusRegistrations
} from '@/services'
import { documentIdMask, documentIdValidation } from '@/utils/DocumentIdHelpers'
import { ChangeEvent, useEffect, useState } from 'react'
import Collumns from './components/Columns'
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
      if (id && status !== 'Excluir') {
        await handleUpdateCard(id, status)
      } else {
        await handleDeleteCard(id)
      }
      setToggleModal(!toggleModal)
    }

    await withLoading(handleChangeStatus)
  }

  const handleDeleteCard = async (id: string) => {
    const updatedData = await withLoading(() => deleteRegistrationsById(id))
    setRegistrations(updatedData)
  }

  const handleUpdateCard = async (id: string, status: string) => {
    const updatedData = await withLoading(() =>
      updateStatusRegistrations(id, status)
    )
    setRegistrations(updatedData)
  }

  return (
    <Container>
      {loading && <Loader />}
      <SearchBar
        values={values.documentId}
        onChange={handleChange}
        fetchRegistrations={fetchRegistrations}
      />
      <Collumns
        registrations={registrations}
        submitChangeCardStatus={submitChangeCardStatus}
      />
    </Container>
  )
}

export default DashboardPage
