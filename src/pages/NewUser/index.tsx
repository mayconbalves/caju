import Button from '@/components/Buttons'
import { IconButton } from '@/components/Buttons/IconButton'
import TextField from '@/components/TextField'
import routes from '@/router/routes'
import { newUserRegistrations } from '@/services'
import { useState } from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'
import { Card, Container } from './styles'

const NewUserPage = () => {
  const history = useHistory()
  const goToHome = () => {
    history.push(routes.dashboard)
  }

  const [values, setValues] = useState({
    employeeName: '',
    email: '',
    documentId: '',
    admissionDate: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    newUserRegistrations(values)
    goToHome()
  }

  return (
    <Container>
      <Card>
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <TextField
          placeholder="Nome"
          label="Nome"
          name="employeeName"
          value={values.employeeName}
          onChange={handleChange}
        />
        <TextField
          placeholder="Email"
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          placeholder="CPF"
          label="CPF"
          name="documentId"
          value={values.documentId}
          onChange={handleChange}
        />
        <TextField
          label="Data de admissão"
          name="admissionDate"
          type="date"
          value={values.admissionDate}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Cadastrar</Button>
      </Card>
    </Container>
  )
}

export default NewUserPage
