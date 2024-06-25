import {
  deleteRegistrationsById,
  fetchAllRegistrations,
  fetchRegistrationsByDocumentId,
  updateStatusRegistrations
} from '@/services'
import { documentIdMask, documentIdValidation } from '@/utils/DocumentIdHelpers'
import { useEffect, useState } from 'react'
import Collumns from './components/Columns'
import SearchBar from './components/Searchbar'
import * as S from './styles'

export type Props = {
  id: string
  status: string
}

const DashboardPage = () => {
  const [registrations, setRegistrarion] = useState<any>()
  const [toggleModal, setToggleModal] = useState(false)
  const [values, setValues] = useState({ documentId: '' })

  useEffect(() => {
    const fetchDate = async () => {
      const data = await fetchAllRegistrations()

      setRegistrarion(data)
    }

    fetchDate()
  }, [])

  const handleChange = async (event: {
    target: { name: string; value: string }
  }) => {
    const { name, value } = event.target
    setValues((prevFormData) => ({
      ...prevFormData,
      [name]: documentIdMask(value)
    }))

    if (documentIdValidation(value)) {
      const onlyCard = await fetchRegistrationsByDocumentId(value)
      setRegistrarion(onlyCard)
    } else {
      const data = await fetchAllRegistrations()

      setRegistrarion(data)
    }
  }

  const submitChangeCardStatus = (id: string, status: string) => {
    if (id && status !== '') {
      handleUpdateCard(id, status)
    } else {
      handleDeleteCard(id)
    }

    setToggleModal(!toggleModal)
  }

  const handleDeleteCard = async (id: string) => {
    const updatedData = await deleteRegistrationsById(id)

    setRegistrarion(updatedData)
  }

  const handleUpdateCard = async (id: string, status: string) => {
    const updatedData = await updateStatusRegistrations(id, status)

    setRegistrarion(updatedData)
  }

  return (
    <S.Container>
      <SearchBar values={values.documentId} onChange={handleChange} />
      <Collumns
        registrations={registrations}
        handleDeleteCard={handleDeleteCard}
        submitChangeCardStatus={submitChangeCardStatus}
      />
    </S.Container>
  )
}
export default DashboardPage
