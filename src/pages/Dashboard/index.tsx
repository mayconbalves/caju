import { useEffect, useState } from 'react'
import {
  deleteRegistrationsById,
  fetchAllRegistrations,
  updateStatusRegistrations
} from '../../services'
import Collumns from './components/Columns'
import { SearchBar } from './components/Searchbar'
import * as S from './styles'

export type Props = {
  id: string
  status: string
}

const DashboardPage = () => {
  const [registrations, setRegistrarion] = useState<any>()
  const [toggleModal, setToggleModal] = useState(false)

  useEffect(() => {
    const fetchDate = async () => {
      const data = await fetchAllRegistrations()

      setRegistrarion(data)
    }

    fetchDate()
  }, [])

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
      <SearchBar />
      <Collumns
        registrations={registrations}
        handleDeleteCard={handleDeleteCard}
        submitChangeCardStatus={submitChangeCardStatus}
      />
    </S.Container>
  )
}
export default DashboardPage
