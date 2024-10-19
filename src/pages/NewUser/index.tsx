import { useState } from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'
import Button from '~/components/Buttons'
import { IconButton } from '~/components/Buttons/IconButton'
import TextField from '~/components/TextField'
import routes from '~/router/routes'
import { createNewUser } from '~/services/new-user'
import { cpfMask, isValidCPF, isValidEmail, isValidEmployeeName } from '~/utils'
import * as S from './styles'

const NewUserPage = () => {
  const history = useHistory()

  const [formData, setFormData] = useState({
    employeeName: '',
    email: '',
    documentId: '',
    admissionDate: '',
    status: 'REVIEW'
  })

  const goToHome = () => {
    history.push(routes.dashboard)
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target

    if (name === 'employeeName') {
      if (!isValidEmployeeName(value)) {
        console.log('Nome inválido.')
      }
    }

    if (name === 'documentId') {
      if (!isValidCPF(value)) {
        console.log('Cpf inválido.')
      }
    }

    if (name === 'email') {
      if (!isValidEmail(value)) {
        console.log('Email inválido.')
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmitForm = () => {
    createNewUser(formData)
    goToHome()
  }

  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <TextField
          placeholder="Nome"
          label="Nome"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleInputChange}
        />
        <TextField
          placeholder="Email"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextField
          placeholder="CPF"
          label="CPF"
          name="documentId"
          value={cpfMask(formData.documentId)}
          onChange={handleInputChange}
        />
        <TextField
          label="Data de admissão"
          type="date"
          name="admissionDate"
          value={formData.admissionDate}
          onChange={handleInputChange}
        />
        <Button onClick={handleSubmitForm}>Cadastrar</Button>
      </S.Card>
    </S.Container>
  )
}

export default NewUserPage
